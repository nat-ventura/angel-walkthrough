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

class VideoListItem extends Component {
    // Every class must have a render method
    // That returns JSX in the render method
    render() {
        return <input />;
    }
}

export default VideoListItem;