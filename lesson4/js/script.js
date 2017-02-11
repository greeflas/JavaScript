/* DOM */

// DOM - Document Object Model
// BOM - Browser Object Model

/* Objects */
// window
// document
// location

// all page DOM elements
console.dir(document.documentElement);

// body DOM elements
console.dir(document.body);

// head DOM elements
console.dir(document.head);

/* Nodes */
var body = document.body;

// all child nodes in "body" element
console.log(body.childNodes);

// return first child of "body element"
console.log(body.firstChild);

// return last child of "body element"
console.log(body.lastChild);

// return only nodes with type "element"
console.log(body.children);

// check HTML element type
console.log('<section> is instance of HTMLElement: ');
console.log(body.children[0] instanceof HTMLElement);

/* Selectors */
// ID in HTMl == variable in JavaScript

// return one element
var byId = document.getElementById('message');
console.log(byId);

// return array of elements
var byTag = document.getElementsByTagName('p');
console.log(byTag);

// return array of elements
var byClass = document.getElementsByClassName('msg');
console.log(byClass);

// search only in document not in element
// return array of elements
var byName = document.getElementsByName('input');
console.log(byName);

// return all elements
var all = document.getElementsByTagName('*');
console.log(all);

// get elements by CSS selector
var bySelector = document.querySelector('section > div');
console.log(bySelector);

// check is equals CSS selector
console.log(byId.matches('#message'));

// return first parent with "body" selector
console.log(byId.closest('body'));