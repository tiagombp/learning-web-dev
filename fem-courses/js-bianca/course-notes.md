## Arrays and objects

### Destructuring

```javascript

// método tradicional
var obj = {first: 'Dan', last: 'Coelho}
var first = obj.first;
var last = obj.last;

// destructuring saves us from typing so much...
```

Variable declarations != Assignments

```javascript
// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3

// Spread Operator
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [2,3]

// Swap variables easily without temp
var a = 1, b = 2;
// without destructuring
var temp = a;
a = b;
b = temp;
console.log(a, b);
// with destructuring
[b, a] = [a, b];
console.log(a, b);

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log(a, b, c, d)

// Objects
var {user : x} = {user: 5};
console.log(x);
```

## List Transforms

Nesting
```javascript

// object literal

const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};

// with push

const game = {};

game['suspects'] = [];

game.suspects.push(
    {
        name: "Rusty",
        color: "orange"
    });

game.suspects[1] = {
    name: "Miss Scarlet",
    color: "red"
};

//

game["suspects"]; // [{name: "Rusty",`color: "orange"}, {name: "Miss Scarlet", color: "red"}]
```

Objects do not have `length`.

## forEach()

```javascript
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak: function () { 
      console.log("my name is", name); 
    }
  };
};

//ES6 version --> speak, the method, is declared directly, no need of ":" and "function" 
function CreateSuspectObjectsES6(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() { 
      console.log("my name is", name); 
    }
  };
};

var suspects_names = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// obs:
"oi pessoal".split(' ')
// => ["oi", "pessoal"]

// se fazemos...
a = CreateSuspectObjects("Miss Scarlet")
a.speak(); // => "my name is Miss Scarlet.

let suspects = [];
```
 
## _.each / .forEach()

* Iterates over a *list* of elements, passing the values to a function.
* Each invocation of *iterator*, the function, is called with **three** arguments: (element, index, list). If *list* is a Javascript object, *iterator*'s arguments will be: (value, key, list).

What they are useful for?
* looping over lists.
* .forEach() is called on the array, as a method, instead of taking the argument as an argument (as _.each).

"_" is an object (it has a dot!)

Para iterar sobre um array, dá para usar `for(let i = 0; i < obj.length; i++) {console.log(obj[i])}`
Para iterar sobre um objeto, tem que usar `for(let key in obj) {console.log(obj[key])}` <- usa o bracket aqui por "key" tem a regra de nome de variável.

Arrays are OBJECTS, então `typeof(obj) === "array"` sempre vai retornar FALSE.
Para testar se é array, `Array.isArray(obj)`

`if (algo que retorne undefined) {} else {};`
Vai para o `else`! 

## _.map() / .map()

_.map(list, iterator)

`_.map([1,2,3]), function(v, i, list) {console.log(v)}`

* Produces a new array of values by mapping each value in __list__ through a transformation function(__iterator__).
* Each invocation of __iterator__ is called with three arguments: (element, index, list). If __list__ is a JS object, __iterator__'s arguments will be (value, key, list).

`each` x `map`: 

* each does not return anything.
* map returns an array every time.

map: we use it to take lists and return a new array of the same size.

```javascript
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item) {
  return `broken ${item}`;
}
```







