import React from 'react';
import { Form } from 'semantic-ui-react';

const TagInput = ({ tags, onChange }) => {
  return (
    <Form.Field>
      <label style={{fontWeight: 'bold', fontSize: 16}}>Tags</label>
      <input
        type="text"
        placeholder="Add up to 3 tags"
        value={tags}
        onChange={onChange}
      />
    </Form.Field>
  );
};

export default TagInput;
