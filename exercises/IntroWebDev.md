# Intro to Web Development -- Brian Holt / Front-end Masters

Notes: https://btholt.github.io/intro-to-web-dev-v2/

Início da jornada: 17/8/2018.

## Tools, tips, questions

VSCode Extension: Prettier, includes semicolons in JS files, for example.

https://mastery.games/p/flexbox-zombies
https://flexboxfroggy.com/

**Browser**: Brian recommends Firefox.
**Editor**: Visual Studio Code
**The Terminal**: cmder (http://cmder.net/)

Images: http://placecorgi.com/
The key here is that it'll give you images of any size. The way you do that is http://placecorgi.com/ <width> / <height> where your replace width and height with a number. This will be the size of your image in pixels.

google fonts. cool and stuff, but adds weight.

no need to use "picture of..." inside an `alt` in a `img` tag. The browser "knows" it's a picture.

`line-height`, para aumentar o espaçamento do texto.

margin or padding to move stuff around?

Margin for spacing things between each other.
Padding to create space inside something.



## HTML

Elements are instances of tags.

`<input>`?

If the image is content, and not mere decoration, you should use `<img>`. Leave CSS for the mere decoration stuff.

Importância do `alt`:  screen readers, provides alternative text whenever image links is broken, google indexing etc.

### Forms

`<form></form>` container for the other (form) tags, such as the following:
`<input />` (self-closing)
`<textarea></textarea>` (why is it not self-closing? no reason... but the text that goes between the tags become the default text.
`<select><option value = "tsa"></option></select>`

`<input>` may have a `value` attribute, which provides a pre-filled *value* to the form/text box, or a `placeholder` attribute, which only displays a placeholder text inside the form/text box (usually in gray).

Sometimes there are attributes with no (explicit) value, but it is as if they had a boolean value. For example:
`<input type="checkbox" checked />`
The `checked` attributed works like `checked = "TRUE"`.


### Tables

`<table></table>`
`<tr> <td> </td> </tr>`

### Sectioning / Layout

Useful for machines!

### Formating

`<em></em>`
`<strong></strong>`

### Classes

Me: should we use classes to define how something should be formatted or use them to define the element's function/role in the webpage?

Brian:
> This is what classes allow you to do: they allow you to mark your HTML so you can write rules and code to govern them later. Let's see what that looks like.
> Generally, with classes, you want to name things semantically. This is a fancy word (often used when talking about HTML) that you want use tags and name things as close to what thing is and not what it looks like.

### Meta HTML

Basic html skeleton: boilerplate.

`<head>` vs. `<header>`

`<head>` : meta information. not shown to the user, but useful to configure your website.

viewport

Boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My amazing HTML Document</title>
  </head>
  <body>
    <h1>Check this out</h1>
    <!-- Your amazing HTML here -->
  </body>
</html>
```



## CSS

*Rule*:

```css
selector {
    property: value;
}
```

_CSS inheritance_: when an HTML element transmits its CSS rules to a child element. 

```html
<section>
    <div>
        <h1>
        </h1>
        <p>
        </p>
    </div>
</section>
```

`div` is **parent** of `h1`.

`section` is **ancestor** of `h1`

`p` is **sibling** of `h1`.



Rules referring to two classes don't have space between them. For example:

```css
.title.main-article {
    bla: blabla;
}
```

But, if you use:

```css
.title .main-article {
    bla: blabla;
}
```

You are targeting elements with `main-article` inside of elements with `title`, no matter how far the former are from the latter.

But, in:

```
.title > .main-article {
    bla: blabla;
}
```

You are targeting elements with `main-article` that are immediately below/inside elements with `title`.



#### The cascade: specificity

* Classes are more specific than tags.
* Hence, two classes are more specific than one tag and one class.
* IDs are more specific than classes.
* !important is more specific than everything.

#### Pseudoclasses

https://css-tricks.com/pseudo-class-selectors/

`:hover`

`:focus`

`:first-child`, `:last-child`, `:nth-child(n)`

`:last-of-type`

#### Pseudoelements

https://css-tricks.com/almanac/selectors/a/after-and-before/


#### Interesting properties

**list-style** (lower-roman, upper-roman, square)

```css
* {
    box-sizing: border-box;
}
```


#### CSS Reference

https://css-tricks.com/the-lengths-of-css/

https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/



## CSS Layout

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

### Floats

`float: left;` means more or less: *go as far to the left as you possible can. And then once you can't go any further, stop there*.

A box that is below other box in the html will never appear above that first box. See https://btholt.github.io/intro-to-web-dev-v2/layout-css#floats when you resize the window.

### Flex

`display: flex;` should be put in the parent container. It applies to the children, not to the element itself.

`flex-wrap: wrap;` will make the boxes wrap around. Otherwise, the boxes will shrink.

Most important properties:

* `flex-direction`: row-reverse, column, column-reverse
* `justify-content`: **horizontal**. `flex-end`, `flex-start` (default), `center`, `space-between`, `space-around` and `space-evenly` 
* `align-items`: **vertical**. `flex-end`, `flex-start` (default), `center`, `stretch` (the children should not have a`height` set, or it will not work. But if one element has height, the siblings will be stretched to that height to match it),

flex-direction: row-reverse

### Display property

Every tag in CSS has a `display` property associated with it by default. In fact, CSS has a lot of hidden defaults, just like by-default all text's color is black. With `display`, it varies by what type of tag we're talking about. `divs` are `display: block`; by default while `span`s are `display: inline`; and this makes sense given their functions. However, being that we have access to CSS, we can manipulate a `span` to act like a `div` and vice-versa (though usually you'd just use the appropriate tag.)

`block`, `inline`, `flex`, `table`, `none`

if I say width: 200px, what is 200px wide? Unfortunately, the answer is it depends. It depends on what the value of the box-sizing property. By default, it does things the old way of writing code which if I say width: 200px I am not including the border or the padding. This is annoying because if I'm trying to fit things together well, it's much easier to include border and padding. Remember how I told you to never use the wild card selector before? This is the one exception where I permiss you to:
```
* {
  box-sizing: border-box;
}
```
(*this is the only case where the wildcard selector is allowed. If you want to set up default values for fonts, colors etc. put them on `body`.*)

This will make everything use the border-box sizing instead of the default one (which is called content-box but you'll never have to know that.) This is the first thing I put in every project I start. You'll need it once in one file. This will make everything by-default be border-box and thus be easier to work with. This used to be controversial to use but here is Paul Irish (really smart guy who works on Google Chrome) saying it's okay.
https://www.paulirish.com/2012/box-sizing-border-box-ftw/

### Flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Project

Lembrar do:

```
* {
    box-sizing: border-box;
}
```
Senão não fica alinhado.


## Javascript

Code is for humans first and computers second. You can think of writing code as essentially writing notes on how to solve a particular problem that just happens to be in a way that computer can understand it.

Be explicit. Be deliberate. The point here is not to be clever but to be simple and to communicate clearly. Code is communication.

You should write more code if it makes it more readable.

Always, always, always use good variable names. Seriously. Put time into it. Naming things is hard and it's a big part of your job.
variables represent a value, but also represent something semantically.

Variable names: in javascript, people generally use _camel case_.

For example, `monthlyRent`.

`const` vs `let`

**"REPL"?**
A Read–Eval–Print Loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise. The term is most usually used to refer to programming interfaces similar to the classic Lisp machine interactive environment. Common examples include command line shells and similar environments for programming languages, and is particularly characteristic of scripting languages.

### Variables

With `const`, JS won't let you update the binding's value. For that, we should use `let`.

Why use `const` in the first place?
Brian
> We used `let` instead of `const`. Things that are `const` cannot be reassigned later. In general I find this be of minor help but others do not so I leave you to make your own judgement call. In general one should try to follow the "principle of least power." You should always choose the least powerful "thing" to accomplish whatever you're trying to do. Things with less power tend to be simpler and simple things are less prone to having or causing bugs. We instead use `let` here because you can see on the subsequent lines we do reassign `friendsAtYourParty` to be a different number. If you used `const` your code would crash because `const` won't let you do that. Thus here we use `let`. There's another one called `var` that is the old way of doing JavaScript. There are differences but I don't see a reason to use `var` at all anymore. It behaves more similar to `let`.



*Types*

* strings. " ou ' ou `
* string concatenation: `+`.
* "templates" strings. Must use **back ticks**.
```
const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);
```
Se usar normal quotes, ele faz isso aqui:
```
let a = "human";

console.log("Hello, ${a}!")
> Hello, ${a}!

console.log(`Hello, ${a}!`)
> Hello, human!
```

* Boolean: `true` / `false`
* Number: just one type of number, be them integers or floats.

### Control Flow

#### IF-ELSE

```
if (teste) {
    statements;
} else {
    statements;
}

```

`==` uses coercion, tries to convert the number to compare.
`===` strictly equal. (if the operands are of different types, the result is `false`.)

Let's talk about `===` for a second. If you use just one `=` in JavaScript, it means is assigned to. So when we have `const isBrianCool = true`; you can verbalize that as "The variable `isBrianCool` is assigned to true". Thus we can't use that inside of the if statement because that's not we mean. We're trying to ask a question, not assign something. We're trying to ask "is two plus two equal to four." Enter the triple equals. Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double equals because double equals does a lot of funny business that usually we don't want it to do. It does what's called _coercion_ and we'll talk about that below. But in an example `2 == "2"` but it does not `2 === "2"`. String `2` is double equal to number `2` but string `2` is not triple equal to number `2`.

#### LOOPS

```
while (condition) {
    statements;
}
```

```
do {
    statements;
} while (condition);
```

```
for (<initialize>; <condition>; <increment>) {
    statements;
}
```

**Unary operators**

Updating a variable:
```
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
```

Ou `-=`, `/=`, `*=`, `--`, `++`.

### FUNCTIONS

>Functions encapsulate little pieces of logic that you can reuse all over the place.

```
function <name>(arguments) {
    statements;
    return <output>;
}
```

Function names generally are verbs.

> The way call a function is you add parens to the end of it, like this: `someFunctionName()`. If you see parens after a variable name, you instantly know that that's a function. Inside of the parens go the parameters. These variables will be passed to the function that is being called in the order that you put them there.

```
function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo;
console.log(finalAnswer)
> [Function addTwo]

console.log(finalAnswer(3))
> 5

const finalAnswer2 = addTwo(3);
console.log(finalAnswer2)
> 5
```





### Comments

`// one-line comment`
`/* multiple-line comment */`









## General comments

* VS Code -- Emmet abbreviation.

Alt + click funciona aqui.

`html:5` (já gera um boilerplate html)
`link` (já gera `<link rel="stylesheet" href="">`)
`section.row` (já gera `<section class="row"></section>`)
`p.story-text>lorem40` já gera:
```
            <p class="story-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, cupiditate quae architecto perferendis animi culpa obcaecati vero provident id illo, et dicta quidem hic odio consequatur consequuntur est nobis reiciendis ipsum numquam expedita? Inventore veniam ab nesciunt consectetur vero ullam.</p>
```
Um lorem com 40 palavras! How cool is that?!

e que tal:
`p.story-text*2>lorem40` gerando dois parágrafos!
```
            <p class="story-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat facilis in voluptas delectus ipsam ratione accusantium illo neque quia expedita animi, quasi corrupti, quibusdam, hic dolorem repudiandae voluptatem culpa commodi architecto obcaecati? Optio, necessitatibus fugit obcaecati nesciunt vel error.</p>
            
            <p class="story-text">Eius, quidem quae illo quod ipsum voluptates laboriosam eum nostrum ratione ab temporibus eligendi nam, amet expedita debitis quibusdam, aliquid quasi rem iste officiis commodi rerum culpa obcaecati! Tempora sequi doloribus quia! Ad ab pariatur voluptatem cum vero inventore obcaecati.</p>
```

CSS, Flexbox: Tem que atentar para todos os containers envolvidos, pq às vezes um item não cresce pq o seu container é um item de um outro container.

kebab case

Lorem ipsum: if the text was readable, people would read it, and that's not the intention.

Harvest / Chosen

Haskell?