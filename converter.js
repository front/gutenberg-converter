const Window = require('window');
const reactDom = require('react-dom');
const window = new Window();

// Setup global vars required by Gutenberg packages
global.window = window;
global.document = window.document;

window.matchMedia = query => ({
  matches: query !== '(min-width: 240px) and (max-width: 767px)',
  media: '',
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
});

global.navigator = window.navigator;
global['react-dom'] = reactDom;

const blocks = require('@wordpress/blocks');
const blockLibrary = require('@wordpress/block-library');

exports.parse = function (html) {
  blockLibrary.registerCoreBlocks();
  const result = blocks.rawHandler({HTML: html});
  const serializedResult = blocks.serialize(result);
  return serializedResult;
}

exports.parseToJSON = function(html) {
  blockLibrary.registerCoreBlocks();
  const result = blocks.rawHandler({HTML: html});
  return JSON.stringify(result);
}

