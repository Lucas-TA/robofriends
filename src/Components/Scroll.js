import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '4px solid black', height: '60vh', marginTop: '20px' }}>
            {props.children}
        </div>
    )
};
export default Scroll;