var meowAudio = require('./meowAudio.js')

module.exports.function = function findMeow(searchTerm) {
    let meowAudioFound = []

    if (searchTerm) {
        meowAudioFound = meowAudio.audioItems.filter(function (audioItem) {
            if (audioItem.title.includes(searchTerm)) {
                return true
            } else if (audioItem.artist.includes(searchTerm)) {
                return true
            } else if (audioItem.subtitle && audioItem.subtitle.includes(searchTerm)) {
                return true
            } else if (audioItem.albumName && audioItem.albumName.includes(searchTerm)) {
                return true
            } else {
                return false
            }
        })
    } else {
        meowAudioFound = meowAudio.audioItems
    }

    return meowAudioFound
}