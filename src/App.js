import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'

function App () {
  return (
    <Switch>
      <Route path='/Detail/:id'>
        <Detail />
      </Route>
      <Route path='/Favorites'>
        <Favorites />
      </Route>
      <Route path='/'>
        <MainPage />
      </Route>
    </Switch>
  )

}

export default App;
