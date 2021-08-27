import React, { useReducer, createContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Footer from './components/Footer';
//Screens
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import AccountScreen from './screens/AccountScreen';

//Context
export const UserContext = createContext();

//Global state
const initialstate = { user: { name: '' } };
//reducer function for manipulating state
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: { name: action.name } };
    case 'LOGOUT':
      return { user: { name: '' } };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={HomeScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/account' component={AccountScreen} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
