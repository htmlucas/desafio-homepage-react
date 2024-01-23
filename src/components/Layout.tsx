import { GridItem } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
        <GridItem pl='2' bg='#9413dc' minHeight='100vh' padding='25px' area={'main'}>
          { children }
        </GridItem>
      <Footer />
    </>
  )
}
