module.exports.function = function buildMeowAudioInfo(meowAudio) {
  var audioInfo = {};

  /* Since meowAudio are already in audioItem format this mapping is not necessary, but
  this demonstrates how to build the right structure for audioItem and audioInfo */

  audioInfo.audioItem = meowAudio.map(function (audioItem) {
    let audioItemStructure = { //required properties of audioItem
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl
    }
    //optional properties of audioItem
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    return audioItemStructure
  });

  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Meow Capsule';
  audioInfo.repeatMode = 'ALL';
  audioInfo.doNotWaitForTTS = false;

  return audioInfo;
}

