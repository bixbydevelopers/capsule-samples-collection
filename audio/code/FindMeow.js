var meowAudio = require('./meowAudio.js')

module.exports.function = function findMeow(searchTerm) {
    const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    let meowAudioFound = []

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        meowAudioFound = meowAudio.audioItems.filter(function (audioItem) {
            keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
            })
        })
    } else {
        meowAudioFound = meowAudio.audioItems
    }

    return meowAudioFound
}