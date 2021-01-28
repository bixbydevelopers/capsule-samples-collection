var examples = [
  {
    ssml: "<lang xml:lang=\"en-US\" voice=\"F04\">Have you heard the story of the Hare and the Tortoise? Well, it went something like this. The hare fell asleep during a race against the tortoise and the tortoise beat the hare in that race.</lang>"
      + "<lang xml:lang=\"en-GB\" voice=\"F02\"><prosody rate=\"185%\">That's ridiculous! There's no way a fellow hare could lose to a slow tortoise!</prosody></lang>"
      + "<lang xml:lang=\"en-US\" voice=\"F04\">said Gretchin the Hare.<break time=\"300ms\"/> Turt the tortoise retorts</lang>"
      + "<lang xml:lang=\"en-US\" voice=\"M02\"><prosody rate=\"30%\">Oh? How about I race you home.</prosody></lang>"
      + "<lang xml:lang=\"en-GB\" voice=\"F02\"><prosody rate=\"185%\">You're on! Eat my dust slowpoke!</prosody></lang>"
      + "<lang xml:lang=\"en-US\" voice=\"F04\">Gretchin bolts off into the sunset.<break time=\"200ms\"/> Meanwhile, Turt tucks himself into his shell.</lang>"
      + "<lang xml:lang=\"en-US\" voice=\"M02\"><prosody rate=\"30%\">Looks like I win again.</prosody></lang>"
    , display: 'A classic story told with SSML.'
  },
  { // 20% to %200, x-slow, slow, medium, fast, x-fast
    ssml: '<prosody rate="x-fast">Look how fast I can talk now! She sells seashells by the seashore.</prosody rate="x-fast">',
    display: 'Look how fast I can talk now! She sells seashells by the seashore.'
  },
  { // 20% to %200, x-slow, slow, medium, fast, x-fast
    ssml: '<prosody rate="20%">Slow and steady wins the race,</prosody> said the tortoise.',
    display: '"Slow and steady wins the race," said the tortoise.'
  },
  { // https://bixbydevelopers.com/dev/docs/reference/ref-topics/ssml#bixby-voices
    ssml: '<lang xml:lang="en-US" voice="F04">Change the voice to increase use engagement',
    display: 'Change the voice to increase use engagement.'
  },
  { // https://bixbydevelopers.com/dev/docs/reference/ref-topics/ssml#bixby-voices
    ssml: 'You can use another voice in a sentence. Peanut butter and jelly sandwiches are <lang xml:lang=\"fr-FR\">sandwichs au beurre de cacahuète et à la confiture</lang> in French.',
    display: 'You can use another voice in a sentence. Peanut butter and jelly sandwiches are sandwichs au beurre de cacahuète et à la confiture in French.'
  },
  {
    ssml: 'An MP3 file can be played in SSML, but currently, the simulator doesn\'t support this. You can try on-device testing to see how it sounds.<audio format="mpeg-2" src="https://voicecraft.s3.amazonaws.com/capsules/advent-calendar/christmas-bells2.mp3"></audio>',
    display: 'An MP3 file can be played in SSML.'
  },
]

module.exports.function = function saySomethingInteresting() {
  var speachOpen = "<speak>"
  var speachClose = "</speak>"
  for (var i = 0; i < examples.length; i++) {
    examples[i].ssml = speachOpen + examples[i].ssml + speachClose
  }
  return examples
}