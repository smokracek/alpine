import { VStack, Text, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Post, Post as PostProps } from './Post';
import GATSBY_ENV from '../gatsby_environment';

const Feed: React.FC<{}> = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${GATSBY_ENV.CF_PROD_URL}/posts`);
        const data = await res.json();
        console.log('Post Results:', JSON.stringify(data, null, 2));
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts: ', err);
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <Flex
        w={'100%'}
        p={5}
        backgroundColor={'white'}
        borderRadius={10}
        shadow={'lg'}
        justifyContent={'center'}
      >
        <Text>No posts to display!</Text>
      </Flex>
    );
  } else {
    return (
      <VStack gap={3}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              caption={post.caption}
              date={post.date}
            ></Post>
          );
        })}
      </VStack>
    );
  }
};

export default Feed;
