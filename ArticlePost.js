import React from 'react';
import { Form, Input, TextArea, Button, Header } from 'semantic-ui-react';

const ArticlePost = () => {
  return (
    <Form>
      <Header as='h4' dividing>What do you want to ask or share</Header>
      <Form.Field>
        <label>Title</label>
        <Input placeholder='Enter a descriptive title' />
      </Form.Field>
      <Form.Field>
        <label>Abstract</label>
        <TextArea placeholder='Enter a 1-paragraph abstract' />
      </Form.Field>
      <Form.Field>
        <label>Article Text</label>
        <TextArea placeholder='Enter the article content here' />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <Input placeholder='Please add up to 3 tags to describe your article' />
      </Form.Field>
      <Button color='grey'>Post</Button>
    </Form>
  );
};

export default ArticlePost;
