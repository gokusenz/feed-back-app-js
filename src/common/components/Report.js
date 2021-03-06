import React from 'react'
import { Link } from 'react-router'
import './App.scss'
import ReportItem from './Reporttem'

const Report = ({ name, reportList }) => (
  <div className="App">
    <div className="App-header">
      <h2>Get Feedback v1.0.1</h2>
      <img src="/images/feedback-logo.png" className="App-logo" alt="logo" />
    </div>
    <div className="App-List col-xs-12">
      <h3>หัวข้อ : { name }</h3>
      <br />
      <div className="col-md-offset-3 col-md-6 col-xs-12 ">
        {
          reportList.map(doc => (
            <ReportItem key={doc.id} item={doc} />
          ))
        }
      </div>
    </div>
    <Link to={`/workshop/${name}`} className="btn btn-default btn-list">Back to form</Link>
  </div>
)

export default Report
