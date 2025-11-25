import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
          color={'blackAlpha.900'}
          fontSize={'1.5xl'}
          onClick={onClick}
          colorScheme="gray"
          size="sm"
          width="100%"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}

  export default DButton
