import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

const PostTypeSelector = ({ postType, onPostTypeChange }) => {
  return (
    <Form.Group inline>
      <label style={{fontWeight: 'bold', fontSize: 14, paddingLeft: 10}}>Select Post Type: </label>
      <Form.Field style={{fontWeight: 'bold'}}>
        <Radio
          label="Question"
          name="postType"
          value="question"
          checked={postType === 'question'}
          onChange={onPostTypeChange}
        />
      </Form.Field>
      <Form.Field style={{fontWeight: 'bold'}}>
        <Radio
          label="Article"
          name="postType"
          value="article"
          checked={postType === 'article'}
          onChange={onPostTypeChange}
        />
      </Form.Field>
    </Form.Group>
  );
};

export default PostTypeSelector;
