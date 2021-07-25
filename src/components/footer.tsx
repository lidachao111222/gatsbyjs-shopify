import React from "react"
import { Box, Center, Flex, Heading, Icon } from "@chakra-ui/react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Footer = ({ location }) => {
  return (
    <Box minH={60} bgColor="#333">
      <Flex
        maxW="1240px"
        margin="0 auto"
        color="#fff"
        justifyContent="space-between"
        px={8}
        pt={9}
      >
        {/* left  */}
        <Box>
          <Heading fontSize={{ sm: "lg", md: "lg" }}>21YunBox</Heading>
          <Box pt={2}>
            {location.pathname === "/"
              ? "Contace Us"
              : location.pathname === "/simplifiedChinese"
              ? "联系我们"
              : "聯繫我們"}
          </Box>
          <Box fontSize={{ base: "10px" }}>admin@21yunbox.com</Box>
        </Box>

        <Box w={{ base: 10, sm: 6, md: 6 }} />
        {/* right  */}

        <Box mr={{ sm: 0, md: 28 }}>
          <Box fontSize="sm">
            {location.pathname === "/"
              ? "Social Media"
              : location.pathname === "/simplifiedChinese"
              ? "社交媒体"
              : "社交媒體"}
          </Box>
          <Flex mt={5}>
            <Box
              cursor="pointer"
              w={{ base: "35px", sm: "35px", lg: "35px" }}
              onClick={() => {
                navigate("https://twitter.com/8851559")
              }}
            >
              <StaticImage
                src={"../images/twitter.png"}
                alt="twitter"
                placeholder="blurred"
              />
            </Box>

            <Box w={{ base: 6, sm: 6, md: 6 }} />
            <Box
              cursor="pointer"
              w={{ base: "35px", sm: "35px", lg: "35px" }}
              onClick={() => {
                navigate("https://www.linkedin.com/company/chao-li-61602a173")
              }}
            >
              <StaticImage
                src={"../images/linkedin.png"}
                alt="linkedin"
                placeholder="blurred"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Center mt={7} color="#fff">
        by Chao
      </Center>
    </Box>
  )
}

export default Footer
