import {
  Button,
  Container,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading alignSelf={'center'}>Welcome Back</Heading>

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

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
          <hr />
            <Button w={'fit-content'} alignSelf={'center'} colorScheme={'green'}>
              <Link to={'/signup'}>Create New Account</Link>
            </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
