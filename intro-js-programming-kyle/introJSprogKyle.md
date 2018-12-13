> When you strive to comprehend your code, you create better work and become better at what you do. The code isn’t just your *job* anymore, it’s your *craft*.  
>
> -- Jenn Lukas

## Intro

### Recommendations

http://jsforcats.com/

Eloquent Javascript

Kyle believes in deep learning, in throwing away the mindset of rushing to learn one thing to get it working and then move on. We will be good friends, I sense.

### Quotes

> "That's one of the best parts about being self employed: you get to make up your own title, and it can be as fluffy as you want it to sound. So I'm an Open Web Evangelist." 
>
> -- Kyle Simpson

> Even the name evokes, as Brendan Eich once put it, "dumb kid brother" status next to its more mature older brother "Java". But the name is merely an accident of politics and marketing. The two languages are vastly different in many important ways. "JavaScript" is as related to "Java" as "Carnival" is to "Car". 

> Because JavaScript borrows concepts and syntax idioms from several languages, including proud C-style procedural roots as well as subtle, less obvious Scheme/Lisp-style functional roots, it is exceedingly approachable to a broad audience of developers, even those with just little to no programming experience 

> Therein lies the paradox of JavaScript, the Achilles' Heel of the language, the challenge we are presently addressing. Because JavaScript *can* be used without understanding, the understanding of the language is often never attained. 

> Here, we address head on the tendency of JS developers to learn "just enough" to get by, without ever forcing themselves to learn exactly how and why the language behaves the way it does. Furthermore, we eschew the common advice to *retreat* when the road gets rough. 

> I am not content, nor should you be, at stopping once something *just works*, and not really knowing *why*. I gently challenge you to journey down that bumpy "road less traveled" and embrace all that JavaScript is and can do. With that knowledge, no technique, no framework, no popular buzzword acronym of the week, will be beyond your understanding. 

## Up and Going, chapter 1

A program, often referred to as *source code* or just *code*, is a set of special instructions to tell the computer what tasks to perform. 

The rules for valid format and combinations of instructions is called a *computer language*, sometimes referred to as its *syntax*, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.

In a computer language, a group of words, numbers, and operators that performs a specific task is a *statement*. Programs are just collections of many such statements, which together describe all the steps that it takes to perform your program's purpose. 

Statements are made up of one or more *expressions*. An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators. 

*Variables* : Think of them as symbolic placeholders for the values themselves.

By contrast, the `2` is just a value itself, called a *literal value*, because it stands alone without being stored in a variable. 

It's typically asserted that JavaScript is *interpreted*, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually *compiles* the program on the fly and then immediately runs the compiled code. 

> The source code that you write is not for the computer. The computer doesn't care about the source code. The compiler does, JavaScript does. You could write many different source codes that when compiled results in the same bytecode, the same stream of 0's and 1's. So, what makes a source code better? The source code is written to the developer, to you and other developers, to your future-self, so you can understand what your program is intending to do. You want to write the code that not only does the right thing, but also makes sense. 

*keywords* have special meanings to the language.

### Expressions x Statements

Statements are made up of one or more *expressions*. An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.

For example:

```
a = b * 2;
```

This statement has four expressions in it:

- `2` is a *literal value expression*
- `b` is a *variable expression*, which means to retrieve its current value
- `b * 2` is an *arithmetic expression*, which means to do the multiplication
- `a = b * 2` is an *assignment expression*, which means to assign the result of the `b * 2` expression to the variable `a`(more on assignments later)

> If we put something into a program that the computer doesn't care about, than the only other reason for it could that a developer cares about it.

### Running a program

> It is taking the source code that was written in text form, and converting it into something that the next layer down knows what to do with.

Javascript is not a scripting language, and is not interpreted line-by-line. It was truer in the beginning of Javascript. Compilation means that there is more than one pass through your program. Javascript is compiled for error checking.

### Output

```javascript
a = 21;

b = a * 2;

console.log( b );
```

In the previous code snippet, we used `console.log(..)`. Briefly, let's look at what that line of code is all about. 

First, the `log( b )` part is referred to as a function call (see "Functions"). What's happening is we're handing the `b` variable to that function, which asks it to take the value of `b` and print it to the console.

Second, the `console.` part is an object reference where the `log(..)` function is located. We cover objects and their properties in more detail in Chapter 2.

Another way of creating output that you can see is to run an `alert(..)` statement.

Statement expressions that have no output/return value (ou seja, só produzem *side effects*): console prints "undefined".

### Input

While we're discussing output, you may also wonder about *input* (i.e., receiving information from the user).

The most common way that happens is for the HTML page to show form elements (like text boxes) to a user that they can type into, and then using JS to read those values into your program's variables.

But there's an easier way to get input for simple learning and demonstration purposes such as what you'll be doing throughout this book. Use the `prompt(..)` function:

```
age = prompt( "Please tell me your age:" );

console.log( age );
```

As you may have guessed, the message you pass to `prompt(..)` -- in this case, `"Please tell me your age:"` -- is printed into the popup.

Once you submit the input text by clicking "OK," you'll observe that the value you typed is stored in the `age` variable, which we then *output* with `console.log(..)`.


To keep things simple while we're learning basic programming concepts, the examples in this book will not require input. But now that you've seen how to use `prompt(..)`, if you want to challenge yourself you can try to use input in your explorations of the examples.

### Operators

The `=` equals operator is used for *assignment* -- we first calculate the value on the *right-hand side* (source value) of the `=`and then put it into the variable that we specify on the *left-hand side* (target variable). 

Object Property Access: `.` as in `console.log()`.

Objects are values that hold other values at specific named locations called properties. `obj.a` means an object value called `obj` with a property of the name `a`. Properties can alternatively be accessed as `obj["a"]`. 

### Values and Types

These different representations for values are called *types* in programming terminology. JavaScript has built-in types for each of these so called *primitive* values:

- When you need to do math, you want a `number`.
- When you need to print a value on the screen, you need a `string` (one or more characters, words, sentences).
- When you need to make a decision in your program, you need a `boolean` (`true` or `false`).

Values that are included directly in the source code are called *literals*. `string` literals are surrounded by double quotes `"..."` or single quotes (`'...'`) -- the only difference is stylistic preference. `number` and `boolean` literals are just presented as is (i.e., `42`, `true`, etc.).

Consider:

```javascript
"I am a string";
'I am also a string';

42;

true;
false;
```

Beyond `string`/`number`/`boolean` value types, it's common for programming languages to provide *arrays*, *objects*, *functions*, and more. We'll cover much more about values and types throughout this chapter and the next.

`"42"[0] // 4`

#### Coercion x conversion

Kyle prefers explicit x implicit conversion.

_Explicit_: 

```javascript
a = 42;

a = a/ 2;

a = String(a);

console.log(a);

// "21"

b = Number(a);

console.log(b);

// 21
```

In JavaScript, variables do not have type -- values have the type.

_Implicit_ 

```javascript	
a = 42;

a = a / 2;

a = a + "";

console.log(a);

// "21"
```

(hoje em dia, aparentemente o console do Chrome mostra strings com aspas, e não mais com cor diferente)

