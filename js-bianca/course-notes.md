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

