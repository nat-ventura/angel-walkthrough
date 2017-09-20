// Go find the library called react in my dependencies, and
// assign it to the variable called 'react'
import React from 'react';
// The core React library knows how to work with React components.
// but the module to render them is in React-DOM.
// To render to the DOM, we don't use React, we use React-dom.
import ReactDOM from 'react-dom';

// What is React?

// React is a JS library used to produce HTML shown to a user in a browser.
// When we write React code, we're writing individual React components, or views.
// Components are individuals snippets of code that PRODUCE HTML.

// We nest these components by placing one inside the other to make complex applications more simple.
// When we write in React, we're writing JS but it will ultimately produce HTML.

// 1.
// Create a new component that will produce some HTML
const App = () => {
    return <div>myellow</div>;
}

// 2.
// Take this component's generated HTML and put it in the DOM
ReactDOM.render(App);