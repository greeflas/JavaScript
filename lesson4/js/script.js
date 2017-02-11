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