<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Arrays and Modeling</h1>
</p>

**Purpose**

The purpose of this sample capsule is to demonstrate how Bixby actions and views handle array of objects (both primitive and structured concepts)

  - No actual API calls, only fixed lookup in /code/lib/lib.js
  - max (One) or max (Many) determines the argument type in linked JS 
  - CallOneContact
    - Takes a single `Contact` object, and pass such object to JS as a single object
    - Try an utterance like "call paul", and Bixby is able to feed "paul" as `ContactName` to `GetContactByName` and then feed the output as `Contact` to `CallOneContact`
    - Try an utterance like "call paul and sarah", and Bixby will ask for a selection since `CallOneContact` is set to `max (One)`
  - CallManyContacts
    - It is very similar to `CallOneContact`, except `max (Many)`
    - Takes a single or multiple objects of `Contact`, and pass such object(s) to JS as an array of objects
    - Try utterance like "conference call simon" and "conference call paul and simon"
  - Contact.view.bxb
    - Although view is not the focus in this example, it is clear that `list-of` handles both a single object or an array of objects with NO additional coding required
  - Good luck and have fun with Bixby

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




