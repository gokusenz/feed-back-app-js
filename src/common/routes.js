import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import PageNotFound from './components/PageNotFound'
import MainApp from './components/MainApp'

const routes = (store, history) => (
  <Router
    history={syncHistoryWithStore(history, store)}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    <Route path="/">
      <IndexRedirect to="/404" />
      <Route path="workshop/js-async-await" component={() => <MainApp name="js-async-await" topic="How to use Async/await (ES2017)" />} />
      <Route path="404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
)

export default routes
