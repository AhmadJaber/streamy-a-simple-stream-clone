import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  onSubmit(formValues) {
    console.log(formValues);
  }

  // eslint-disable-next-line class-methods-use-this
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return <div />;
  }

  // eslint-disable-next-line class-methods-use-this
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />

        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    error.title = 'You must enter a title!';
  }
  if (!formValues.description) {
    error.description = 'You must enter description!';
  }

  return error;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
