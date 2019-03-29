module.exports.function = function findMeow () {
  var input = {};
  
  input.audioItem = [{
    id: 1,
    stream: [
      {
        url: "https://storage.googleapis.com/bixby-audio-player-example/meows/203121_777645-lq.mp3",
        format: "mp3"
      }
    ],
    title: "Cat-ch Phrase",
    subtitle: "Meow.",
    artist: "Cool Cat",
    albumName: "Catatonic",
    albumArtUrl: "https://storage.googleapis.com/bixby-audio-player-example/meows/cat-08.jpg"
  },
  {
    id: 2,
    stream: [
      {
        url: "https://storage.googleapis.com/bixby-audio-player-example/meows/385892_2322725-lq.mp3",
        format: "mp3"
      }
    ],
    title: "Fur Real?",
    subtitle: "Meow meow.",
    artist: "Tom Cat",
    albumName: "You gotta be kitten me!",
    albumArtUrl: "https://storage.googleapis.com/bixby-audio-player-example/meows/cat-in-a-basket.jpg"
  },
  {
    id: 3,
    stream: [
      {
        url: "https://storage.googleapis.com/bixby-audio-player-example/meows/211687_1979597-lq.mp3",
        format: "mp3"
      }
    ],
    title: "Mew-sic",
    subtitle: "Meow meow meow.",
    artist: "Radi-claw",
    albumArtUrl: "https://storage.googleapis.com/bixby-audio-player-example/meows/cat.png"
  }]
  
  input.category = 'RADIO';
  input.displayName = 'Meow Capsule';
  input.repeatMode = 'ALL';
  
  return input;
}

