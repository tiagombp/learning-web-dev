# Problemas aleatórios que descobri na prática

Para definir o raio de um `circle` no CSS, `r : 10` só funciona no Chrome. No Firefox e no Safari é preciso adicionar a unidade, tipo `r: 5px`.

Fontes "fantasia" quando usadas como heading podem ficar avacalhadas no Firefox e Safari. Comos os elementos `<h1>`, `<h2>` etc. possuem um estilo implícito de `font-weight: bold`, quando a fonte só tem um peso, esses browsers adicionam uma espécie de stroke ao redor das letras, para criar um efeito de negrito. Fica horrível. Então para essas fontes é importante usar um `h1 { font-weight: normal; }`.

# Cursos / aulas que já fiz:

* curso Jen
* curso Brian Holt
* livro CSS in 44 minutes
* livro CSS in Depth

# Descobertas

Unidade `ch`?

`ch` ou `rem`?

# Random, classificar

## Melhor maneira de achar o elemento que está causando overflow horizontal

```css
* { outline: 1px solid #0086ff77;}
```

## Atenção com position: sticky

Às vezes, um overflow horizontal pode estar causando um comportamento estranho no position: sticky!


# Coisas legais

/--------------------------------------\
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
\--------------------------------------/

### Grid gotchas

Supondo um conjunto de grids posicionados num container com `display: grid`, se vc usar `justify-content` no container, os divs aparentemente terão que ter um `width` declarado explicitamente, caso contrário ficarão com `width` zero.

### Full-bleed

1. https://css-tricks.com/full-bleed/

Que vem daqui, na verdade: https://css-tricks.com/full-width-containers-limited-width-parents/

```css
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

https://codepen.io/chriscoyier/pen/xOjaYA

> That works as long as the column is centered and you don’t mind having to hide overflow-x on the column (or the body) as this can trigger horizontal overflow otherwise.



2. https://joshwcomeau.com/css/full-bleed/

Solução bem interessante.

HTML
```html
<main class="wrapper">
  <h1>Some Heading</h1>
  <p>Some content and stuff</p>
  <img class="full-bleed" alt="cute meerkat" src="/meerkat.jpg" />
</main>
```

CSS
```css
.wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
``` 

> The fr unit is a flexible unit that fills available space. It's similar in principle to flex-grow; it's a ratio of how much of the free space the column should consume.

> ch is a unit, like px or rem. It corresponds to the width of the 0 character in the current font, for the specified font size. Instead of reverse-engineering a pixel width, we're specifying a width in characters.

### Make a div perfectly rounded and center a single character within it

In order to achieve a perfectly round shape you'll need to have perfect square to begin with. So, for instance, your button will need to have dimensions like width: 32px; height: 32px . To turn a square into a circle you'll have to apply a border radius of 50% e.g. border-radius: 50% 

### Centraliza 

Uma maneira interessante também é usar

```css

.center {
    position: alguma_coisa;
    left: 50%; /*ou*/
    margin-left: 50%;
    transform: translateX(-50%);
}
```
O que acontece aqui é que isso faz com que o box fique (1) alinhado à metade do container (o 50% da margem é em relação ao container), e (2) volte metade da sua própria largura para a esquerda (porque o -50% do translate é em relação à própria dimensão!).

Amelia explica super bem aqui:





### Centraliza texto dentro de um elemento

Setting the line-height to the height of the container should do it.
https://stackoverflow.com/questions/20167074/how-to-center-a-single-character-both-vertically-and-horizontally-in-a-square-di


```css
.center1 {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
}

/* ou */

.center2 {
   width: 0;
   height: 0
   display: flex;
   justify-content: center;
   align-items: center;
}
```

### Centralizar verticalmente um texto dentro de um `<p>`

Usar um mesmo `line-height` que o `height` do elemento.

```css
p {
    height: 30px;
    line-height: 30px;
}
```

Ou, usando d3, se quero centralizar um texto de rótulo em relação a uma barra, por exemplo. Se o texto passa de uma linha...
https://codepen.io/tiagombp/pen/oNgLKRw

### centralizar um elemento `inline` ou `inline-block`

The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.

### centralizar com grid e place-conten: center;
  
```css
.smol-centering {
  display: grid;
  place-content: center;
}
```

### pseudo-class :target
  
https://smolcss.dev/#smol-aspect-ratio-gallery
  
```css
[id]:target:before {
    color: var(--color-on-blue);
    content: "Aww, you came to see me!";
    font-size: .9rem;
    font-style: italic;
    position: absolute;
    top: -1.5rem;
}
```


### pseudo-elements `::before` e `::after`

https://codersblock.com/blog/diving-into-the-before-and-after-pseudo-elements/

`content` é obrigatório.



Concatenar várias coisas com `content`. Usando valores de atributos nas regras do css com `attr(...)`. 


```html
<div data-lives="3"></div>
```

```css
div::before {
  content: url(mario.gif) ' × ' attr(data-lives);
}
```

## "Regras"

`width`e `height` não funcionam com elementos `inline`.

### Single direction margin declarations

https://csswizardry.com/2012/06/single-direction-margin-declarations/

## other CSS Tricks articles

https://css-tricks.com/when-do-you-use-inline-block/
https://css-tricks.com/what-you-should-know-about-collapsing-margins/


