import React from 'react'
import MainForm from '../containers/MainForm'
import './App.scss'

const MainApp = ({ name, topic }) => (
  <div className="App">
    <div className="App-header">
      <h3>Get Feedback v1.0.0</h3>
      <img src="/images/logo.png" className="App-logo" alt="logo" />
    </div>
    <MainForm name={name} topic={topic} />
  </div>
)

export default MainApp
