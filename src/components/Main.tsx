import {
  Button,
  HStack,
  VStack,
  Text,
  Textarea,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Feed from './Feed';

const PostMenu: React.FC<{}> = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [captionInput, setCaptionInput] = useState('');

  const handlePost = () => {
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

const Main: React.FC<{}> = () => {
  const [postMenuIsOpen, setPostMenuIsOpen] = useState(false);

  return (
    <HStack w={'100%'}>
      <VStack w={'30%'} alignItems={'end'} justifyItems={'start'} h={'100%'}>
        <VStack p={5} borderRadius={10} bgColor={'white'} shadow={'lg'}>
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
      <VStack w={'40%'} h={'100%'}>
        <Feed></Feed>
      </VStack>
      <VStack w={'30%'} alignItems={'start'} h={'100%'}></VStack>
    </HStack>
  );
};

export default Main;
