import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Builder from './Builder'
import MyNav from './components/MyNav'

const App = () => {

  return (
    <Router>
      <div>
      <MyNav></MyNav>
        <Switch>
          <Route exact path="/">
            <Builder />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
            <Builder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
