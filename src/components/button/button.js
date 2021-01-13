import React from 'react';

import './style.scss'

const Button = ({title, onClick, disabled = false, className = ''}) => {
    return <button disabled={disabled} className={`button ${className}`} onClick={() => {
        if (!disabled) {
            onClick()
        }
    }}>
        {title}
    </button>
}

export default Button