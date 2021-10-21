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

## Como animar canvas com gsap?

https://greensock.com/forums/topic/28376-canvas-image-animation/

> So, GSAP is largely a way to animate properties. What you need to figure out is which properties you need to animate and on what.
-- Cassie

Como eu fiz:

```js
const data = [

    { 
        id: 1,
        x1: 10,
        y1: 10,
        y2: 100,
        color: 'blue'
    },

    { 
        id: 2,
        x1: 50,
        y1: 10,
        y2: 20,
        color: 'tomato'
    },

    { 
        id: 3,
        x1: 90,
        y1: 10,
        y2: 120,
        color: 'khaki'
    },

];

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const dim = 20;

function set_canvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach(obj => {

        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x1, obj.y1, dim, dim);

        obj.current_y = obj.y1;

    });

    console.log(data);

}

function retrieve_data(i, target, param) {

    console.log(target[param]);

    return target[param];

}

function update_canvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //console.log(this);
    data.forEach(obj => {

        ctx.fillStyle = obj.color;
        ctx.fillRect(obj.x1, obj.current_y, dim, dim);

    })

}

set_canvas();

gsap.to(data, {
    duration: 2,
    delay: 1,
    yoyo: true,
    repeat: 1,
    ease: 'none',
    current_y : (i, target) => retrieve_data(i, target, 'y2'),
    onUpdate : update_canvas
    } 
)
```
