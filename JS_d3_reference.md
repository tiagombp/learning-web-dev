# JS x D3

`document.querySelector(ref)` equivale a
`d3.select(ref).node()`

# Javascript

### Functions

Arrow functions:

Caso se use `{` e `}`, tem que usar `return`:

```js
(a, b) => {
    return ...
}
```

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

#### Filtrando uma array a partir de uma outra array

```js
var arr = [1,2,3,4],
    brr = [2,4],
    res = arr.filter(f => !brr.includes(f));
console.log(res);
```

#### Concatenar

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5]; 

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

// // com spread

let arr1a = [0, 1, 2];
let arr2a = [3, 4, 5];

arr1a = [...arr1a, ...arr2a]; 
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)
```

#### Remover elementos

Splice

```js
let a = [10,11,12,13,14,15]
undefined
a.splice(2,3)
// (3) [12, 13, 14]
a
//(3) [10, 11, 15]
```

`array.splice(pos_inicial, quantos)`
Ele remove `quantos` elementos a partir do index `pos_inicial` (inclusive).

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

Quando se usa um `document.querySelectorAll(seletor)`, o que se retorna é um nodelist, sobre o qual é possível usar os métodos de Arrays (forEach, map, reduce, filter etc.)

Mas se pego um elemento com `document.querySelector(seletor)`, e peço seus filhos com `el.children`, o que ele retorna é um HTMLCollection, sobre o qual não dá para usar os methods de arrays. Mas aí vc pode usar um `Array.from(el.children)`, e ele vai gerar uma array.

Outra coisa, quando quero saber que tipo de elemento é:
Note that the `Element.tagName` property could have been used instead, since `nodeName` has the same value as `tagName` for an element. Bear in mind, however, that `nodeName` will return `"#text"` for text nodes while `tagName` will return `undefined`.

E note que é possível testar se um elemento seria selecionado por um determinado seletor usando:

```js
var result = element.matches(selectorString);
```

The matches() method checks to see if the Element would be selected by the provided selectorString -- in other words -- checks if the element "is" the selector.


#### Setting and getting styles

```javascript
window.getComputedStyle(a).marginTop
// ou
window.getComputedStyle(a).getPropertyValue("margin-top")
// funcionam com todas as propriedades


a.style.getPropertyValue("max-width") 
//(Funciona para propriedades inline!)


window.getComputedStyle(a).getPropertyValue("height")
//x
a.getBoundingClientRect().height
a.offsetHeight
```

A explicação do MDN:

The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain. Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.

The returned object is the same CSSStyleDeclaration type as the object returned from the element's style property. However, the two objects have different purposes:

	•	The object from getComputedStyle is read-only, and should be used to inspect the element's style — including those set by a <style> element or an external stylesheet.
	•	The element.style object should be used to set styles on that element, or inspect styles directly added to it from JavaScript manipulation or the global style attribute.

Aqui é importante se ligar que `getBoundingClientRect().height` ou `offsetHeight` calculam a altura sem as margens... então quando for preciso calcular as alturas dos elementos no JS, é melhor usar padding no style.

#### Pegando o tamanho da fonte base

```js

const root = document.documentElement;
const base_font_size = +window.getComputedStyle(root, null).getPropertyValue('font-size').slice(0,-2);

```

#### Mexendo com classes

Tirando e acrescentando classes

```js
el.classList.add('show');
el.classList.remove('hide');
```

```js
// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
```

Testando se elemento contém uma classe: 

```js
Array.from(e1.classList).includes("teste1");
// ou, simplesmente:
e1.classList.contains("teste1");
```

#### Fade

```js
el.classList.add('show');
el.classList.remove('hide');
```

```css
.show {
  transition: opacity 400ms;
}
.hide {
  opacity: 0;
}
```
#### Experimentar

(https://jvns.ca/blog/2020/06/19/a-little-bit-of-plain-javascript-can-do-a-lot/)
scroll through the page with .scrollIntoView
The last fun thing I learned about is .scrollIntoView – I wanted to scroll down to the next question automatically when someone clicked “next question”. Turns out this is just one line of code:

```js
row.classList.add('revealed');
row.scrollIntoView({behavior: 'smooth', block: 'center'});
```


## Browser

`document.documentElement` returns the `Element` that is the root element of the document (for example, the `<html>` element for HTML documents).




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

## force layout

A simulação vai gerar valores de "x" e "y" para os nodes que foram passados para ela. Para manter a constância do objeto, é importante iniciar esses valores x e y dos nodes com as posições onde estarão as bolhas quando a simulação for iniciada (nesse caso, a posição das bolhas no dot plot).

## outros

### obtendo vs definindo valores

![](JS_d3_reference_03.PNG)


### each 

Quando se usar each com uma seleção, o primeiro parâmetro se refere ao dado que está amarrado a cada elemento. Assim:

```js

selecao.each(function(d,i) {
    // "d" é o dado amarrado ao elemento atual
    // d3.select(this) vai selecionar o elemento atual -- seleção d3
    // d3.select(this).datum() vai ser o próprio "d".
})

```

being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). 
https://github.com/d3/d3-selection#selection_each


### pegando o dado amarrado a um determinado elemento svg

```js
        barras
           .attr("fill", function(d) {
             console.log(d3.select(this).datum())
           })
```


## scales

### Scale Linear, valores fora dos limites do domínio

Para fazer com que valores fora dos limites do domínio retornem os extremos do range visual, é possível usar um `.clamp(true)`.

```js
let a = d3.scaleLinear().domain([-1e9,1e9]).range([10,100])

a(-1e9)
// returns 10

a(-1e10)
// returns -395

a(1e10)
// returns 505

a.clamp(true)
a(-1e10)
// returns 10
a(1e10)
// returns 100
```


### quick color scales

Se faço

```js
let cScale = d3.scaleOrdinal(d3.schemeCategory10)
```

tenho uma escala rápida sem me preocupar com range ou domain.

### scaleBand

`d3.scaleBand().padding(value)`

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

# dúvidas

como funciona direito d3.csv

```js
d3.csv(url).then(draw(data)) não funciona
```

Não funciona.

Mas

```js
d3.csv(url).then(function(data) {
    draw(data)
})
```

promises, Promisse All
New Date(d.date)
como d3.hierarchy espera o dado?
mouseover x mouseenter?
d3 stack melhor
