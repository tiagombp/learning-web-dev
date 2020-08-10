## Articles

Data attributes
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

Custom propertiers
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

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

### join arrays

```js
let a = [1,3,4,5,6,7]

let b = ["a", "f", "z"]

let c = [...a, ...b]
c
//(9) [1, 3, 4, 5, 6, 7, "a", "f", "z"]
```

### join objects

```js
let a = {"a": 1, "b": 2}

let b = {"names" : ["jon", "robb", "bran"],
"house" : "stark"}

let c = {...a, ...b}
c
/*
{a: 1, b: 2, names: Array(3), house: "stark"}

a: 1
b: 2
house: "stark"
names: (3) ["jon", "robb", "bran"]
*/
```

Atenção ao seguinte:

```js
let d = {"obj1" : a, "obj2" : b}
d
//{obj1: {…}, obj2: {…}}
//obj1: {a: 1, b: 2}
//obj2: {names: Array(3), house: "stark"}


a["a"] = 3
d
//{obj1: {…}, obj2: {…}}
//obj1: {a: 3, b: 2}  
// obj2: {names: Array(3), house: "stark"}
```

Ele alterou o novo objeto! porque o novo objeto continha apenas referências ao objeto a.

Agora:

```js
let e = {}

e["obj1"] = {...a}
e["obj2"] = {...b}
e

//{obj1: {…}, obj2: {…}}
//obj1: {a: 3, b: 2}
//obj2: {names: Array(3), house: "stark"}

a["a"] = 23
e
//{obj1: {…}, obj2: {…}}
//obj1: {a: 3, b: 2}
//obj2: {names: Array(3), house: "stark"}
```


### Copy an object / array

Objects are references types, so you cannot create a copy using `=`. Reference types don't hold values, they are a pointer to the value in memory. (Samantha Ming)


```js
let a = {"a": 1, "b": 2}

let b = Object.assign({}, a)
b
// {a: 1, b: 2}

// or

let c = {}
Object.assign(c, a)
c
//{a: 1, b: 2}

let d = {...a}
d
//{a: 1, b: 2}

```

A shallow copy means the first level is copied, deeper levels are referenced.


### Pad a string

```js
"hi".padStart(10, "h")
//"hhhhhhhhhi"
"hi".padEnd(10, "!")
//"hi!!!!!!!!"
```

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

### Slice an array
```js
let a = d3.range(6)
// [0, 1, 2, 3, 4, 5]
a.slice(3,5)
// [3, 4]
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

### se o nome da chave for uma variável

```js
let coluna = "Personagem";
let valor  = "Gandalf";
let objeto = {[coluna] : valor};

// {Personagem: "Gandalf"}

```

### transformar uma array de objetos com rotulo/valor em um objeto com "rotulo: valor" 

```js
  const dados_flat = {};
  for (el of dados) {
    dados_flat[el.rotulo] = el.valor;
  }
  console.log(dados_flat);
```

### Centralizar rótulos

Ou, usando d3, se quero centralizar um texto de rótulo em relação a uma barra, por exemplo. Se o texto passa de uma linha...
https://codepen.io/tiagombp/pen/oNgLKRw



https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

If you need the bounding rectangle relative to the top-left corner of the document, just add the current scrolling position to the `top` and `left` properties (these can be obtained using `window.scrollX` and `window.scrollY`) to get a bounding rectangle which is independent from the current scrolling position.


## Dúvidas

`selection.node().getBoundingClientRect().width`
x
`selection.node().offsetWidth`

`selection.node()`
`selection.html()`


# organizar

# Javascript

### Functions

Arrow functions:

Caso se use `{` e `}`, tem que usar `return`:

```js
(a, b) => {
    return ...
}
```

Vantagem de usar `function name_of_function(parameters)`:

>Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used. (Eloquent Javascript)



### Control Structures

```javascript
let color;
if (v1 === 10) {
    color = "blue"
} else {
    color = "red"
}

// ternary operator
let color = v1 === 10 ? "blue" : "red;
```

#### Loops

```javascript

for (let i = 1; i < 21; i+=1){
    console.log(i);
}

