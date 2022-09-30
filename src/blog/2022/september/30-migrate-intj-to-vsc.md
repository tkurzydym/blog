---
slug: "blog/2022/september/30-migrate-intj-to-vsc"
type: blog
title: Migrating from JetBrains IntelliJ to VS Code
category: Tools
publishdate: 2022-09-30
---

# Migrating from IntelliJ to VS Code

I am always striving to optimize my working environment and also sometimes
just seeking some change to keep things interesting.
The last couple of days I tried to migrate my IDE from JetBrains IntelliJ to
Visual Studio Code. This is my experience.

## First of all - Extensions!

Brace yourself for extensions. Otherwise VS Code is actually just a text editor.
With using extensions we are transforming VS Code into an actual IDE.

Some extensions I tried out and found useful without going into detail:

- Language Support for Java by RedHat
- Git Lens
- Maven for Java
- Material Theme & Github Theme & Atom Material Theme
- Material Icon Theme
- Test Runner for Java
- IntelliCode
- Docker / Dec Containers
- Settings Sync
- Bookmarks

A few other extensions were project specific and worked semi-optimal.
One example is the checkstyle integration which didn't worked seamlessly with
the configuration we use. Checking and formatting does not go hand-in-hand
and makes it cumbersome to use.

## Moving around in the IDE / Shortcuts

Figuring out all the shortcuts on how to navigate through code was
pretty straight forward. It's just different than in IntelliJ.

My most used shortcuts as example:

```
Quick fix: option + enter -> cmd + .
Search for file/type: double shift -> cmd + p
Project browser: Enter to open file -> Space to open file
Format document: option + command + l -> cmd + shift + p > Format Document
Organize Imports: cmd + shift + o -> shift + option + o
```

I learned that VS Codes action terminal accessed with `cmd + shift + p` is very
powerful, I really like to use it. In IntelliJ you can access it via `cmd + shift + a`.

When it comes to peeking into java methods, quicly viewing documentation,
call hierarchy and moving through implementation classes I found that IntelliJ
has the upper hand. Maybe I'm just still missing the correct extensions for VS Code,
but it feels much better integrated and flawless in IntelliJ on how you can peek
and navigate between objects.

### VS Code File Preview

At least thats something what confused me for a second.
But don't be confused. In VS Code, while single clicking files, it will show
you a preview of the file. Double click the file to actually open it or start
typing in it. When you continue clicking on other files you can cycle through
files without opening them all, resulting in only one additional tab.
Actually pretty cool if you ask me.

### Bonus shortcut I used a lot in VS Code

```
(hold)cmd + k t
```

You have to know, I really like my themes and sometimes changing the way stuff looks
is a major productivity booster. But I also just like to adapt my theme to the
light available in the room. Darker room, darker theme. Lighter room, lighter theme.

## Multiple Projects

Working with microservices and different projects requires me to open a few
repositories at the same time. Also, when working with operational tasks,
there are a few different infrastructure repositories that have to be touched.

I am already really happy that IntelliJ has the possibility to open projects
as tabs when working with MacOS.
With VS Code you are able create a Workspace and open multiple projects in the
same window. That is even more amazing, since it makes navigating even faster
and also allows you to open files from different projects directly side-by-side.

# Conclusion

Sadly, while working in an Enterprise Java environment you often don't have the choice
of tools and frameworks you can use for linting, formatting and so on.
Therefore, IntelliJ is better suited for those Enterprise Java applications
and for specific project needs. Simply because it has more integrated support,
is easier to use out of the box and is tailored for the JVM. Obviously,
this depends on the team setup and tooling, if the project or company used tools
are supported by existing VS Code extensions - perfect.

Or even better, if you have the freedom to choose what you're using or if you are
not stuck in a JVM Environment, VS Code gives you the flexibility you
need and you can use the tools that have great VS Code extensions available.
Be wary that setting it up takes probably a bit longer, but it can really be worth
it, since everything can behave just like you want it to.

So, as always, both of the Tools have it's ups and downs.
I'll probably try to use VS Code for non-jvm projects and also all my operational
tasks, which are very YAML intensive anyway, to gain more experience with VS Code.
For my JVM projects I will stick to IntelliJ which has all the nice integrated
features for the JVM I am so used to and love.
