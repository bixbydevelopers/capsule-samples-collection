<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">viv.time Test Harness</h1>
</p>

## Description
  
This test harness lets you easily simulate the behavior that a consumer of the `viv.time` library would see. 

(`viv.time` library documentation: https://bixbydevelopers.com/dev/docs/reference/ref-topics/library.datetime)

For example, imagine a user asks a calendar capsule to schedule an event for next Monday. This capsule can be used to simulate the phrase "next Monday" getting resolved by `viv.time`, and returned in a structured way that the calendar capsule could then consume. 

With this capsule, you can test various time-related phrases and see what DateTimeExpression value(s) (if any) are returned by the time library capsule. For a given phrase (like "tomorrow afternoon"), you can see: 

- Whether the entire phrase was tagged as a `viv.time.DateTimeExpression`, or if it is not supported.  
- The type of the response (`Date`, `DateTime`, `DateInterval`, `DateTimeInterval`) from the time library
- The resolved object(s) returned by the time library (Simulator shows you a raw format, like "Friday September 25, 2020", Debug Console will show the actual returned object(s))
- The value dialog fragment of the response(s) (what gets used when you call `#{value(<timeResponse>)}`, for example "Friday", "This weekend")

Some things to note:

- There can be anywhere from 1 to 4 results from the time library capsule, depending on the phrase. It is up to the importing capsule to choose which one to use, the first result will always be the most relevant. 
- The results will always be the same `viv.time` type, regardless of how many there are.  
- You can modify the current time in the simulator (User tab > GPS/Clock Override > Time). This can be useful to test out relative time queries, like "tomorrow", "next weekend", etc. If you override the current time, the result view will show your current time override.
- This test harness only supports `en` at the moment, but if you want to test some `DateTimeExpression`s in other locales, you can simply add the target to the `capsule.bxb` file and a few training examples similar to the `en` ones for those locales. 
- `viv.time` functionality does not vary across different device types, so you only need to run tests on the `bixby-mobile` target.

## Usage

Continuations are not supported in this capsule, please reset the simulator before every new query. 

Any utterance you give to this capsule will try to be interpreted and tagged as a `viv.time.DateTimeExpression`. If your entire phrase was partially tagged, or not tagged at all, that indicates that your phrase is not a supported `DateTimeExpression`. It is good practice to check the `conversation` tab in the debugger, or the understanding page, to ensure the entire phrase you entered was tagged as a `DateTimeExpression`.

Here are some examples of phrases you can say to this capsule:
```
"Thursday"
"August 24th"
"Next week"
"Halloween 2023"
"The day after tomorrow"
"The third Friday of November"
```

## Tutorial Video
[![Watch the video](https://i.ytimg.com/vi/1QOMh9-TtZM/hqdefault.jpg)](https://youtu.be/1QOMh9-TtZM)

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”

