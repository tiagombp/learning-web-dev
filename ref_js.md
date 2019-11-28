

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


### Converting long "dataframe" as an array of objects to an object

```js
const dados_long = [
  {"cat": "a", "valor":"1000"},
  {"cat": "b", "valor": "500"}, 
  {"cat": "c", "valor":"1200"},  
  {"cat": "d", "valor": "200"}];

const chaves = dados_long.map(d => Object.values(d)[0]);
const vlores = dados_long.map(d => Object.values(d)[1]);

let a = {};

for (let i = 0; i < chaves.length; i++) {
  a[chaves[i]] = vlores[i];
}
```

### Get the unique values of an array

```js
const dados = [
  {tipo: "a",
   x: 1,
   y: 5},
  {tipo: "b",
   x: 1,
   y: 10},
  {tipo: "a",
   x: 2,
   y: 25},
  {tipo: "b",
   x: 2,
   y: 15},
  {tipo: "a",
   x: 3,
   y: 16},
  {tipo: "b",
   x: 3,
   y: 33},
];

const tipos = d3.map(dados, d => d.tipo).keys();
```

### Using forEach to create an object:

```js
let a = [1,2,3,4];

let c = {};

a.forEach(function(d) {
  return(c[d] = {"x": "x de "+d, 
                 "y": "y de "+d})
})
```


