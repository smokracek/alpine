import React from 'react';
import { Box, HStack, Heading, VStack } from '@chakra-ui/react';
import Feed from './Feed';
import PostGroup from './PostGroup';

const Header: React.FC<{}> = () => {
  return (
    <Box
      width="100%"
      p={5}
      bgGradient={'linear(to-br, blue.400, pink.400)'}
      shadow={'md'}
      position={'sticky'}
      top={0}
      zIndex={100}
    >
      <Heading color={'white'}>alpine.</Heading>
    </Box>
  );
};

const App: React.FC<{}> = () => {
  return (
    <>
      <Box
        position={'absolute'}
        zIndex={1000}
        w={'100%'}
        h={'100vh'}
        backgroundColor={'gray.200'}
      >
        <Header />

        <HStack justifyContent={'flex-start'} alignItems={'flex-start'}>
          <VStack
            flex={1}
            pl={8}
            pt={8}
            top={0}
            left={0}
            alignItems={'flex-end'}
            zIndex={10}
          >
            <PostGroup />
          </VStack>
          <Box flex={2} pt={8}>
            <Feed />
          </Box>
          <Box flex={1}></Box>
        </HStack>
      </Box>
    </>
  );
};

export default App;
