import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import PageNotFound from './components/PageNotFound'
import MainApp from './components/MainApp'
import ReportContainer from './containers/Report'

const routes = (store, history) => (
  <Router
    history={syncHistoryWithStore(history, store)}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    <Route path="/">
      <IndexRedirect to="/404" />
      <Route
        path="workshop/js-async-await" component={() =>
          <MainApp name="js-async-await" topic="How to use Async/await (ES2017)" />}
      />
      <Route
        path="workshop/js-jest-testing" component={() =>
          <MainApp name="js-jest-testing" topic="How to test with Jest(Testing Framework)" />}
      />
      <Route path="report/:name" component={ReportContainer} />
      <Route path="404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
)

export default routes
