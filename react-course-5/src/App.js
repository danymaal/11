import { Fragment, useState } from 'react';
import './App.scss';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
        {/* This elements like fragments or wrapper in helpers help prevent div soup in DOM. And to have a clean HTML structure */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
