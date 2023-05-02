/*! Dates Library v1.1.4 */
const BixbyDurationUnit = {
    YEARS: "Years",
    MONTHS: "Months",
    DAYS: "Days",
    HOURS: "Hours",
    MINUTES: "Minutes",
    SECONDS: "Seconds",
    MILLIS: "Millis",
};
export function durationFromMilliseconds(milliseconds) {
    const duration = {
        periodDays: 0,
        periodHours: 0,
        periodMinutes: 0,
        periodSeconds: 0,
        periodMilliseconds: 0,
    };
    duration.periodMilliseconds = milliseconds % 1000;
    milliseconds = Math.floor(milliseconds / 1000);
    duration.periodSeconds = milliseconds % 60;
    milliseconds = Math.floor(milliseconds / 60);
    duration.periodMinutes = milliseconds % 60;
    milliseconds = Math.floor(milliseconds / 60);
    duration.periodHours = milliseconds % 24;
    milliseconds = Math.floor(milliseconds / 24);
    duration.periodDays = milliseconds;
    return duration;
}
export default class ZonedDateTime {
    static setVivContext(vivContext) {
        ZonedDateTime._vivContext = vivContext;
    }
    static _getTimeZoneOffset(timeZone, millisecondsFromEpoch) {
        const formatter = new Intl.DateTimeFormat("en-GB", {
            timeZone,
            timeZoneName: "short",
        });
        const timeZoneOffset = formatter
            .formatToParts(new Date(millisecondsFromEpoch))
            .find((part) => part.type === "timeZoneName")?.value;
        if (timeZoneOffset === undefined || timeZoneOffset === "UTC") {
            return { offsetHours: 0, offsetMinutes: 0 };
        }
        const timeZoneOffsetValue = timeZoneOffset.split("GMT")[1];
        const isNegative = timeZoneOffsetValue.includes("-");
        const offsetHours = timeZoneOffsetValue.includes(":")
            ? parseInt(timeZoneOffsetValue.split(":")[0], 10)
            : parseInt(timeZoneOffsetValue, 10);
        const offsetMinutes = timeZoneOffsetValue.includes(":")
            ? parseInt(timeZoneOffsetValue.split(":")[1], 10)
            : 0;
        return {
            offsetHours,
            offsetMinutes: isNegative ? -offsetMinutes : offsetMinutes,
        };
    }
    static now(timeZone) {
        return new ZonedDateTime(timeZone ?? ZonedDateTime._vivContext.timezone, ZonedDateTime._vivContext.testToday ?? Date.now());
    }
    static of(timeZoneId, year = 0, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0) {
        const timeZone = timeZoneId ?? ZonedDateTime._vivContext.timezone;
        const millisecondsFromEpoch = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
        const { offsetHours, offsetMinutes } = ZonedDateTime._getTimeZoneOffset(timeZone, millisecondsFromEpoch);
        return new ZonedDateTime(timeZone, millisecondsFromEpoch - (offsetHours * 60 + offsetMinutes) * 60 * 1000);
    }
    static fromDate(date) {
        const zdt = new ZonedDateTime();
        const millisecondsFromEpoch = Date.UTC(date.year ?? zdt.getYear(), date.month ? date.month - 1 : zdt.getMonth() - 1, date.day ?? zdt.getDay());
        return new ZonedDateTime(ZonedDateTime._vivContext.timezone, millisecondsFromEpoch);
    }
    static fromDateTime(dateTime) {
        const timeZoneId = dateTime?.time?.timezone ?? ZonedDateTime._vivContext.timezone;
        if (dateTime?.utcInstant) {
            return new ZonedDateTime(timeZoneId, dateTime.utcInstant);
        }
        const millisecondsFromEpoch = this._vivContext.testToday || Date.now();
        const zdt = new ZonedDateTime(timeZoneId, millisecondsFromEpoch);
        return ZonedDateTime.of(timeZoneId, dateTime?.date?.year ?? zdt.getYear(), dateTime?.date?.month ?? zdt.getMonth(), dateTime?.date?.day ?? zdt.getDay(), dateTime?.time?.hour ?? zdt.getHour(), dateTime?.time?.minute ?? zdt.getMinute(), dateTime?.time?.second ?? zdt.getSecond(), dateTime?.time?.millisecond ?? zdt.getMillisecond());
    }
    static parseDate(date, timeZoneId) {
        const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
        const match = date.match(dateRegex);
        if (match === null) {
            throw new Error("Invalid date time string. Must be in ISO 8601 format. For example, '2020-01-01T00:00:00.000Z'");
        }
        const [_date, year, month, day] = match;
        const zdt = new ZonedDateTime(timeZoneId ?? ZonedDateTime._vivContext.timezone, ZonedDateTime._vivContext.testToday ?? Date.now());
        return ZonedDateTime.of(timeZoneId, parseInt(year, 10), parseInt(month, 10), parseInt(day, 10), zdt.getHour(), zdt.getMinute(), zdt.getSecond(), zdt.getMillisecond());
    }
    static parseTime(time, timeZoneId) {
        const timeRegex = /^(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))$/;
        const match = time.match(timeRegex);
        if (match === null) {
            throw new Error("Invalid time string. Must be in ISO 8601 format. For example, '00:00:00.000' or '00:00:00'");
        }
        const [_date, hour, minutes, second, milliseconds] = match;
        const zdt = new ZonedDateTime(timeZoneId ?? ZonedDateTime._vivContext.timezone, ZonedDateTime._vivContext.testToday ?? Date.now());
        return ZonedDateTime.of(timeZoneId, zdt.getYear(), zdt.getMonth(), zdt.getDay(), parseInt(hour, 10), parseInt(minutes, 10), parseInt(second, 10), parseInt(milliseconds, 10));
    }
    static parseDateTime(dateTime, timeZoneId) {
        const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?(?:(Z)|([+-]\d{2}(?::\d{2})?))?$/;
        const match = dateTime.match(dateTimeRegex);
        if (match === null) {
            throw new Error("Invalid date string. Must be in ISO 8601 format. For example, '2020-01-01T00:00:00.000Z' or '2020-01-01T00:00:00' or '2020-01-01T00:00:00.000+00:00''");
        }
        const [_dateTime, year, month, day, hour, minute, second, millisecond, isUtc, timeZoneOffset,] = match;
        let offsetHours = 0;
        let offsetMinutes = 0;
        if (!isUtc && timeZoneOffset !== undefined) {
            const offsetSign = timeZoneOffset.startsWith("-") ? -1 : 1;
            [offsetHours, offsetMinutes] = timeZoneOffset
                .slice(1)
                .split(":")
                .map((n) => parseInt(n, 10) * offsetSign);
        }
        return ZonedDateTime.of(timeZoneId, parseInt(year, 10), parseInt(month, 10), parseInt(day, 10), parseInt(hour, 10) + offsetHours, parseInt(minute, 10) + offsetMinutes, parseInt(second, 10), parseInt(millisecond ?? "0", 10));
    }
    static _parseDateTimeString() {
        return (input, timeZoneId) => {
            let milliseconds;
            if (input.includes("T") &&
                !input.includes("Z") &&
                (input.includes("+") || input.includes("-"))) {
                const [dateStr, timeWithOffset] = input.split("T");
                const offset = timeWithOffset.match(/([+-]\d{2}):(\d{2})/);
                if (!offset) {
                    milliseconds = input.includes("Z")
                        ? Date.parse(input)
                        : Date.parse(input + "Z");
                }
                else {
                    const [offsetHours, offsetMinutes] = offset
                        .slice(1)
                        .map((s) => parseInt(s, 10));
                    milliseconds =
                        Date.parse(dateStr) +
                            (offsetHours * 60 + offsetMinutes) * 60 * 1000;
                }
            }
            else {
                milliseconds = Date.parse(input);
            }
            if (isNaN(milliseconds)) {
                throw new Error("Invalid date string. If you need pattern matching use a library like datetime or moment.js");
            }
            return new ZonedDateTime(timeZoneId ?? ZonedDateTime._vivContext.timezone, milliseconds);
        };
    }
    constructor(timeZoneIdOrGeoPoint, millisecondsFromEpoch) {
        if (ZonedDateTime._vivContext === undefined) {
            throw new Error("ZonedDateTime._vivContext is undefined. Call ZonedDateTime.setVivContext($vivContext) before initialization.");
        }
        if (typeof timeZoneIdOrGeoPoint === "object" &&
            "latitude" in timeZoneIdOrGeoPoint &&
            "longitude" in timeZoneIdOrGeoPoint) {
            throw new Error("ZonedDateTime not implemented using GeoPoint.");
        }
        this._timeZoneId =
            timeZoneIdOrGeoPoint ?? ZonedDateTime._vivContext.timezone;
        this._millisFromEpoch =
            millisecondsFromEpoch ??
                ZonedDateTime._vivContext.testToday ??
                Date.now();
    }
    getMillisFromEpoch() {
        return this._millisFromEpoch;
    }
    getTimeZoneId() {
        return this._timeZoneId;
    }
    getDateTime() {
        return {
            date: {
                year: this.getYear(),
                month: this.getMonth(),
                day: this.getDay(),
            },
            time: {
                hour: this.getHour(),
                minute: this.getMinute(),
                second: this.getSecond(),
                millisecond: this.getMillisecond(),
                timezone: this.getTimeZoneId(),
            },
            utcInstant: this.getMillisFromEpoch(),
        };
    }
    getDayOfWeek() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            weekday: "short",
        });
        const parts = dateTimeFormat.formatToParts(date);
        const dateString = parts[0].value;
        switch (dateString) {
            case "Mon":
                return 1;
            case "Tue":
                return 2;
            case "Wed":
                return 3;
            case "Thu":
                return 4;
            case "Fri":
                return 5;
            case "Sat":
                return 6;
            case "Sun":
                return 7;
        }
    }
    getYear() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            year: "numeric",
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getMonth() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            month: "numeric",
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getDay() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            day: "numeric",
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getHour() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            hour: "numeric",
            hour12: false,
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10) % 24;
    }
    getMinute() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            minute: "numeric",
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getSecond() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            second: "numeric",
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getMillisecond() {
        const date = new Date(this.getMillisFromEpoch());
        const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
            timeZone: this.getTimeZoneId(),
            fractionalSecondDigits: 3,
        });
        const parts = dateTimeFormat.formatToParts(date);
        return parseInt(parts[0].value, 10);
    }
    getTimeZoneOffset() {
        const { offsetHours, offsetMinutes } = ZonedDateTime._getTimeZoneOffset(this.getTimeZoneId(), this.getMillisFromEpoch());
        return offsetHours * 60 * 60 + offsetMinutes * 60;
    }
    isDST() {
        const zdt = new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
        const janOffset = zdt.withDay(1).withMonth(1).getTimeZoneOffset() * -1;
        const julOffset = zdt.withDay(1).withMonth(6).getTimeZoneOffset() * -1;
        return Math.max(janOffset, julOffset) !== zdt.getTimeZoneOffset() * -1;
    }
    withYear(year) {
        return ZonedDateTime.of(this.getTimeZoneId(), year, this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    withMonth(month) {
        const date = new Date(this.getMillisFromEpoch());
        return ZonedDateTime.of(this.getTimeZoneId(), date.getUTCFullYear(), month, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    }
    withDay(day) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), day, this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    withHour(hour) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), hour, this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    withMinute(minute) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), minute, this.getSecond(), this.getMillisecond());
    }
    withSecond(second) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), second, this.getMillisecond());
    }
    withMillisecond(millisecond) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), millisecond);
    }
    withZoneSameInstant(timeZoneId) {
        return new ZonedDateTime(timeZoneId, this.getMillisFromEpoch());
    }
    withZoneSameLocal(timeZoneId) {
        const dateTime = this.getDateTime();
        return ZonedDateTime.of(timeZoneId, dateTime.date?.year, dateTime.date?.month, dateTime.date?.day, dateTime.time?.hour, dateTime.time?.minute, dateTime.time?.second, dateTime.time?.millisecond);
    }
    plusYears(years) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear() + years, this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    plusMonths(months) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth() + months, this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    plusDays(days) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay() + days, this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    plusHours(hours) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour() + hours, this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    plusMinutes(minutes) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute() + minutes, this.getSecond(), this.getMillisecond());
    }
    plusSeconds(seconds) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond() + seconds, this.getMillisecond());
    }
    plusMilliseconds(milliseconds) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond() + milliseconds);
    }
    plusDuration(duration) {
        const { offsetHours, offsetMinutes } = ZonedDateTime._getTimeZoneOffset(this.getTimeZoneId(), this.getMillisFromEpoch());
        let zdt = new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
        if (duration.periodYears) {
            zdt = zdt.withYear(zdt.getYear() + duration.periodYears);
        }
        if (duration.periodMonths) {
            zdt = zdt.withMonth(zdt.getMonth() + duration.periodMonths);
        }
        if (duration.periodDays) {
            zdt = zdt.withDay(zdt.getDay() + duration.periodDays);
        }
        if (duration.periodHours) {
            zdt = zdt.withHour(zdt.getHour() + duration.periodHours + offsetHours);
        }
        if (duration.periodMinutes) {
            zdt = zdt.withMinute(zdt.getMinute() + duration.periodMinutes + offsetMinutes);
        }
        if (duration.periodSeconds) {
            zdt = zdt.withSecond(zdt.getSecond() + duration.periodSeconds);
        }
        if (duration.periodMilliseconds) {
            zdt = zdt.withMillisecond(zdt.getMillisecond() + duration.periodMilliseconds);
        }
        return zdt;
    }
    minusYears(years) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear() - years, this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    minusMonths(months) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth() - months, this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    minusDays(days) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay() - days, this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    minusHours(hours) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour() - hours, this.getMinute(), this.getSecond(), this.getMillisecond());
    }
    minusMinutes(minutes) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute() - minutes, this.getSecond(), this.getMillisecond());
    }
    minusSeconds(seconds) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond() - seconds, this.getMillisecond());
    }
    minusMilliseconds(milliseconds) {
        return ZonedDateTime.of(this.getTimeZoneId(), this.getYear(), this.getMonth(), this.getDay(), this.getHour(), this.getMinute(), this.getSecond(), this.getMillisecond() - milliseconds);
    }
    minusDuration(duration) {
        const { offsetHours, offsetMinutes } = ZonedDateTime._getTimeZoneOffset(this.getTimeZoneId(), this.getMillisFromEpoch());
        let zdt = new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
        if (duration.periodYears) {
            zdt = zdt.withYear(zdt.getYear() - duration.periodYears);
        }
        if (duration.periodMonths) {
            zdt = zdt.withMonth(zdt.getMonth() - duration.periodMonths);
        }
        if (duration.periodDays) {
            zdt = zdt.withDay(zdt.getDay() - duration.periodDays);
        }
        if (duration.periodHours) {
            zdt = zdt.withHour(zdt.getHour() - duration.periodHours + offsetHours);
        }
        if (duration.periodMinutes) {
            zdt = zdt.withMinute(zdt.getMinute() - duration.periodMinutes + offsetMinutes);
        }
        if (duration.periodSeconds) {
            zdt = zdt.withSecond(zdt.getSecond() - duration.periodSeconds);
        }
        if (duration.periodMilliseconds) {
            zdt = zdt.withMillisecond(zdt.getMillisecond() - duration.periodMilliseconds);
        }
        return new ZonedDateTime(this.getTimeZoneId(), zdt.getMillisFromEpoch());
    }
    atStartOfDay() {
        let zdt = new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
        return zdt.withHour(0).withMinute(0).withSecond(0).withMillisecond(0);
    }
    atEndOfDay() {
        let zdt = new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
        return zdt.withHour(23).withMinute(59).withSecond(59).withMillisecond(999);
    }
    compareTo(other) {
        const timeDiff = this.getMillisFromEpoch() - other.getMillisFromEpoch();
        return timeDiff === 0 ? 0 : timeDiff > 0 ? 1 : -1;
    }
    isEqualTo(other) {
        return this.getMillisFromEpoch() === other.getMillisFromEpoch();
    }
    isBefore(other) {
        return this.getMillisFromEpoch() < other.getMillisFromEpoch();
    }
    isBeforeOrEqualTo(other) {
        return this.getMillisFromEpoch() <= other.getMillisFromEpoch();
    }
    isAfter(other) {
        return this.getMillisFromEpoch() > other.getMillisFromEpoch();
    }
    isAfterOrEqualTo(other) {
        return this.getMillisFromEpoch() >= other.getMillisFromEpoch();
    }
    durationUntil(other, unit) {
        const duration = {};
        const timeDiff = other.getMillisFromEpoch() - this.getMillisFromEpoch();
        const periodYear = 1000 * 60 * 60 * 24 * 365;
        const periodMonth = 1000 * 60 * 60 * 24 * 30;
        const periodDay = 1000 * 60 * 60 * 24;
        const periodHour = 1000 * 60 * 60;
        const periodMinute = 1000 * 60;
        const periodSecond = 1000;
        switch (unit) {
            case BixbyDurationUnit.YEARS:
                duration.periodYears = Math.floor(timeDiff / periodYear);
                return duration;
            case BixbyDurationUnit.MONTHS:
                duration.periodMonths = Math.floor(timeDiff / periodMonth);
                return duration;
            case BixbyDurationUnit.DAYS:
                duration.periodDays = Math.floor(timeDiff / periodDay);
                return duration;
            case BixbyDurationUnit.HOURS:
                duration.periodHours = Math.floor(timeDiff / periodHour);
                return duration;
            case BixbyDurationUnit.MINUTES:
                duration.periodMinutes = Math.floor(timeDiff / periodMinute);
                return duration;
            case BixbyDurationUnit.SECONDS:
                duration.periodSeconds = Math.floor(timeDiff / periodSecond);
                return duration;
            case BixbyDurationUnit.MILLIS:
                duration.periodMilliseconds = timeDiff;
                return duration;
            default:
              {
                let timeRemaining = timeDiff;
                const periodYears = Math.floor(timeRemaining / periodYear);
                timeRemaining -= periodYears * periodYear;
                const periodMonths = Math.floor(timeRemaining / periodMonth);
                timeRemaining -= periodMonths * periodMonth;
                const periodDays = Math.floor(timeRemaining / periodDay);
                timeRemaining -= periodDays * periodDay;
                const periodHours = Math.floor(timeRemaining / periodHour);
                timeRemaining -= periodHours * periodHour;
                const periodMinutes = Math.floor(timeRemaining / periodMinute);
                timeRemaining -= periodMinutes * periodMinute;
                const periodSeconds = Math.floor(timeRemaining / periodSecond);
                timeRemaining -= periodSeconds * periodSecond;
                const periodMilliseconds = timeRemaining;
                duration.periodYears = periodYears;
                duration.periodMonths = periodMonths;
                duration.periodDays = periodDays;
                duration.periodHours = periodHours;
                duration.periodMinutes = periodMinutes;
                duration.periodSeconds = periodSeconds;
                duration.periodMilliseconds = periodMilliseconds;
              }
        }
        return duration;
    }
    clone() {
        return new ZonedDateTime(this.getTimeZoneId(), this.getMillisFromEpoch());
    }
    toIsoString() {
        return new Date(this.getMillisFromEpoch()).toISOString();
    }
    toString() {
        const date = new Date(this.getMillisFromEpoch());
        const isoDateTime = date.toISOString().replace("Z", "");
        const timeZoneOffset = this.getTimeZoneOffset();
        const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60 / 60)
            .toString()
            .padStart(2, "0");
        const offsetMinutes = (Math.abs(timeZoneOffset) % (60 * 60))
            .toString()
            .padStart(2, "0");
        const sign = timeZoneOffset >= 0 ? "+" : "-";
        return `${isoDateTime}${sign}${offsetHours}:${offsetMinutes}`;
    }
    toJSON() {
        return {
            date: {
                year: this.getYear(),
                month: this.getMonth(),
                day: this.getDay(),
            },
            time: {
                hour: this.getHour(),
                minute: this.getMinute(),
                second: this.getSecond(),
                millisecond: this.getMillisecond(),
                timezone: this.getTimeZoneId(),
            },
            utcInstant: this.getMillisFromEpoch(),
        };
    }
    format(options, locale) {
        if (typeof options === "string") {
            throw new Error("This function supports passing object Intl.DateTimeFormatOptions. Pattern as a string not supported. For string pattern matching use a library like datetime or moment.js.");
        }
        if (options) {
            const formatter = new Intl.DateTimeFormat(locale ?? ZonedDateTime._vivContext.locale, { timeZone: this.getTimeZoneId(), ...options });
            return formatter.format(new Date(this.getMillisFromEpoch()));
        }
        else {
            return this.toIsoString();
        }
    }
}