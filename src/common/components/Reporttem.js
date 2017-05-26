import React from 'react'

const ReportItem = (props) => {
  const {
    item,
  } = props
  return (
    <div className="text-left">
      <h4>ระดับความพึงพอใจ : {item.level}</h4>
      <h4>ข้อเสนอแนะ : {item.feedback}</h4>
      <br />
    </div>
  )
}

export default ReportItem
