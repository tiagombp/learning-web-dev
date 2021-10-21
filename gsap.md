# GSAP

Como passar valores que serão animados de forma condicional? Isto é, em vez de animar para um `y : 100`, animar para um valor que vai ser determinado por uma função?

É possível usar uma função que vai ter como parâmetros/atributos `(i, target)`: https://greensock.com/function-based/

Considerando esses dados: 

```js
const data = [
  
  {
    id: 1,
    x1 : 10 
  },
  
  {
    id: 2,
    x1 : 20 
  },
  
  {
    id: 3,
    x1 : 30 
  },
 
]
```

É possível fazer assim:

```js
function retrieve_data(i, target) {
  console.log(i, target);
}

gsap.to(data, {
  ease: SteppedEase.config(6),
  y : retrieve_data,
  })

```

O target vai ser cada objeto que está sendo iterado da array que eu passei para o gsap (`data`). Ou seja, não preciso passar elementos HTML, posso passar qualquer tipo de objeto!

E se eu quiser um argumento extra? A melhor maneira que encontrei foi assim:

```js 
function retrieve_data(i, target, extra) {
  console.log(i, target, extra);
}

gsap.to(data, {
  ease: SteppedEase.config(6),
  //y : retrieve_data,
  y : (i, target) => {retrieve_data(i, target, 'a')}
  })
```
