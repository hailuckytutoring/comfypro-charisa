import React from 'react'

function Button({changeReadyState}) {
    return (
        <button onClick={changeReadyState}>
            ChangeReadyness
        </button>
    )
}

export default Button
