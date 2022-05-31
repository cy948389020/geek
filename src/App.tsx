import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { customHistory } from '@/utils/history'

import './App.scss'
import Layout from './pages/Layout'
import Login from './pages/Login'

function App() {
  return (
    <Router history={customHistory}>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/home" />
            }}
          ></Route>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Layout} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
