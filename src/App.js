import React, { useState } from 'react';

import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {

    const [enteredUsers,setEnteredUsers] = useState([
        //{
        //    id: Math.random(),
        //    name: "Michael",
        //    age: 22,
        //}
    ]);

    const addUserHandler = (props) => {
        setEnteredUsers((prevUsersList) => {
            return [
                props,
                ...enteredUsers
            ];
        });
    };

    return (
    <div>
            <AddUser addUser={addUserHandler}/>
            <UsersList users={enteredUsers} />
    </div>
    );
}

export default App;
