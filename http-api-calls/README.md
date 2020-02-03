<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">HTTP API Calls</h1>
</p>

### Simple find shoe with HTTP get call
intent {
  goal: FindShoe
}

### HTTP call with query param
intent {
  goal: FindShoeFiltering
  value: Type(Formal)
}

### HTTP call that returns an error
intent {
  goal: FindShoeError
}

### HTTP use that includes headers
intent {
  goal: FindShoeReturnHeaders
}

### HTTP post call
intent {
  goal: CreateShoe
}

### Remote endpoint
intent {
  goal: FindShoeRemoteEndpoint
}

### Coming soon: More complicated remote endpoint

##

For more information see - https://bixbydevelopers.com/dev/docs/sample-capsules/samples/http

If you want to see the contents of the endpoint this capsule uses (at https://bixby-http-demo.appspot.com/), but cannot access the link, you can view the data in endpointContents.zip. You can also see the data the endpoint returned in the Debug Console, if you click on the action (i.e. FindShoe), then click on 'requests'.

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

