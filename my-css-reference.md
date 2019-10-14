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