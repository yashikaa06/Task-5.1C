import React, { useState } from 'react';
import { Container, Segment, Form, Radio, Header, Divider } from 'semantic-ui-react';
import QuestionPost from './QuestionPost';
import ArticlePost from './ArticlePost';

const App = () => {
  const [postType, setPostType] = useState('article'); 

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Segment>
        <Header as='h2'>New Post</Header>
        <Form>
          <Form.Field>
            <label>Select Post Type:</label>
            <Radio
              label='Question'
              name='postType'
              value='question'
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <Radio
              label='Article'
              name='postType'
              value='article'
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
              style={{ marginLeft: '20px' }}
            />
          </Form.Field>
        </Form>

        <Divider horizontal>What do you want to ask or share</Divider>

        {postType === 'question' && <QuestionPost />}
        {postType === 'article' && <ArticlePost />}
      </Segment>
    </Container>
  );
};

export default App;
