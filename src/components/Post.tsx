import { VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

export type Post = {
  id: string;
  username: string;
  caption: string;
};

export const Post: React.FC<Post> = ({ id, username, caption }) => {
  return (
    <VStack
      w={'100%'}
      p={5}
      backgroundColor={'white'}
      borderRadius={10}
      shadow={'lg'}
      alignItems={'left'}
    >
      <Text variant={'h2'}>{username}</Text>
      <Text>{caption}</Text>
    </VStack>
  );
};
