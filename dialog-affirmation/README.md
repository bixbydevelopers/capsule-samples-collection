<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
    <br/>

<h1 align="Center">Dialog Affirmation</h1>

</p>

This capsule demonstrates how to add dialog variation in the form of affirmations at the beginning of sentences. This variation spices up the dialogs and makes Bixby sound more natural. It is best suited for use cases where the user asks Bixby to "do something".

## Usage

User asks Bixby "Turn on smile".

Bixby will respond with "`<affirmation>` smile is on!". For example, "Okay, smile is on!".

Where the `<affirmation>` comes from a random bag of words. For example:
- None - 50%
- Okay - 25%
- Alright - 25%

The final sentence will start with the capitalized affirmation followed by a comma and closing with the core text content in lower case. When there is no affirmation (None case), then the core text content will be capitalized to form a full sentence.

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
