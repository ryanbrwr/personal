import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Home />
        </Route>
        <Route
          path="/about"
          exact
        >
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App