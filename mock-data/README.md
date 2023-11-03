<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Mock Data</h1>
</p>

## Description

This capsule demonstrates how to use Bixby's Oauth and Config & Secrets Mock in stories.

## Usage - Mock Data

To see Bixby's Mock Data in action, run:

`get mocked data` - Demonstrates Config & Secrets Mock

- Simulator: Gets the config and secret from DevConsole
- Story: Overwrites the values of the DevConsole with the mocked values if the keys are the same

`goal with authorization` - Demonstrates OAuth Mock

- Simulator: Asks user to authenticate
- Story: Skips authentication and uses the mocked token

For more information about Config & Secrets Mock, see: https://bixbydevelopers.com/dev/docs/dev-guide/developers/testing.stories_assertions#configs--secrets-mock
For more information about OAuth Mock, see: https://bixbydevelopers.com/dev/docs/dev-guide/developers/testing.stories_assertions#oauth-mock

---

## Note

The capsule has no real authentication system behind it, and only demonstrates the use of the mock authorization token. The supplied story will only work correctly in the "Run" and "Run Live with Mocked OAuth" modes of the Story Runner, not "Run Live", and the login screen in the Simulator is for reference purposes only.

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

* [Bixby Developers Chat](https://open.spotify.com/show/3abrdQbOgpQBIbleWjTvci) - Voice, Conversational AI and Bixby discussions

### Bixby on Social Media

* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)

### Need Support?

* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
