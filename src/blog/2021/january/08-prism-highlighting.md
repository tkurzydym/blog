:page-title: PrismJS
:page-category: Gatsby
:page-publishdate: 2021-01-08

# Syntax Highlighting

Before Christmas I had set up this blog with GatsbyJS and I gave a brief introduction to what I did back then.
In the meanwhile I was facing a few different challenges to solve in the Blog because of features that I wanted to implement.

In this post I'm going to show you my experiences and a little bit of a tutorial for Syntax Highlighting in my Blog Posts with
PrismJS and Babel.

As I mentioned in my earlier Blog I tried to solve the Syntax Highlighting with a Custom Converter for the asciidoctor plugin.
But I found out that it isn't working well enough for me to use it, or I just wasn't patient enough to spent some time into that.

## Installing PrismJS

First of all the Installation was super easy.
With a few npm install statements the environment is good to go. Again also install the Typescript types, because we like Typescript and use it.

```shellsession
  % npm install --save prismjs
  % npm install --save babel-plugin-prismjs
  % npm install --save babel-preset-gatsby
  % npm install @types/prismjs
```

## Babel RC

Create a .babelrc file to configure the Syntax Highlighting for the Website.

```json
{
    "presets": ["babel-preset-gatsby"],
    "plugins": [
      [
        "prismjs",
        {
          "languages": [ // (1)
            "javascript",
            "css",
            "java",
            "typescript",
            "go",
            "shellsession",
            "json",
            "graphql"
          ],
          "plugins": ["show-language"],
          "theme": "tomorrow", // (2)
          "css": true
        }
      ],
      [
        "babel-plugin-styled-components"
      ]
    ]
  }
```
1. All the Languages that you want to be supported by the Syntax Highlighting
2. The theme that should be applied to the Source Code 

You can see the Syntax Highlighting for JSON with the code for the .babelrc above.
You already saw a GraphQL Example on my last post if you have read it. 

Here is a Java Example:


> GiantPanda.java
```java
public class GiantPanda extends Ursidae {
  public GiantPanda(final String name)
  {
    super(name);
    super.setConservationStatus(ConservationStatus.ENDANGERED);
    super.setBinomialName("Ailuropoda melanoleuca");
    super.setCharacteristics("large, black patches around its eyes, over the ears, and across its round body");
  }

  public String greet() {
    return "The Great Panda " + super.getName() + " sits down and waves back at you while smiling!"
  }
}
```

> ConversationalStatus.java
```java
enum ConservationStatus {
  EXTINCT, ENDANGERED, THREATENED, DELISTED
}
```

For further reference on all the themes and configuration possibilities see https://prismjs.com[PrismJS].

## Conclusion

The usage of PrismJS with Babel was a super easy way to include Syntax Highlighting to my blog.
While it maybe isn't the cleanest solution in terms of performance or size, it is totally fine for my blog.
I don't have big Source Code chunks in my posts and my Website isn't too big in size anyway.
With using markdown you get a pre-configured plugin which you just have to include though. That might be a way simpler
way to include Syntax Highlighting if you don't insist on using asciidoctor.

## Upcoming

On the next Blog Post I will talk about Dark Modes.