# Cursos / aulas que já fiz:

* curso Jen
* curso Brian Holt
* livro CSS in 44 minutes

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

### Interesting selectors
https://dev.to/ibrahima92/6-powerful-css-selectors-that-will-really-help-you-write-clean-css-4bab

1. `div > a`
This selector will enable us to select all a element where the parent element is a div tag.

2. `div + a`
This one will select every a tags placed immediately after a div element. If we have an element between the div and the a tag, that element won't be selected.

3. `div ~ a`
This one will select every a tag preceded by a div element on the same level. In other words, if the a tag is not immediately preceded by a div element, but has a div tag as a sibling element, that element will be selected.

4. `[attribute^=value]`
e.g: `[class^="list-"]`
This selector will pick every element that contains a class attribute and its value begins with list-

5. `[attribute$=value]`
e.g: `[src$=".png"]`
This one will select every src attribute where its value ends with .png.

6. `[attribute*=value]`
e.g: `[class*="-list"]`
This selector will pick every element whose class attribute contains -list. It does not matter if -list is at the beginning, the middle or at the end of the class's value. The most important is that the value must contain -list.
