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
        path="workshop/js-jest-testing-react-redux" component={() =>
          <MainApp name="js-jest-testing-react-redux" topic="How to test React/Redux with Jest" />}
      />
      <Route
        path="workshop/golang-for-beginner" component={() =>
          <MainApp name="golang-for-beginner" topic="Golang for Beginner" />}
      />
      <Route
        path="workshop/introduction-firebase" component={() =>
          <MainApp name="introduction-firebase" topic="Introduction Firebase" />}
      />

      <Route
        path="workshop/optimize-react-production" component={() =>
          <MainApp name="optimize-react-production" topic="Optimize react on production" />}
      />

      <Route
        path="workshop/feature-toggle-nodejs" component={() =>
          <MainApp name="feature-toggle-nodejs" topic="Feature Toggle NodeJS" />}
      />

      <Route
        path="workshop/build-service-api-graphql" component={() =>
          <MainApp
            name="build-service-api-graphql"
            topic="How to build Service API with GraphQL"
          />}
      />

      <Route
        path="workshop/simple-server-side-cache-nodejs" component={() =>
          <MainApp
            name="simple-server-side-cache-nodejs"
            topic="Simple server side cache for Express.js with Node.js"
          />}
      />

      <Route
        path="workshop/text-classification-machine-learning" component={() =>
          <MainApp
            name="text-classification-machine-learning"
            topic="Text Classification by Machine Learning"
          />}
      />

      <Route path="report/:name" component={ReportContainer} />
      <Route path="404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
)

export default routes