let j = 1;
while (j < 21){
    console.log(j);
    j+=1;
}

let k = 1;
while (true) {
    console.log(k);
    k += 1;
    if (k > 21) break;
}
```

Essa construção não conhecia, para iterar com `for` sobre os elementos de um array:

```js
let a = [1,2,3,4];

for (let elemento of a) {
    console.log(elemento)
}

```

### Manipulating Arrays

#### Slice

```js
arr.slice([begin[, end]])
```

#### Including and removing elements

A negative index can be used, indicating an offset from the end of the sequence. `slice(-2)` extracts the last two elements in the sequence.

`arr.push()` acrescenta ao final, 
`arr.pop()` remove o último elemento,
`arr.slice(0, -1)` faz uma cópia da array, removendo o último elemento (mas não altera a array original).

#### Map, Reduce, Filter, Sort

Reduce

```js
let employees = [ {name:"Ali", salary: 50000},
                  {name:"Zoe", salary:75000},
                  {name:"Jack", salary: 60000},
                  {name:"Felix", salary: 35000}];

d3.sum(employees, d => d.salary) // 220000
employees.reduce( (acumulado, valor_da_vez) => acumulado + valor_da_vez.salary, 0)
```

Esse `0` no final é o valor inicial do `reduce`. Ainda é possível passar a própria array como argumento.


Reduce para somar os quadrados de um array:

```js
let a = [10, 20, 30, 40];
let total = a.reduce((ac, atual) => ac + atual*atual, initialValue = 0);
// se não colocar o initialValue = 0, reduce vai assumir que o primeiro
// elemento da array é o acumulador inicial, e o segundo elemento (i = /// 1) é o valor atual.
// passando initialValue = 0, forço o acumulador a começar em zero, e o 
// primeiro currentValue a ser o elemento de i = 0, 
// o primeiro elemento mesmo da array.

// isso equivale a
let a = [10, 20, 30, 40];
let total = 0;
for (d of a) {x = x + d*d};
```

No R, o `purrr` tem uma função accumulate que é como um reduce só que gerando os valores intermediários como vetor.

Uma versão desse accumulate em JS seria:

```js
[2,3,4,5,6].reduce((ac,cv) => ac * cv)
// 720

[2,3,4,5,6].map((d,i,a) => a.slice(0,i+1).reduce((ac,cv) => ac * cv))
// [2, 6, 24, 120, 720]
// o "a" é a própria array
```



#### Fazendo um gather

```js
data.map(d => {
    // vai pegar as colunas cujos títulos são números, ou seja, para elas, +nome_coluna vai dar NaN.
    let years = Object.keys(d).filter(k => !isNaN(+k))

    let history = years.map(y => ({
        year : y,
        value : +d[y]
    }))
    d.history = history;
}

)

```


### Manipulating the DOM

```javascript

document.write("tsa, não sabia dessa.");

```

Alterando o estilo de um elemento, JS x D3:

```js
document.querySelector("#AirlinesChart").style.border = "5px solid blue"
// comparar com
d3.select("#AirlinesChart").style("border", "3px dashed limegreen")
```


Talvez ressaltar as idiossincrasias: 

* separar propriedades por "," e não ";". Os valores de propriedades são declarados com ":", e não "=". Essas coisas acabam sendo boas, porque te remetem ao contexto em que aqueles dados estão sendo utilizados.

* contagem começa por "0" x length da array

* nome do parâmetro na declaração de uma função... não usar o mesmo nome da variável que vai ser passada como argumento, para evitar confusão.

Outras coisas:

mostrar como vc vai precisando de outras funções e métodos pra fazer coisas simples. tipo, detectar o nome de um arquivo antes da extensão, a partir do nome completo com extensão.

mostrar que esses `d` que usamos como argumentos, parâmetros, pode ter qualquer nome.

na verdade, tentar explicar de onde vêm esses argumentos "fantasma" que são usados nas funções anônimas dos métodos. tipo, dentro de um promise, lá no `.then(function(data){...})` quem danado é esse `data`? como eu sei quem são os argumentos que posso usar nessa função anônima?

quando você usa `this`, você esta usando o `node`, e aí você só pode usar as funções nativas do JS. se você encapsula o `this` numa **selection**, `d3.select(this)` aí você tem à disposição todos os métodos de D3.

# D3

## "glue"

Por exemplo,

```js
.attr("transform", d => 'translate((${d.x0}, ${d.y0}))')
```

## joins

quando você faz `.data(dados)`,  e depois usa um accessor com `d => ...`, vc basicamente está dizendo, pegue cada elemento de `dados` e faça uma determinada ação.

## Selections

Get the actual node from a selection:

```js
let $h1 = d3.select("h1");

