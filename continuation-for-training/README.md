<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Continuation for Training</h1>
</p>

This capsule demonstrates several features of Bixby Natural Language Training incliuding continuations, property projections and relaxing.

## Usage

### Basic usage

```
Show planets
```

```
Show Venus
```

### Continuations
```
Show Earth

how far is it to Saturn

compare the size to Neptune
```

```
how far is Earth from Mercury?

and to Mars?

and from Venus? [Note: this nl works only for distance)
```

```
how large is Saturn compared to Neptune?

and to Mars?
```

```
show red planets

how about blue planets

how about white planets
```

Note that the same natural language is used for different continuations.


### Tutorial Video on Continuations
[![Watch the video](https://i.ytimg.com/vi/fY40KibuE5Y/hqdefault.jpg)](https://youtu.be/fY40KibuE5Y)

### Property Projections

```
show Earth

what is the distance to the sun?

what is the size?

what is the distance of Mars to the sun?

what is the size of Neptune?
```

### Sorting
```
show planets sorted by size

show blue planets sorted by size
```

### Relaxation
```
show Persephone

show green planets

show green planets by size descending
```

### Default Initial Values

Outer query:
```
how far is it to Mars?

compare the size to pluto
```
Note that it defaults "this planet" to Earth.

##

For more information see - https://bixbydevelopers.com/dev/docs/sample-capsules/samples/continuation

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
