## Some concepts

When you define a function, you can define a parameter, which acts as a local variable inside the function. Each parameter is assigned the argument value that you pass in that position of the call (https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md).

That is, when building a function, you define _parameters_. When calling the function, you pass in _arguments_ (which will be assigned to the parameters).

```js
function greeting(this_is_a_parameter) {
    console.log(`Hello, ${ this_is_a_parameter }!`);
}

greeting(this_is_an_argument);
```

## How to do some stuff

### Get an object keys

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
console.log(d3.keys(object1));
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
// ou
const tipos = dados.map(d => d.tipo).filter((v, i, a) => a.indexOf(v) === i));
// o v é o valor atual do elemento, i é o index do elemento e a é o objeto que representa a própria array.
// assim, para cada elemento, ele aplica o método .indexOf(v) sobre a array, procurando a posição em que o 
// elemento atual (v) esta nessa array (a) -- a propria array. e aí ele verifica se a posição encontrada
// corresponde ao próprio index do elemento (o que significaria a primeira ocorrência do elemento). Se não
// for, significa que o elemento é repetido, e vai ser filtrado.
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

### Centralizar rótulos

Ou, usando d3, se quero centralizar um texto de rótulo em relação a uma barra, por exemplo. Se o texto passa de uma linha...
https://codepen.io/tiagombp/pen/oNgLKRw




## Dúvidas

`selection.node().getBoundingClientRect().width`
x
`selection.node().offsetWidth`

`selection.node()`
`selection.html()`
