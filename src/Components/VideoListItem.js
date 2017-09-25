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

// things are a little jank right now, because at first
// I didn't want to do a search bar, but now I do...

class VideoListItem extends Component {
    // Every class must have a render method
    // That returns JSX in the render method
    render() {
        // All HTML input elements emit a change event
        // to tap into a vanilla browser even like that
        // we just type on""={this.eventHanderName}
        // Whenever we use javascript variables in JSX--
        //      we wrap the variables in curly braces
        
        // Creates a new imput element, and passes a PROP
        // onChange with a value of {this.onInputChange}
        return <input onChange={this.onInputChange} />;
    }

    // whenever we add an eventHandler, it needs to
    // be passed an event object
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default VideoListItem;