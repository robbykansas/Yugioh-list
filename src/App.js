import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Detail from './pages/Detail'

function App () {
  return (
    <Switch>
      <Route path='/Detail/:id'>
        <Detail />
      </Route>
      <Route path='/'>
        <MainPage />
      </Route>
    </Switch>
  )

}

export default App;
