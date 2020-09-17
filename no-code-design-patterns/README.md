<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">No Code Design Patterns</h1>
</p>

## Description

This capsule demonstrates how using Bixby models, you can create a capsule without writing a line of traditional code. It is meant as an educational introduction to the power of Bixby modeling. It also shows examples where even in a complex capsule, you may be able to go code free for the simpler parts of the functionality

## Usage

To test this, open the simulator and run:

`Start`

This shows the Intro view (seperate view for each different input pattern). From here you can say or click

`Flip a Coin` 

to start the experience. You can also start the capsule by saying `Flip a Coin`

Design patterns to take notice of:
* Simple game play uses models and a couple lines of `EL` (Expression language) in the model
* Dummy Text Pattern: `Intro` and `More Info` views use this - these take a dummy text input but use a match pattern that matches the action to show the correct view
* Command Pattern: `Help` and `About` functionality uses this - these use a command pattern e.g. a single view shows both with simple `EL` to show the correct information

In more complex capsules, functionality like help may often be implemented using one of the above patterns (the Dummy Text pattern is often the cleanest but the command pattern is shown for circumstances where this may be ideal)

Try this capsule using a [device](https://bixbydevelopers.com/dev/docs/dev-guide/developers/testing.on-device)

Capsule Icon made by [mynamepong](https://www.flaticon.com/authors/mynamepong) on [Flaticon](https://www.flaticon.com/)

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

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
