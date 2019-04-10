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




