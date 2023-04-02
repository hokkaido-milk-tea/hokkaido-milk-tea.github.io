---
layout: "../../layouts/BlogPostLayout.astro"
title: "Markdown Test Post"
date: "2023-04-02"
tags: ["testing", "markdown"] 
draft: false
---

<a name="top-of-page"></a>

I really enjoy writing in Markdown.
You can start a new sentence by typing on the next line.
There's inline formatting options like *italics*, **bold**, and ~~strikethrough~~.
You can add inline code like `func _process(delta)`.

If you want text to start in a new paragraph, just use an empty line after your previous text.

Your text would wrap to the next line if you write a really long sentence, one that goes on for far too long, one that 100% would count as a run-on sentence that is building towards something that you're unsure of but that you know with full conviction that it's indeed building towards, a sentence that's gramatically incorrect, but that a creative writer could use to build up and pile on all the dramatic tension by forgoing all punctuation and by extension all means of a rest or breath between words until suddenly and finally—

A relieving, short sentence.

## You can do H2 headings too!

I could provide a link to [my GitHub page](https://github.com/hokkaido-milk-tea), but there's nothing very impressive there.

### Here's an H3 heading

And here I can quote myself:

> "Melon" is just "lemon" spelled backwards.

I could use inline quote in my blockquotes.
Or nest them too, though that seems unnecessary.

> You just double-checked if `melon`...
> > ...is actually `lemon` spelled backwards, didn't you?

#### H4 headings are a thing too

I could summarize data in a table:

**Table 1. Final Fantasy XIV Online Store Items**
| Item                      | Type  | Dyable? |
| ------------------------- | :---: | :-----: |
| Educand's Attire (Slacks) | Gear  |   Yes   |
| Eat Egg                   | Emote |   N/A   |
| Chicken Attire            | Gear  |   Yes   |

##### Believe it or not, this is an H5 heading...

Here's some images from [Unsplash](https://unsplash.com/), my favorite resource for free images.

<Image src="/src/images/markdown-test/unsplash-nakano.jpg" alt="A street at night in Nakano, Japan" />
<Image src="/src/images/markdown-test/unsplash-fruit.jpg" alt="Decorative citrus fruit and white flowers on a table" />
<Image src="/src/images/markdown-test/unsplash-lanzarote.jpg" alt="White house with green doors and windows in Lanzarote, Espagne" />

###### H6 headings too are quite unimpressive

I've summarized headings you should and shouldn't use in this unordered list:

- Don't use `H1`—they're for page titles only
- Use `H2` through `H4` in your Markdown content
  - `H2` gets a nicely styled left border, just like `H1`
- Don't use `H5` or `H6`
  - I don't have a good reason for this
  - Do as I say and not as I do

    This very phrase has been repeated by many people around the world who, in fact, *do not* do as they say and instead *do* do as they do.
    I'm telling you about this in text nested inside an already-nested bullet point.
    Why?
    Because I can, of course.

    I could even start a new paragraph if I wanted!
    But I'll move on, otherwise I'll be here all day.

Ordered lists are handy for sequential things, though you can mix ordered and unordered lists as needed.

1. Frodo gets the One Ring
   1. Bilbo originally found it in the Misty Mountains
   2. Bilbo leaves it for Frodo when he leaves for Rivendell
2. The fellowship is formed and they undertake a journey to destroy the ring
3. ???
    - I'd like to tell you more about this section of the story...
    - ...but spoilers are no fun
4. Good wins and evil loses

In addition to `inline code`, you can have preformatted blocks of code.
They can be plain text or have syntax highlighting according to the language specified by fencing your code with three backticks ` ``` ` and specifying the language immediately after the first set of backticks.

```
# plain text code
line 1 goes here
line 2 goes after line 1, naturally
line 3 goes here, I guess
```

The folowing Markdown...
````
```html
<!-- The following is HTML with proper syntax highlighting -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

will output as shown:
```html
<!-- The following is HTML with proper syntax highlighting -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

There are some other HTML elements that I could use to enhance my writing if needed.
Using `abbr` helps define what <abbr title="Graphics Interchange Format">GIF</abbr> is if you hover over it, but it won't teach you how it's properly pronounced.
I could use `sub` and `sup` to falsely claim that H<sub>2</sub>O is governed by the equation X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>.
With `kbd` I can advise that you use `kbd` to type the keyboard combination <kbd>ALT</kbd>+<kbd>F4</kbd> if you'd like to close your current window immediately.
Or maybe highlight <mark>a block of text</mark> with `mark` so that it stands out.

I suppose that's it for my Markdown test post.
I just need to think of a little bit more to write so that I've got a good chunk of text at the bottom.
Wouldn't want the post to end too abruptly after a block of code.

And if you've made it this far, I'll reward you with a handy anchor link that will take you all the way back to the [top of the page](#top-of-page)!