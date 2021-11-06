import React from "react";
import classNames from "classnames";
const Alert = ({type, content}) => {
    return (
        <div className={ classNames({
            'alert': true, 
            'success': type === 'success',
            'error': type === 'error'
            })}>
            <h2>{content}</h2>
        </div>
    )
}

export default Alert;