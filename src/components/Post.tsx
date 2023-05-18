import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

export type Post = {
  id: number;
  username: string;
  caption: string;
  id_img: number;
};

export const Post: React.FC<Post> = ({ id, username, caption, id_img }) => {
  return (
    <VStack
      w={'100%'}
      p={5}
      backgroundColor={'white'}
      borderRadius={10}
      shadow={'lg'}
    >
      <h1>{username}</h1>
      <Text>{caption}</Text>
    </VStack>
  );
};
