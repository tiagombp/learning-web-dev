# Cursos / aulas que já fiz:

* curso Jen
* curso Brian Holt
* livro CSS in 44 minutes

# Descobertas

Unidade `ch`?

`ch` ou `rem`?

# Random, classificar




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

### Full-bleed

Solução bem interessante.

https://joshwcomeau.com/css/full-bleed/

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

### Centralizar verticalmente um texto dentro de um <p>

Usar um mesmo `line-height` que o `height` do elemento.

```css
p {
    height: 30px;
    line-height: 30px;
}
```

Ou, usando d3, se quero centralizar um texto de rótulo em relação a uma barra, por exemplo. Se o texto passa de uma linha...
https://codepen.io/tiagombp/pen/oNgLKRw

