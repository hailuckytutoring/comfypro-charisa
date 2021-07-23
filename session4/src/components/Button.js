import React from 'react'

function Button({changeReadyState}) {
    return (
        <button className="btn" onClick={changeReadyState}>
            ChangeReadyness
        </button>
    )
}

export default Button
