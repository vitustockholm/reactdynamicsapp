import React, { useContext } from 'react';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

const AccountScreen = () => {
  // Hooks
  //---state
  //-----global
  const userContext = useContext(UserContext);
  const { dispatch } = userContext;

  //useHistory hook ROUTER
  let history = useHistory();

  // Custom Functions
  const clickHandler = () => {
    dispatch({ type: 'LOGOUT' });

    // redirect to home page
    history.push('/');
  };

  return (
    <>
      <h2>Account page</h2>
      <button onClick={clickHandler}>Logout</button>
    </>
  );
};

export default AccountScreen;
