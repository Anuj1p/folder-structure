import React, { useState } from 'react'

const Input = (props) => {
    const { handleNameChange, handleEmailChange } = props;
    return (
        <div>
            <input type="text" onChange={handleNameChange} />
            <input type="email" onChange={handleEmailChange} />
        </div>
    )
}

export default Input
