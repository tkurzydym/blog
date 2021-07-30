---
page-title: Dark Mode
page-category: Gatsby
page-publishdate: 2021-01-08
slug: blog/2021/january/09-dark-mode
---

# Dark Modes

We all know we want to be on the dark side, because they have cookies.

Especially in the dev-community I have the feeling, that dark modes are right now so popular that 
they nearly are a standard offer by websites and blogs.

In fact, while I was creating my blog, my plan was to implement a Dark Mode as well from the beginning - but i didn't develop my site
dark-mode first. When I told my friends that I haven't done it yet, I was asked why it wasn't the first thing I have implemented.
It was meant as a Joke, but behind that is even more. They said that, because they insist on using the dark mode.

So obviously Dark Modes get a lot of attention and are favoured by a lot of people. But at the same time there are still
alot which use the light mode for everything. Especially outside of the tech and dev community.



## Implementation in GatsbyJS

By the way - Implementing dark mode for a gatsby site is another thing thats super easy. 
Include a Plugin and create some dark theme styling in your global style and you're done.
The plugin is looking for a body.dark css class and from that point onwards you can also use template variables like so:


```css
body.dark {
  --bg: rgb(19, 22, 34);
  --textNormal: rgba(255, 255, 255, 0.88);
  --textTitle: white; 
  --textLink: lightsalmon;
  --textLinkVisited:rgb(202, 154, 134);
  --hr: hsla(0, 0%, 100%, 0.2);
  --menuLink: lightgrey;
  --menuLinkHover: white;
}
```


```css
a:visited {
  color: var(--textLinkVisited);
}
```

```jsx
<ThemeToggler>
{({ theme, toggleTheme }) => (
    <IconCheckboxContainer>
        {theme === "dark" && (
            <DarkModeToggler>
            <FontAwesomeIcon
                className="lightbulb"
                size="lg"
                icon={faLightbulb}
            ></FontAwesomeIcon>
            </DarkModeToggler>
        )}
        {theme === "light" && (
            <DarkModeToggler>
            <FontAwesomeIcon
                className="moon"
                size="lg"
                icon={faMoon}
            ></FontAwesomeIcon>
            </DarkModeToggler>
        )}
        <IconCheckbox
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
        />
    </IconCheckboxContainer>
)}
</ThemeToggler>
```