### Get an object keys

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

### filter an array

```js
let arr = [{x: "a", y: "1"}, {x: "b", y: "2"}, {x: "a", y: "3"}];
console.table(arr);

let arr_filtered = arr.filter(d => d.x == "a");
console.table(arr_filtered);
//
```


