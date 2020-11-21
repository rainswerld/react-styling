import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import Nav from './components/shared/Nav'
import StylesheetDemo from './components/routes/StylesheetDemo'
import About from './components/routes/About'

const App = props => (
  <Fragment>
    <Route path='/' component={Nav} />
    <Route exact path='/' component={Home} />
    <Route exact path='/stylesheet' component={StylesheetDemo} />
    <Route exact path='/about' component={About} />
  </Fragment>
)

export default withRouter(App)
