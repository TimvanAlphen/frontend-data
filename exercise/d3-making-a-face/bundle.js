(function (d3) {
  'use strict';

  const svg = d3.select('svg');
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
      .attr('height', eyebrowHeight);


  const mouth = g
    .append('path')
      .attr('d', d3.arc()({
        innerRadius: 0,
        outerRadius: 60,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }));

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2VsZWN0LCBhcmMgfSBmcm9tICdkMyc7XG5cbmNvbnN0IHN2ZyA9IHNlbGVjdCgnc3ZnJyk7XG5jb25zdCB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCAke2hlaWdodCAvIDJ9KWApO1xuXG5jb25zb2xlLmxvZyh0eXBlb2Ygd2lkdGgpO1xuXG5jb25zdCBjaXJjbGUgPSBnLmFwcGVuZCgnY2lyY2xlJylcbiAgLmF0dHIoJ3InLCBoZWlnaHQgLyAyKVxuICAuYXR0cignZmlsbCcsICd5ZWxsb3cnKVxuICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDUpO1xuXG5jb25zdCBleWVTcGFjaW5nID0gNTA7XG5jb25zdCBleWVZT2Zmc2V0ID0gLTUwO1xuY29uc3QgZXllUmFkaXVzID0gMjA7XG5jb25zdCBleWVicm93V2lkdGggPSA2MDtcbmNvbnN0IGV5ZWJyb3dIZWlnaHQgPSAxNTtcbmNvbnN0IGV5ZWJyb3dZT2Zmc2V0ID0gLTQwO1xuXG5jb25zdCBleWVzRyA9IGdcbiAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtleWVZT2Zmc2V0fSlgKTtcblxuY29uc3QgbGVmdEV5ZSA9IGV5ZXNHXG4gIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgLmF0dHIoJ3InLCBleWVSYWRpdXMpXG4gICAgLmF0dHIoJ2N4JywgZXllU3BhY2luZyk7XG5cbmNvbnN0IHJpZ2h0RXllID0gZXllc0dcbiAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuYXR0cigncicsIGV5ZVJhZGl1cylcbiAgICAuYXR0cignY3gnLCAtIGV5ZVNwYWNpbmcpO1xuXG5jb25zdCBleWVicm93c0cgPSBleWVzR1xuICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2V5ZWJyb3dZT2Zmc2V0fSlgKTtcblxuZXllYnJvd3NHXG4gIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMjAwMClcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2V5ZWJyb3dZT2Zmc2V0IC0gNTB9KWApICAgIFxuICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMDApXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtleWVicm93WU9mZnNldH0pYCk7XG5cbmNvbnN0IGxlZnRFeWVicm93ID0gZXllYnJvd3NHXG4gIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCd4JywgLWV5ZVNwYWNpbmcgLSBleWVicm93V2lkdGggLyAyKVxuICAgIC5hdHRyKCd3aWR0aCcsIGV5ZWJyb3dXaWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgZXllYnJvd0hlaWdodCk7XG5cbmNvbnN0IHJpZ2h0RXllYnJvdyA9IGV5ZWJyb3dzR1xuICAuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cigneCcsICtleWVTcGFjaW5nIC0gZXllYnJvd1dpZHRoIC8gMilcbiAgICAuYXR0cignd2lkdGgnLCBleWVicm93V2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGV5ZWJyb3dIZWlnaHQpXG5cblxuY29uc3QgbW91dGggPSBnXG4gIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgYXJjKCkoe1xuICAgICAgaW5uZXJSYWRpdXM6IDAsXG4gICAgICBvdXRlclJhZGl1czogNjAsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJIC8gMixcbiAgICAgIGVuZEFuZ2xlOiBNYXRoLlBJICogMyAvIDJcbiAgfSkpO1xuIl0sIm5hbWVzIjpbInNlbGVjdCIsImFyYyJdLCJt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