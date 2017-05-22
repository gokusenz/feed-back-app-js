import React from 'react'
import { Link } from 'react-router'
import './App.scss'
import ReportItem from './Reporttem'

const Report = ({ name, reportList }) => (
  <div className="App">
    <div className="App-List col-xs-12">
      <h3>{name}</h3>
      <br />
      <div className="col-md-offset-3 col-md-6 col-xs-12 ">
        {
          reportList.map(doc => (
            <ReportItem key={doc.id} item={doc} />
          ))
        }
      </div>
    </div>
    <Link to={`/${name}`} className="btn btn-default btn-list">Back</Link>
  </div>
)

export default Report
