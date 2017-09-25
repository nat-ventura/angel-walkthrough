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
// IT EXISTS ON ALL CLASS-BASED COMPONENTS.
//      Each instance of a class-based component has its own copy of state.
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
// FUNCTIONAL COMPONENTS DONT HAVE STATE-- ONLY CLASSED COMPONENTS
//      constructor is first/only function called automatically whenever
//      an instance of a class is created
    constructor(props) {
        // component has its own constructor function
        // when we define a method that is already defined on the parent class (Component)
        //      we can call that parent's method by calling super!!!!
        super(props);

        this.state = { searchTerm: '' };
        // we initialize state by creating a new object
        //      and assigning that object to this.state
        // the object we pass will also contain properties that we want to record ON THE STATE
        // here, we want to record the property 'searchTerm' on state
        // WHENEVER THE USER UPDATES THE SEARCH INPUT,
        //      SEARCHTERM is the property where we want to record the user's change
        // ONLY INSIDE OF CONSTRUCTOR METHOD DO WE CHANGE STATE LIKE THIS.
        // OTHERWISE, WE USE THIS.SETSTATE-- passing the object with the NEW STATE

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

        // whenever we update the input element, whenever we change its value--
        // then our arrow function runs, because it's our event handler
        // we set the this.state.searchTerm with the new value of the input
        
        // *** whenever we update our state, call this.setState ***
        //      it causes our component to automatically re-render
        //      and push all updated info from render method into the DOM
        // Because our render method makes reference to this.state.searchTerm
        //      every time that the component re-renders, we get the
        //      updated this.state.searchTerm in the DOM

        // CONTROLLED FIELD
        // is a form element (like an input) whose value is set by the state, rather than the other way around
        // right now, whenever our input changes, it causes the state to be updated.
        // our input tells the state what it SHOULD be.
        // BUT in an ideal world-- the STATE should tell the INPUT what the current value should be.
        // let's update our text input to get its value from the state
        // and learn what it's consequences are



        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.setState({ searchTerm: event.target.value})} />
            </div>
        );
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