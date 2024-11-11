import { ChakraProvider, Container, Heading, Kbd, Button } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { useState  } from "react"
import { useAppSelector } from './hooks.tsx'
import Board from "./components/Board.tsx";
import { increaseScore} from "./store/reducers/index.ts";
export default function App() {
  const [stop, setStop] = useState(false);

  const score = useAppSelector((state) => state.counter)

  function handleClick() {
    setStop(!stop); 
  }

  return (
    // <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">SNAKE GAME</Heading>
          <Heading as="h3" size="xs">Current score:{score}</Heading>
          <Board height={600} width={1000} stop={stop}/>
        </Container>
        <Container centerContent>
        <Heading as='h4' size='md'>How to Play</Heading>
        <Heading as='h5' size='sm'>Note: Start the game by pressing <span><Kbd>d</Kbd></span></Heading>
        <Heading as='h5' size='xs'>Move Up by pressing <span><Kbd>w</Kbd></span></Heading>
        <Heading as='h5' size='xs'>Move Down by pressing <span><Kbd>s</Kbd></span></Heading>
        <Heading as='h5' size='xs'>Move Left by pressing <span><Kbd>a</Kbd></span></Heading>
        <Heading as='h5' size='xs'>Move Right by pressing <span><Kbd>d</Kbd></span></Heading>
        <Button onClick={handleClick}>{stop?'Resume':'Stop'}</Button> 
        {/* disabled={!hasPrev} */}
        </Container>
      </ChakraProvider>
    // </Provider>
  );
}

