import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai/';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe for updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>
                All rights reserved
            </Text>
        </VStack>

        <VStack
          w={'full'} 
        >
             <Heading size={'md'} textTransform={'uppercase'} >Social Media</Heading>
             <Button variant={'link'} colorScheme={'white'} >
                <a target={'blank'} href='https://www.youtube.com/channel/UCNdX-KJccn7BjnFSEaTs2Nw'>Youtube</a>
             </Button>

             <Button variant={'link'} colorScheme={'white'} >
                <a target={'blank'} href='https://www.instagram.com/rahulbablu96'>Instagram</a>
             </Button>

             <Button variant={'link'} colorScheme={'white'} >
                <a target={'blank'} href='https://www.github.com/rahulbablu'>Github</a>
             </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
