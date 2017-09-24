// Go find the library called react in my dependencies, and
// assign it to the variable called 'react'.
// This CREATES AND MANAGES COMPONENTS.
import React from 'react';

// The core React library knows how to work with React components.
// but the module to render them is in React-DOM.
// To render to the DOM, we don't use React, we use React-dom.
// This INTERACTS WITH THE ACTUAL DOM.
import ReactDOM from 'react-dom';

// imports VideoList Component from Components
// whenever we import from our own files, we have to specify a file reference
// (unlike React from 'react')
import VideoListItem from './Components/VideoListItem';

// What is React?
// React is a JS library used to produce HTML shown to a user in a browser.
// When we write React code, we're writing individual React components, or views.
// Components are individuals snippets of code that PRODUCE HTML.

// We nest these components by placing one inside the other to make complex applications more simple.
// When we write in React, we're writing JS but it will ultimately produce HTML.

// 1.
// Create a new component that will produce some HTML
// This here is a TYPE of component
// It's a CLASS NOT AN INSTANCE.
// We need to INSTANTIATE our components (make an instance)
// Before trying to render them to the DOM.
const App = () => {
    return (
    <VideoListItem />
);
}

// 2.
// Take this component's generated HTML and put it in the DOM
// Make sure to pass an instance and not a class--
// All we have to do to make an instance is wrap it in JSX TAGS
// We also need to specify an EXISTING DOM ELEMENT to render the element TO
ReactDOM.render(<App />, document.querySelector('#root'));