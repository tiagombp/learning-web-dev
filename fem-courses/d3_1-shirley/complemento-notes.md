## Transitions

d3.interpolation
GreenSock

```js
var t = d3.transition() // <- defines transition, syncs animation everywhere it's used
  .duration(1000);
var svg = d3.select('svg');
   
var bars = svg.selectAll('rect')
  .data(data, d => d);

// exit
bars.exit().transition(t) // <- pass in the transition already defined ("t") anytime you call .transition
  .attr('y', height)      // <- attributes changed after .transition make the state B to where you
  .attr('height', 0)      //    are transitioning
  .remove();

// enter
var enter = bars.enter().append('rect')
  .attr('width', rectWidth)
  .attr('stroke', '#fff')
  .attr('y', height);  // <- attributes set before the .transition, that get changed after .transition:
// enter + update      //    that's the state A from where you are transitioning
bars = enter.merge(bars)
  .attr('x', (d, i) => i * rectWidth)
  .attr('fill', d => colors(d))
  .transition(t) // <- pass in the transition already defined ("t") anytime you call .transition
  .attr('y', d => height - d) // <- everything after .transition make the state B to where you
  .attr('height', d => d);    //    are transitioning
```

Maybe the *exit* selection should come after the *enter* selection? Would people understand it more easily?

Shirley's examples:
http://sxywu.com/obamas/
http://sxywu.com/80k/
