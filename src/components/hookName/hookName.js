import React, { useState } from 'react';

function HookName() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    const userInput = (event) => {
        /* The setName function doesn't merge the object but entirely updates it.
        That's why we have to use ...name to save the other fields of the object: */
        setName({ ...name, [event.target.name]: event.target.value });
    }

    const userSubmit = (event) => {
        event.preventDefault();
    }

    return (<React.Fragment>
    <form onSubmit = { userSubmit }>
        <input type = 'text' name = 'firstName' value = { name.firstName } onChange = { userInput }/>
        <input type = 'text' name = 'lastName' value = { name.lastName } onChange = { userInput }/>
    </form>
    <p>Your first name is: { name.firstName }</p>
    <p>Your last name is: { name.lastName }</p>
    </React.Fragment>);
}

export default HookName;
