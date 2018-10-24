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



### CSS Layout

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

#### Floats

`float: left;` means more or less: *go as far to the left as you possible can. And then once you can't go any further, stop there*.

A box that is below other box in the html will never appear above that first box. See https://btholt.github.io/intro-to-web-dev-v2/layout-css#floats when you resize the window.

#### Flex

`display: flex;` should be put in the parent container. It applies to the children, not to the element itself.

`flex-wrap: wrap;` will make the boxes wrap around. Otherwise, the boxes will shrink.

Most important properties:

* `flex-direction`: row-reverse, column, column-reverse
* `justify-content`: **horizontal**. `flex-end`, `flex-start` (default), `center`, `space-between`, `space-around` and `space-evenly` 
* `align-items`: **vertical**. `flex-end`, `flex-start` (default), `center`, `stretch` (the children should not have a`height` set, or it will not work. But if one element has height, the siblings will be stretched to that height to match it),

flex-direction: row-reverse

#### Display property

Every tag in CSS has a `display` property associated with it by default. In fact, CSS has a lot of hidden defaults, just like by-default all text's color is black. With `display`, it varies by what type of tag we're talking about. `divs` are `display: block`; by default while `span`s are `display: inline`; and this makes sense given their functions. However, being that we have access to CSS, we can manipulate a `span` to act like a `div` and vice-versa (though usually you'd just use the appropriate tag.)

`block`, `inline`, `flex`, `table`, `none`

if I say width: 200px, what is 200px wide? Unfortunately, the answer is it depends. It depends on what the value of the box-sizing property. By default, it does things the old way of writing code which if I say width: 200px I am not including the border or the padding. This is annoying because if I'm trying to fit things together well, it's much easier to include border and padding. Remember how I told you to never use the wild card selector before? This is the one exception where I permiss you to:
```css
* {
  box-sizing: border-box;
}
```
(*this is the only case where the wildcard selector is allowed. If you want to set up default values for fonts, colors etc. put them on `body`.*)

This will make everything use the border-box sizing instead of the default one (which is called content-box but you'll never have to know that.) This is the first thing I put in every project I start. You'll need it once in one file. This will make everything by-default be border-box and thus be easier to work with. This used to be controversial to use but here is Paul Irish (really smart guy who works on Google Chrome) saying it's okay.
https://www.paulirish.com/2012/box-sizing-border-box-ftw/



#### Flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/



### Project

Lembrar do:

```css
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
```javascript
const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);
```
Se usar normal quotes, ele faz isso aqui:
```javascript
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

```javascript
while (condition) {
    statements;
}
```

```javascript
do {
    statements;
} while (condition);
```

```javascript
for (<initialize>; <condition>; <increment>) {
    statements;
}
```

**Unary operators**

Updating a variable:
```javascript
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
```

Ou `-=`, `/=`, `*=`, `--`, `++`.

### FUNCTIONS

>Functions encapsulate little pieces of logic that you can reuse all over the place.

```javascript
function <name>(arguments) {
    statements;
    return <output>;
}
```

Function names generally are verbs.

> The way call a function is you add parens to the end of it, like this: `someFunctionName()`. If you see parens after a variable name, you instantly know that that's a function. Inside of the parens go the parameters. These variables will be passed to the function that is being called in the order that you put them there.

```javascript
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

#### Scope

What matters is where the variable was created, and a scope is generally defined by any block, `{ }`.

A scope can see the variables declared in its surrounding scopes.

```javascript
let status = "unchanged";
function addFive(number) {
  status = "changed";
  return number + 5;
}

console.log(status);
> "unchanged"
addFive(10);
console.log(status);
> "changed"
```

#### Built-ins functions

Example, strings methods. In the console (or VS Code), if you type a string and a dot, `"something".`, they will show you lots of methods (functions) available to objects of type string.

Example: `string.substr(indexToStart, howManyCharactersToInclude)`

The `Math` object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects



### Objects

Objects and arrays are collections of data.

Objects are made of _keys_ and _values_. The keys must be unique.

> They're extremely useful in JavaScript; they're how you'll group together like-information so that they can be used together. They contain a bunch of **keys** and **values**. The keys are on the left side of the `:` and represent how you get that piece data of out of the object. 

```javascript
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100
};
console.log(person);
> Object {
  "city": "Seattle",
  "favoriteFood": "🌮",
  "name": "Brian Holt",
  "numberOfTacosWanted": 100,
  "state": "WA",
  "wantsTacosRightNow": true,
}
console.log(person.name);
> "Brian Holt"
console.log(person["name"]); // same as the line above; definitely prefer using the other one
> "Brian Holt"
```

A vantagem dessa última notação é que é possível passar o nome da chave (que é uma string) por meio de uma variável, tipo:

```javascript
console.log(person["state"])
> "WA

const ref = 'state';

console.log(person[ref])
> "WA"
```

You can have objects inside of objects:

```javascript
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
  address: {
      street: "bla bla place",
      number: "123"
  }
};

```

Why use objects instead of separate variables?

> [With objects, we're] able to pass all  information as one package which makes it easy to keep track of since we're just passing one variable. 

#### Properties

Properties are just variables define inside of objects?



#### Methods

Methods are just functions defined inside of objects.

```javascript
const dog = {
  name: "dog",
  speak() { // or speak: function() {
    console.log("woof woof");
  }
};

