import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // 入力されるfieldの値が引数に渡ってくる（{input: {…}, meta: {…}, label: "Title", type: "text"}）こんな形で
  renderField(field) {
    // console.log(field)
    const { input, label, type, meta: { touched, error } } = field
    // console.log('input:', input)
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  // valuesにフォームに入力した値が{title: "...", body: "..."}の形で渡ってくる
  async onSubmit(values) {
    // console.log(values)
    // postEvent
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    // console.log('handleSubmit:', this.props)
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/" >Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)