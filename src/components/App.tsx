import React, { useEffect } from 'react';
import { HStack, Heading, VStack } from '@chakra-ui/react';
import Main from './Main';

const Header: React.FC<{}> = () => {
  return (
    <HStack
      w={'100%'}
      p={5}
      bgGradient={'linear(to-br, blue.400, pink.400)'}
      shadow={'md'}
    >
      <Heading color={'white'}>alpine.</Heading>
    </HStack>
  );
};

const App: React.FC<{}> = () => {
  // useEffect(() => {
  //   const fetchTest = async () => {
  //     try {
  //       const response = await fetch(`http://${ENV.CF_DEV_URL}/`);
  //       const data = await response.text();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchTest();
  // }, []);

  return (
    <VStack w={'100%'} h={'100vh'} backgroundColor={'gray.200'}>
      <Header />
      <Main></Main>
    </VStack>
  );
};

export default App;
