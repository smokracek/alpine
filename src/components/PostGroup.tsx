import React from 'react';
import { useState } from 'react';
import { Button, VStack, Text, Input, Textarea } from '@chakra-ui/react';
import GATSBY_ENV from '../gatsby_environment';
import { v4 as uuidv4 } from 'uuid';

const PostMenu: React.FC<{}> = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [captionInput, setCaptionInput] = useState('');

  const handlePost = async () => {
    const username = usernameInput;
    const caption = captionInput;

    const reg = new RegExp('[^a-zA-Z0-9]');
    if (reg.test(username)) {
      alert(
        'Please use only alphanumeric (aA-zZ, 0-9) characters in your username!'
      );
      return;
    }

    if (username.length == 0) {
      alert('Be sure to enter a username!');
      return;
    }

    if (username.length > 50) {
      alert('Be sure to use a name less than 50 characters. Thanks!');
      return;
    }

    if (caption.length == 0) {
      alert('You gotta say something!');
      return;
    }

    if (caption.length > 250) {
      alert('Try making your post less than 250 characters. Thanks!');
      return;
    }

    const postId = uuidv4().toString();
    const date = Date.now();

    const post = {
      username: username,
      caption: caption,
      id: postId,
      date: date,
    };

    try {
      const response = await fetch(`${GATSBY_ENV.CF_PROD_URL}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post, null, 2),
      });

      const result = await response.json();
      console.log('Got result from posting: ', result);
      location.reload();
    } catch (err) {
      console.error('Got error from posting: ', err);
    }
  };

  return (
    <VStack
      p={5}
      borderRadius={10}
      bgColor={'white'}
      shadow={'lg'}
      alignItems={'flex-start'}
    >
      <Text fontSize={'lg'}>Let's Say Something!</Text>
      <Input
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      ></Input>
      <Textarea
        value={captionInput}
        onChange={(e) => setCaptionInput(e.target.value)}
        placeholder={`What's up?`}
      ></Textarea>
      <Button alignSelf={'flex-end'} onClick={handlePost}>
        Post It!
      </Button>
    </VStack>
  );
};

const PostGroup: React.FC<{}> = () => {
  const [postMenuIsOpen, setPostMenuIsOpen] = useState(false);

  return (
    <VStack position={'sticky'} zIndex={10}>
      <VStack
        p={5}
        borderRadius={10}
        bgColor={'white'}
        shadow={'lg'}
        alignSelf={'flex-end'}
      >
        <Button
          onClick={() => setPostMenuIsOpen(!postMenuIsOpen)}
          variant={postMenuIsOpen ? 'outline' : 'solid'}
          color={postMenuIsOpen ? 'red' : ''}
        >
          {postMenuIsOpen ? 'Cancel' : 'New Post'}
        </Button>
      </VStack>
      {postMenuIsOpen ? <PostMenu /> : <></>}
    </VStack>
  );
};

export default PostGroup;
