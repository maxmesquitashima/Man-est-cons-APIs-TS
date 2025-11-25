import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex backgroundColor='gray.900' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl' color='cyan.400'  >Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              colorScheme='red'
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
