import { Box, Center, Input } from '@chakra-ui/react';
import { login } from './../services/login';
import { Botao } from './Header/Botao';

export const Card = () => {
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Botao event={login}/>
      </Center>
    </Box>
  )
}