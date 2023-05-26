import { VStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';

export type Post = {
  id: string;
  username: string;
  caption: string;
  date: number;
};

export const Post: React.FC<Post> = ({ id, username, caption, date }) => {
  const parsedDate = new Date(date);
  const day = parsedDate.getDay();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  const hours = parsedDate.getHours();
  const ampm = hours < 12 ? 'AM' : 'PM';
  const adjustedHours = hours % 12 == 0 ? 12 : hours % 12;
  const minutes = parsedDate.getMinutes();

  return (
    <VStack
      w={'100%'}
      p={5}
      backgroundColor={'white'}
      borderRadius={10}
      shadow={'lg'}
      alignItems={'left'}
    >
      <Heading as={'h2'} size={'md'}>
        {`@${username}`}
      </Heading>
      <hr />
      <Text>{caption}</Text>
      <Text
        fontSize={'sm'}
        alignSelf={'flex-end'}
        color={'gray.400'}
      >{`${adjustedHours}:${minutes} ${ampm}, ${month}/${day}/${year}`}</Text>
    </VStack>
  );
};
