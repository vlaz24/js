import React from 'react';

import Input from './Input';

function Form({ onSubmit }) {
    return (
        <form className="signup-form mdc-theme--dark" onSubmit={onSubmit}>
            <Input type="text" name="firstname" placeholder="Name"/>
            <Input type="text" name="lastname" placeholder="Surname"/>
            <Input type="email" name="email" placeholder="Email"/>
            <Input type="password" name="password" placeholder="Password"/>
            <button type="submit" className="mdc-button mdc-button--primary mdc -button--raised">Register</button>
        </form>
    );
}

export default Form;