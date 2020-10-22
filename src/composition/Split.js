import React from 'react';
import './Split.css';

function split(props) {
    const combinedClassName= `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div 
        className={combinedClassName}
        style={newStyles}
        >
            {props.children}
        </div>
    );
}

export default split;