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

### Generate a range

```js
d3.range(n)
```

### In a D3 "loop", get the attribute of the current element

Dá para usar, sem D3: `this.getAttribute("x")`

Ou, com D3: `d3.select(this).attr("x")`.

```js
const layer_step3 = $SVG.selectAll("rect")
                        .attr("x", function() {
                            console.log("O this aqui dentro é", 
                            this, 
                            this.getAttribute("x"),
                            d3.select(this).attr("x"));
                        })
```



