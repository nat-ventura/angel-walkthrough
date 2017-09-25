// The curly braces just mean
// Import React and pull off the property component as a variable called Component
import React, { Component } from 'react';

// Before, this was a functional component "dumb component" that could be called
// And then would return some plain JSX
// No awareness of surroundings or state
// But we want this component to talk to other components
// So we promoted it to a class-based component

// Steph recommends starting off with a functional component
// Only when you need added functionality, then refactor with a class

// Now when the user types something, we want to know that they're typing something
// We need an eventHandler, where we pass the element we want to monitor for events


// STATE!!!!! is a plain javascript object that is used to record
// and REACT to user events.
// Each class-based component that we defined has its own state object.
// Whenever a component's state IS CHANGED, the component immediately re-renders
// And forces all of its children to re-render too.

// If SearchBar had some state, and that state changed, then
// The render function would re-run.

// Before using state in a component, we need to initialize the
// STATE object by setting the property to a plain js object inside
// the class's constructor method!!!!!!!


class SearchBar extends Component {
// this is how we initialize state in a class-based component
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    // Every class must have a render method
    // That returns JSX in the render method
    render() {
        // All HTML input elements emit a change event
        // to tap into a vanilla browser even like that
        // we just type on""={this.eventHanderName}
        // Whenever we use javascript variables in JSX--
        //      we wrap the variables in curly braces
        // the event handler will be triggered whenever the event occurs!!!!

        // Creates a new imput element, and passes a PROP
        // onChange with a value of {this.onInputChange}
        return <input onChange={(event) => console.log(event.target.value)} />;
    }

    // whenever we add an eventHandler, it needs to
    // be passed an event object
    // onInputChange(event) {
        // target is specifically a reference to the input
        // event is an object
    //     console.log(event.target.value);
    // }
}

export default SearchBar;