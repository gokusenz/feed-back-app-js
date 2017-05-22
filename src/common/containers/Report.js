import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReportComponent from '../components/Report'
import { getReport } from '../actions/Report'

export class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reportList: [],
    }
  }

  componentDidMount() {
    this.props.onGetReport(this.props.params.name)
  }

  render() {
    return (
      <ReportComponent
        name={this.props.params.name}
        reportList={this.props.report}
      />
    )
  }
}

const mapStateToProps = state => ({
  report: state.report,
})

export default connect(
  mapStateToProps,
  {
    onGetReport: getReport,
  }
)(Report)
