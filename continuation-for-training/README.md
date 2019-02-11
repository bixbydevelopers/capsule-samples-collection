<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Continuation for Training</h1>
</p>

# continuation

```
nl(Show planets)
```

```
nl(Show Venus)
```

## Continuations

```
nl(show red planets)

nl(how about blue planets)

nl(how about white planets)
```

## Property Projections

```
nl (show Earth)

nl (what is the distance to the sun?)

nl (what is the size?)

nl (what is the distance of Mars to the sun?)

nl (what is the size of Neptune?)
```

## More Continuations

```
nl(Show Earth)

nl(how far is it to Saturn)

nl(compare the size to Neptune)
```

```
nl(how far is Earth from Mercury?)

nl(and to Mars?)

nl(and from Venus?) [Note: this nl works only for distance)
```

```
nl(how large is Saturn compared to Neptune)?

nl(and to Mars?)
```

Note that the same nl is used for different continuations.

## Sorting
```
nl(show planets sorted by size)

nl(show blue planets sorted by size)
```

## Relaxation
```
nl (show Persephone)

nl (show green planets)

nl (show green planets by size descending)
```

## Default Initial Values

Outer query:
```
nl(how far is it to Mars?)

nl(compare the size to pluto)
```
Note that it defaults "this planet" to Earth.

##

For more information see - https://bixbydevelopers.com/dev/docs/sample-capsules/samples/continuation

---

## Additional Resources

### Your Souce for Everything Bixby
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



