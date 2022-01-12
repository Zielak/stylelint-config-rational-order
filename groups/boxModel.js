const borderProps = require('./border');

const partOne = [
  'display',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'grid',
  'grid-area',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-row-gap',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-column-gap',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'gap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'order',
  'float',
  'clear',
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'margin-block',
  'margin-inline',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'padding-block',
  'padding-inline',
];

const partTwo = [
  'object-fit',
  'object-position',
  'overflow',
  'overflow-x',
  'overflow-y',
];

module.exports = ({ border }) =>
  [].concat(partOne, border ? borderProps : [], partTwo);
