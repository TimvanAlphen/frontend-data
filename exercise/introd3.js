console.log("Hello World")
console.log(d3)

import { select } from 'd3';

const svg = select('svg');

const circle = svg.append('circle');

circle.attr('r');