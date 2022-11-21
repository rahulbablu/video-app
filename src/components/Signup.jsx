import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    VStack
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'6'}
            w={['full','96']}
            m={'auto'}
            my={'14'}
          >
            <Heading alignSelf={'center'}>VIDEO HUB</Heading>

            <Avatar backgroundColor={'purple.500'} alignSelf={'center'} boxSize={'28'} />

            <Input
              placeholder={'Name'}
              required
              type={'text'}
              focusBorderColor={'purple.500'}
            />
  
            <Input
              placeholder={'Email'}
              required
              type={'email'}
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              required
              type={'password'}
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Signup
            </Button>
            <hr />
              <Button w={'fit-content'} alignSelf={'center'} colorScheme={'green'}>
                <Link to={'/login'}>Already A User?</Link>
              </Button>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;
  