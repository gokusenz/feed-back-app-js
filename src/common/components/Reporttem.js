import React from 'react'

const ReportItem = (props) => {
  const {
    item,
  } = props
  return (
    <div className="text-left">
      <h4>{item.feedback}</h4>
      <br />
    </div>
  )
}

export default ReportItem
