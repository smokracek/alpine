import { Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Feed from './Feed';
import GATSBY_ENV from '../gatsby_environment';

const Main: React.FC<{}> = () => {
  return (
    <HStack w={'100%'}>
      <VStack w={'30%'} alignItems={'end'} justifyItems={'start'} h={'100%'}>
        <VStack p={5} borderRadius={10} bgColor={'white'} shadow={'lg'}>
          <Button>New Post</Button>
        </VStack>
      </VStack>
      <VStack w={'40%'} h={'100%'}>
        <Feed></Feed>
      </VStack>
      <VStack w={'30%'} alignItems={'start'} h={'100%'}></VStack>
    </HStack>
  );
};

export default Main;
