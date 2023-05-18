import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { HeadFC, PageProps } from 'gatsby';
import App from '../components/App';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ChakraProvider>
      <App></App>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>alpine</title>;
