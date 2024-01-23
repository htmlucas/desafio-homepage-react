import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'

import { Layout } from './components/Layout';
import { Botao } from './components/Header/Botao';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Layout >
          <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
