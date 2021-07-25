import * as React from "react"
import PropTypes from "prop-types"
import { Box, ChakraProvider, Flex } from "@chakra-ui/react"
import Header from "./header"
import Footer from "./footer"
import theme from "../theme"
// import "./layout.css"
import { Location } from "@reach/router"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Location>
        {({ location, navigate }) => (
        <Flex flexDir="column" minH="100vh" minW="100vw">
          <Header location={location}/>
          <Box as="main" flex="1">
            {children}
          </Box>
          <Footer location={location}/>
        </Flex>
    )}
      </Location>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
