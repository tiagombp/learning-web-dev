## Snippets interessantes

```css
nav {
  background: url(../img/scallop.png) repeat-x;
}

whatever {
    width: 100%; /* faz ele ocupar todo o container */
}
```

```html
	<picture>
		<source srcset="img/peace-pie-original.jpg" media="(min-width: 1200px)">
		<source srcset="img/peace-pie-500.jpg" media="(min-width: 800px)">
		<img src="img/peace-pie-150.jpg" alt="The original giant peace pie"> <!-- a fallback in case the browser 
																				  is no compatible with the figure tag -->
	</picture>
```

Normally we don't use `height:`, because the *content* defines the height. But when you have no content (say, in a `div` that you want to set a background to), you have to set `height` so the element actually is shown. And then use a `height` compatible with the image you are setting as background.

When using media queries, Chrome only downloads the corresponding image to that resolution (I checked on developer tools), using `<picture>` and also using css media queries to set background images to `<div>`s.

Interessante fixar um `max-width:` para o wrapper, para dar aquela aparência de uma região delimitada flutuando sobre um background.

The `min-width` should whenever possible be used to the wrapper.

## Other stuff

Picturefill for older browser compatibility:
http://scottjehl.github.io/picturefill/

Media Query & Asset Downloading Results
https://timkadlec.com/2012/04/media-query-asset-downloading-results/

## Flexbox Properties

### Parent (Flex Container)

	display: flex | inline-flex;

	flex-direction: row | row-reverse | column | column-reverse;

	flex-wrap: wrap | nowrap | wrap-reverse;

	flex-flow (shorthand for flex-direction and flex-wrap)

	justify-content (main axis): flex-start | flex-end | center | space-between | space-around | space-evenly;

	align-items (cross axis - adjust to individual sizes): flex-start | flex-end | center | baseline | stretch;

	align-content (cross axis - adjust to largest item): flex-start | flex-end | center | stretch | space-between | space-around;


### Children (Flex Items)

	order: <integer>;

	flex-grow: <number>; 

	flex-shrink: <number>; 

	flex-basis: <length> | auto;

	flex: shorthand for grow, shrink, and basis (default:  0 1 auto)
	
	align-self: overrides alignment set on parent