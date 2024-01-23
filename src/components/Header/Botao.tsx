import { Button } from "@chakra-ui/react"

interface IBotao {
    event: () => void
}

export const Botao = ( { event } : IBotao) => {
    return (
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'> Logar</Button>
    )
}