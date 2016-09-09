import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { emailInput, passwordInput, firstNameInput, lastNameInput } from './form_inputs/index.jsx';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser, setFlashMessage } from '../actions/index';

class RegisterForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  evaluateMessage(message) {
    if (message[0] === "[") {
      return eval(message)
    } else {
      return message
    }
  }

  onSubmit(props) {
    this.props.registerUser(props).then(function(response) {
      if (response.error) {
        let message = this.evaluateMessage(response.payload.response.data.message)
        this.props.setFlashMessage(message, "danger")
      } else {
        debugger
        console.log(window.localStorage)
        console.log(response)
      }
    }.bind(this))
  }

  render() {
    return (
      <div className="full-page">
        <div className="content">
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <h3> Register User </h3>
            <Field name="email" component={emailInput} />
            <Field name="password" component={passwordInput} />
            <Field name="first_name" component={firstNameInput} />
            <Field name="last_name" component={lastNameInput} />
            <div className="form-group">
              <button type="submit" className="btn btn-primary"> Register </button>
              <Link to="/" className="btn btn-success">Home</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/

  if (!values.email) {
    errors.email = "Add an email"
  }

  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "Email format invalid"
  }

  if (!values.password) {
    errors.password = "Add a password"
  }

  if (values.password && values.password.length < 8) {
    errors.password = "Password needs to be at least 8 characters"
  }

  if (!values.first_name) {
    errors.first_name = "Add a first name"
  }

  if (!values.last_name) {
    errors.last_name = "Add a last name"
  }

  return errors;
}


const RegisterUserReduxForm = reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm);

export default connect(null, { registerUser, setFlashMessage })(RegisterUserReduxForm)
