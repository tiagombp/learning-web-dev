A transition describes how a property should display change when given a different value. You need two ingredients to make a transition: property & duration. They looks like this:

`transition: color 2s;`

Or in long form:

```css
transition-property: color;
transition-duration: 2s;
```

Anatomy of a transition

`transition-property` the property you want to transition. Only some properties are transitionable.
transition-duration in seconds or milliseconds: 4s or 4000ms
transition-timing-function “cushioning" for the transition, optional: defaults to ease
transition-delay the number of milli/seconds to delay the transition before firing it, optional
The delay is always the second time measurement:

transition: color 2s 100ms;
Here 100ms is the delay.