import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  //Hooks  //nolocal states in thhis component
  //---state
  //-----global state
  const userContext = useContext(UserContext);

  const { state } = userContext;
  return (
    <header>
      <div>logo</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {!state.user.name && (
            <li>
              <Link to='/register'>Register</Link>
            </li>
          )}
          {state.user.name && (
            <li>
              <Link to='/account'>Account</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
