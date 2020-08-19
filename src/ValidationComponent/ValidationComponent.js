import React from 'react';

const Validation = (props) => {
    return (
        <div className="Validation">

            <p>{props.len}</p>
            <p>{props.isValid}</p>

        </div >
    );
};

export default Validation;