dog.speak();
```

#### Context

> In the simplest form, anywhere you are in JavaScript you have a context you are in. You can reference that context by using `this`. If I just reference `this` from the outtermost layer, it'll be the global object, which in the browser is something called `window`. `window` already has a bunch of stuff on it.

> A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`. There are crazy exceptions to this and you can even manipulate it yourself. For now, operate with that definition.  

 Javascript Global Scope, Global context (when inside a browser): `window`

`window` object has many builtin functions/methods.

`this.scrollY` (no contexto global), ou `window.scrollY` (your scroll position along the page).

check `window.` on the Javascript Console, or VS Code.





### Arrays

> Objects are un-ordered collections of datas using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order.

> Declare an array using `[ ]`.

> Access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, the numbering starts at 0. So the first element is index 0.

> Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

`array.length`

`array.join("<separator>")`

`array.push(<element_to_be_inserted_at_the_end>")`

`array.unshift(<element_to_be_inserted_at_the_beginning>")` 



```javascript
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" });

// ways to change array elements:
courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };
courses[2].course = "Complete Intro to React v5"

console.log(courses);
```

#### Iterating over an array:

```javascript
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
```

Using forEach (a method for arrays)

```javascript
// method 2
cities.forEach(function(city) {
  console.log(city);
});
```

`.forEach` accepts an anonymous function as argument/parameter. And it will apply that function once over every element of the array. 

This anonymous function takes in a parameter (we can call it whatever we want, I guess), and that parameter will represent the element of the array that the function is iterating over at a given time. It can also take a _phantom_ parameter, `index`, for example, so you can access the element's index of each iteration.

```javascript
// method 2
cities.forEach(function(city, index) {
  console.log(city);
});
```

Actually, the names don't matter: the first parameter will be taken in as the element itself, and second as its index.

_Functional programming paradigm_?



### Comments

`// one-line comment`
`/* multiple-line comment */`



## The DOM

[Course Notes](https://btholt.github.io/intro-to-web-dev-v2/dom)

It is how javascript, html and css interact. 

> The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the document object model. The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page. 

`document.querySelector('.red-square')`

`querySelector` takes a CSS selector as parameter and returns the first instance of that on the page.

`querySelectorAll` returns all instances on the page, as an array.

CSS properties are referenced in JS with the same name, but with camelCase instead of dashes.

`background-color` in CSS becomes `style.backgroundColor` in JS.



>* `document` is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the `querySelector` in which you pass in a CSS selector and it returns to you the **first** one of that matches selector that it finds (if you have many of them on the page, you get just the first one.) 
>
>- We then use the `style` object which represents all the CSS styles that are being applied to that object at that time.
>- We then set the `backgroundColor` of that element. Notice it is `backgroundColor` and not `background-color` (camelCasing vs kebab-casing). This is how you interact with CSS via JavaScript. Anything that's kebab-cased like `padding-right` becomes camelCased, like `paddingRight`. While annoying, it'd be even more annoying if they didn't switch it since everything in JavaScript is camelCased.

> There's a lot more you can do with an element than just modifying its style. You can add more HTML into it, remove it, change the text, search for different elements inside of it, get its position on the page, clone it, and a lot more. 

^ can't wait.

Okay, so what if we had multiple elements we wanted to modify all at once:

```javascript
<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
<script>
  const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
</script>
```

Results:

- Modified by JavaScript!
- Modified by JavaScript!
- Won't Change
- Modified by JavaScript!
- Won't Change
- Modified by JavaScript!



### Events and Listeners

`.addEventListener`

* `'click'`,

* `'keyup'` (acionado quando o usuário solta o dedo do teclado dentro de uma entrada), 

* `'keydown'` (quando o usuário aperta o botão do teclado, mas aí o evento seria disparado sem  o texto começar);

* `change`  (acontece quando o usuário _unfocus_ uma entrada. tipo, ele clicou numa caixa de texto. quando ele clicar fora, o `change` dispara. it waits for a _blur_ event.)  `change` events happen whenever a user types something in the input and then unfocuses the input by clicking somewhere else or hitting tab to change the focus. 

  

_callback function_: a function that gets called back whenever the event happens.



### Event delegation / bubbling

> If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called **event bubbling**. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element. 

```html
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
</script>
```

> You can see that we only bound one event listener, and that was the div above it. Then, when we click the button, we're using the `event` parameter that is being passed into the callback. You may be wondering where that came from. It was always there, we just ignoring it. An event listener's first parameter is always an event object. There's lots of information on the event object but we're most concerned with `event.target`. `target` is the tag that the event originated from. In this case it'll be the button that caused the event. And we know that with tags you can use the `innerText` property to get the text inside of them. That's how we able to alert the correct number. Cool, right? 

But, the code in this way will make the browser listen to clicks inside the div, even if it's not on the buttons (and the `target` will be all the buttons). We could limit the actions to the cases when the `target` was a tag of type `button`:

```html
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
      if (event.target.tagName === "BUTTON") {
    	alert(`You clicked on button ${event.target.innerText}`);
      }
      event.stopPropagation{}; // ver!
  });
</script>
```





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



> The problem with using percentages in conjuections with heights: your heights and widths are different. 5% of height is not the same of 5% of width, and that'll make the gutters look weird. You want the bottom gutters to be the same size as the side gutters. `margin-bottom` to the resuce! If you give the row a `margin-bottom` of `.5%` (if you're using my same numbers) then that'll work since margin is always measured as a function of width (just one of those things you have to know!) Hopefully that helps. 



### Ver depois

Botões que crescem com o mouseover com flex.

https://codeburst.io/flexbox-flex-basis-flex-grow-41b10bcd33a3