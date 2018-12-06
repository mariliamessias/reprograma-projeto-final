import React from 'react';
import './DrawerTogglerButton.css'

const DrawerTogglerButton = props =>(
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button__line"></div>
        <div className="toggle_button__line"></div>
        <div className="toggle_button__line"></div>
        <div className="toggle_button__line"></div>
    </button>
);

export default DrawerTogglerButton