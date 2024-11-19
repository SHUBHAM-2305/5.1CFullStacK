import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
//this component function allow the direct access to the prop values
const FormFieldGroup = ({ label, placeholder, value, onChange, textarea = false }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      {textarea ? (
        <TextArea placeholder={placeholder} value={value} onChange={onChange} />
      ) : (
        <input placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </Form.Field>
  );
};

export default FormFieldGroup;