console.log($h1);
// Pt {_groups: Array(1), _parents: Array(1)}

console.log($h1.node())
// <h1>...</h1>

let _h1 = document.querySelector("h1");

console.log(_h1);
// <h1>...</h1>

```

Então `d3.select(selector).node()` equivale a `document.querySelector(selector)`.

Outra coisa:

`d3.selectAll("p").node()` equivale a `d3.selectAll("p").nodes()[0]`, porque nesse caso existe uma array de nodes, e `.node()` retorna o primeiro elemento da array. `.nodes()` retorna a array inteira.

Um detalhe para a pequena e sutil diferença entre o que é apresentado no console para `d3.selectAll("p").nodes()` e `document.querySelectorAll("p")`:


### tamanho da seleção

`d3.selectAll("p").size()`,

que equivale a

`d3.selectAll("p").nodes().length`

ou ainda a 

`document.querySelectorAll("p").length`


### selection.text() vs.selection.html()

![](JS_d3_reference_02.PNG)

![](JS_d3_reference_02text.PNG)

![](JS_d3_reference_02html.PNG)

When using `selection.html()`, the content passed in as argument will actually be parsed as html.

## interaction

Events: `mouseover`, `mouseout`, `click`, `change`, `mouseenter`, `mouseleave`, `mousemove`

`d3.event.x`, `d3.event.y`
`d3.event.selection`, `d3.event.clientX`, `d3.event.clientY`

`d3.mouse(this)` -- array com x em `[0]` e y em `[1]`

`onclick` attribute (for buttons elements, e.g.)

When use it ("inline events"), instead of adding an event listener?

## outros

### obtendo vs definindo valores

![](JS_d3_reference_03.PNG)




## scales

### quick color scales

Se faço

```js
let cScale = d3.scaleOrdinal(d3.schemeCategory10)
```

tenho uma escala rápida sem me preocupar com range ou domain.

### scaleBand

`d3.scaleBand().padding(value)`

A `.bandwidth()` é calculada simplesmente fazendo:
( `.range()[1]` - `.range()[0]` ) / `.domain().length`

### scaleTime

## line generator

`.defined(d => !!d.price)`

## Layouts

### treemap
 
```js
d3.treemap()
  .size()
  .paddingInner()
```

## outros

salvar array
`localStorage.setItem('dados', JSON.stringify(dados.map(d => ({"data": d.data, "mutuario": d.mutuario, "valor": +d.valor}))));`

It's simple. Just go to the developer tools by pressing F12 , then go to the Application tab. In the Storage section expand Local Storage. After that, you'll see all your browser's local storage there.

## para capturar width, height do svg

```js
let w = svg.style("width");
let h = svg.style("height");

[w, h] = [w, h].map(d => +d.slice(0, d.length-2));
```


# dúvidas

quando se createElement, ele fica flutuando no ether até dar um append em algum lugar?
como funciona direito d3.csv
promises, Promisse All
New Date(d.date)
como d3.hierarchy espera o dado?
mouseover x mouseenter?
qual a natureza de scale?
pq não funciona...
```js

let scale = d3.scaleLinear();

function config() {
  scale.range([1,10]);
}

config()

scale.domain()

# lições

padrão / pattern enter+update+exit

let objetos = d3.select(svg).selectAll(objeto).data(dados)

objetos.exit().attr(faz alguma coisa com quem sai).remove() // <- se for o caso

let objetos_enter = objetos.enter().attr(todas as coisas que não vão mudar quando os dados mudarem)

objetos = objetos.merge(objetos_enter)

objetos.attr(todas as coisas que mudam quando os "dados" mudam)

