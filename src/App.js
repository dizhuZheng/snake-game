import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Board from "./components/Board.tsx";

export default function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">SNAKE GAME</Heading>
          <Heading as='h4' size='md'>Current Score</Heading>
          <Board height={600} width={1000} />
        </Container>
        <Container centerContent>
        <Heading as='h4' size='md'>How to Play</Heading>
        <Heading as='h5' size='sm'>Note: Start the game by pressing </Heading>
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

