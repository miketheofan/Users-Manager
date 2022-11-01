import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [inError, setInError] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setInError(
                {
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty-values).'
                }
            );
            return;
        } 

        if (+enteredAge < 1) {
            setInError(
                {
                    title: 'Invalid age',
                    message: 'Please enter a valid age (> 0).'
                }
            );
            return;
        }

        const newUser = {
            id: Math.random(),
            name: enteredUsername ,
            age: enteredAge
        };
        props.addUser(newUser)

        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const onError = () => {
        setInError(null);
    }

    return (
        <div>
            {inError && <ErrorModal title={inError.title} message={inError.message} errorHandler={onError}/>}
            <Card className={classes.input}>
                <div>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={enteredUsername}
                            onChange={usernameChangeHandler} />
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="username"
                            type="number"
                            value={enteredAge}
                            onChange={ageChangeHandler} />
                        <Button type="submit">Add User</Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AddUser;