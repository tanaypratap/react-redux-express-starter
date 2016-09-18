import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { store } from '../index'

const doSubmit = values => {
  console.log(values)
  store.dispatch({type: 'DATA_SUCCESS', payload: parseInt(values.startValue)})
}

class CounterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className="form-group">
          <Field name="startValue" component="input" autoComplete="off"
          type="text" className="form-control" placeholder="starter value" />
        </div>        
        <button type="submit" className="btn-lg btn-primary btn-block">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'CounterForm',  // a unique identifier for this form
  fields : ['startValue']
})(CounterForm)

