import React from 'react';
import { Form, Input, TextArea, Button, Header } from 'semantic-ui-react';

const QuestionPost = () => {
  return (
    <Form>
      <Header as='h4' dividing>What do you want to ask or share</Header>
      <Form.Field>
        <label>Title</label>
        <Input placeholder='Start your question with how, what, why, etc.' />
      </Form.Field>
      <Form.Field>
        <label>Describe your problem</label>
        <TextArea placeholder='Describe your problem' />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <Input placeholder='Please add up to 3 tags to describe what your question is about e.g., Java' />
      </Form.Field>
      <Button color='grey'>Post</Button>
    </Form>
  );
};

export default QuestionPost;
