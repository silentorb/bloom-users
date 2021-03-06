import * as React from 'react'
import {FormControl, FormGroup, Button, Panel} from 'react-bootstrap'
import {LoginUserFields} from "./types";

export interface LoginProps {
  onChange
  onSubmit
  userFields: LoginUserFields
}

export class Login extends React.PureComponent<LoginProps, any> {

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.userFields)
  }

  render() {
    const userFields = this.props.userFields

    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='text'
            name='username'
            value={userFields.username}
            placeholder='Username'
            onChange={this.props.onChange}
          />
          <FormControl
            type='password'
            name='password'
            value={userFields.password}
            placeholder='Password'
            onChange={this.props.onChange}
          />
          <FormControl
            type='password'
            name='twoFactor'
            value={userFields.twoFactor}
            placeholder='2FA Code'
            onChange={this.props.onChange}
          />
        </FormGroup>
        <div className='text-center'>
          <Button type='submit' className='float-right'>
            Submit
          </Button>
        </div>
      </form>
    )
  }
}
