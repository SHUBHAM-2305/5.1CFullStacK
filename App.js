import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import PostTypeSelector from './PostTypeSelector';
import FormFieldGroup from './FormFieldGroup';
import TagInput from './TagInput';
import SubmitButton from './SubmitButton';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  //State Variable Initialization
  const [postType, setPostType] = useState('question');//postType is the state variable and setPostType is a setter function and is initially set to question
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');
  
  //handles the change event for postType
  //event object tells us about which action triggered the function, type of action and additional information
  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h3>Create New Post</h3>

      
      <Form onSubmit={handleSubmit}>
        <PostTypeSelector postType={postType} onPostTypeChange={handlePostTypeChange} />

        {postType === 'question' ? (
          <>
            <FormFieldGroup
            
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Title</span>}
              placeholder="Start your question with how, what, why, etc."
              value={title}
              onChange={(e) => setTitle(e.target.value)}//e.target.value is used to get the value of the input field
              
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Description</span>}
              placeholder="Describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              textarea
              
            />
          </>
        ) : (
          <>
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Title</span>}
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Abstract</span>}
              placeholder="Enter abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              textarea
              
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Article text</span>}
              placeholder="Enter the article text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              textarea
             
            />
          </>
        )}

        <TagInput tags={tags} onChange={(e) => setTags(e.target.value)} />

        <SubmitButton />
      </Form>
    </div>
  );
}

export default App;
