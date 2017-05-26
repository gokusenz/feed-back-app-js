import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea'

const MainForm = ({ handleSubmit, handleChange, name, topic }) => (
  <form className="form-horizontal col-md-9 col-md-offset-1 col-xs-12" onSubmit={handleSubmit}>
    <InputText name="topic" type="hidden" defaultValue={topic} />
    <div className="form-group">
      <label htmlFor="topic" className="col-md-3 col-sm-2 control-label"></label>
      <div className="col-md-8 col-sm-10" >
        <h3>หัวข้อ : { topic }</h3>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="level" className="col-md-3 col-sm-10 control-label">ระดับความพึงพอใจ</label>
      <label htmlFor="level" className="radio-inline col-md-2 col-xs-12">
        <input type="radio" name="level" id="inlineRadio1" value="ควรปรับปรุง" /> ควรปรับปรุง
      </label>
      <label htmlFor="level" className="radio-inline col-md-2 col-xs-12">
        <input type="radio" name="level" id="inlineRadio2" value="ดี" /> ดี
      </label>
      <label htmlFor="level" className="radio-inline col-md-2 col-xs-12">
        <input type="radio" name="level" id="inlineRadio3" value="ดีมาก" /> ดีมาก
      </label>
    </div>
    <div className="form-group">
      <label htmlFor="feedback" className="col-md-3 col-sm-2 control-label">ข้อเสนอแนะ</label>
      <div className="col-md-8 col-sm-10" >
        <TextArea name="feedback" row="5" handleChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-success">Save</button>
        <a href={`/files/${name}.pdf`} className="btn btn-info btn-list hidden">Download Slide</a>
      </div>
    </div>
  </form>
)

export default MainForm
