//Code by Curran tutorial https://www.youtube.com/watch?v=-RQWC4I2I1s&list=PL9yYRbwpkykvOXrZumtZWbuaXWHvjD8gi&index=4&ab_channel=CurranKelleher


import {select, arc } from 'd3';

const svg = select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');

const g = svg.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

console.log(typeof width);

const circle = g.append('circle')
  .attr('r', height / 2)
  .attr('fill', 'yellow')
  .attr('stroke', 'black')
  .attr('stroke-width', 5);

const eyeSpacing = 50;
const eyeYOffset = -50;
const eyeRadius = 20;
const eyebrowWidth = 60;
const eyebrowHeight = 15;
const eyebrowYOffset = -40;

const eyesG = g
  .append('g')
    .attr('transform', `translate(0, ${eyeYOffset})`);

const leftEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing);

const rightEye = eyesG
  .append('circle')
    .attr('r', eyeRadius)
    .attr('cx', - eyeSpacing);

const eyebrowsG = eyesG
  .append('g')
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

eyebrowsG
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)    
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

const leftEyebrow = eyebrowsG
  .append('rect')
    .attr('x', -eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight);

const rightEyebrow = eyebrowsG
  .append('rect')
    .attr('x', +eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)


const mouth = g
  .append('path')
    .attr('d', arc()({
      innerRadius: 0,
      outerRadius: 60,
      startAngle: Math.PI / 2,
      endAngle: Math.PI * 3 / 2
  }));
