import {  Text, Box, Flex, Image } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex bg='orange' minHeight='50px'>      
      <Box flex='1' p='9px'>
        <Image
        borderRadius='full'
        maxWidth='80px'
        src='https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png'
        alt='React'
      />
      </Box>
      <Box flex='2' p='15px' justifyContent='center' color='black'>
        <Text as="kbd" fontSize='2xl'>Dio Bank</Text>
      </Box>
    </Flex>

  )
}
