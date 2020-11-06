## Ref

https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
https://css-tricks.com/a-complete-guide-to-data-attributes/


## Custom Data Attributes

By adding `data-*` attributes, even ordinary HTML elements can become rather complex and powerful program-objects. For example, a space-ship "sprite" in a game could be a simple `<img>` element with a `class` attribute and several `data-*` attributes:

```html
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
```

It can be awfully handy to be able to make up your own HTML attributes and put your own information inside them. Fortunately, you can! That’s exactly what data attributes are.

An HTML `data-*` attribute and its corresponding DOM `dataset.property` modify their shared name according to where they are read or written:

In HTML

The attribute name begins with `data-`. It can contain only letters, numbers, dashes (`-`), periods (`.`), colons (`:`), and underscores (`_`). Any ASCII capital letters (`A` to `Z`) are ignored and converted to lowercase.

In JavaScript

The property name of a custom data attribute is the same as the HTML attribute without the `data-` prefix, and removes single dashes (`-`) for when to capitalize the property’s “camelCased” name.

For example, a `data-abc-def` attribute corresponds to `dataset.abcDef`.


### Name restrictions

* the name must not start with `xml`, whatever case is used for these letters;
* the name must not contain any semicolon (`U+003A`);
* the name must not contain capital letters.


### Styling

CSS can select HTML elements based on attributes and their values.

```css
/* Select any element with this data attribute and value */
[data-size="large"] {
  padding: 2rem;
  font-size: 125%;
}

/* You can scope it to an element or class or anything else */
button[data-type="download"] { }
.card[data-pad="extra"] { }
```

This can be compelling. The predominant styling hooks in HTML/CSS are classes, and while classes are great (they have medium specificity and nice JavaScript methods via classList) an element either has it or it doesn’t (essentially on or off). With `data-*` attributes, you get that on/off ability plus the ability to select based on the value it has at the same specificity level.

```css
/* Selects if the attribute is present at all */
[data-size] { }

/* Selects if the attribute has a particular value */
[data-state="open"],
[aria-expanded="true"] { }

/* "Starts with" selector, meaning this would match "3" or anything starting with 3, like "3.14" */
[data-version^="3"] { }

/* "Contains" meaning if the value has the string anywhere inside it */
[data-company*="google"] { }
```

### Accessing data attributes in JavaScript

Like any other attribute, you can access the value with the generic method getAttribute.

```js
let value = el.getAttribute("data-state");

// You can set the value as well.
// Returns data-state="collapsed"
el.setAttribute("data-state", "collapsed");
```

But data attributes have their own special API as well. Say you have an element with multiple data attributes (which is totally fine):

```html
<span 
  data-info="123" 
  data-index="2" 
  data-prefix="Dr. "
  data-emoji-icon="🏌️‍♀️"
></span>
```

If you have a reference to that element, you can set and get the attributes like:

```js
// Get
span.dataset.info; // 123
span.dataset.index; // 2

// Set
span.dataset.prefix = "Mr. ";
span.dataset.emojiIcon = "🎪";
```

This API is arguably not quite as nice as classList with the clear `add`, `remove`, `toggle`, and `replace` methods, but it’s better than nothing.

#### Accessing values

* Attributes can be set and read by the camelCase name/key as an object property of the dataset: `element.dataset.keyname`

* Attributes can also be set and read using bracket syntax: `element.dataset['keyname']`

* The `in` operator can check if a given attribute exists: `'keyname' in element.dataset`

#### Setting values

When the attribute is set, its value is always converted to a string. For example: `element.dataset.example = null` is converted into `data-example="null"`.

To remove an attribute, you can use the `delete` operator: `delete element.dataset.keyname`

