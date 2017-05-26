import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onChange } from '../actions/Field'
import MainFormComponent from '../components/MainForm';
import Database from '../libs/Database'

export class MainForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feedback: '',
    }
    this.database = new Database()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name | nextProps.feedback !== this.props.feedback) {
      this.setState({
        feedback: nextProps.feedback
      });
    }
  }

  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const result = this.database.saveData(
      this.props.name,
      e.target.topic.value,
      e.target.feedback.value,
      e.target.level.value,
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      e.target.topic.value = ''
      e.target.feedback.value = ''
    } else {
      alert('บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }

  handleChange = (event, fieldName) => {
    let state = {}
    state[fieldName] = event.target.value
    console.log(event.target.value)
    this.setState(state)
  }

  render() {
    const { name, topic } = this.props;
    return (
      <MainFormComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} name={name} topic={topic} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}


export default connect(
  mapStateToProps,
  { 
  }
)(MainForm)
