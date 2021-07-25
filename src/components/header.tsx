import React from "react"
import { Link, Box, Flex, Heading } from "@chakra-ui/react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { navigate } from "gatsby"
const Header = ({ location }) => {
  return (
    // pc
    <Flex
      display={{ base: "none", sm: "none", md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      w={{ md: "46rem", lg: "71rem", xl: "71rem" }}
      margin="0 auto"
    >
      <Heading
        letterSpacing="tight"
        color="#333"
        fontSize="18px"
        cursor="pointer"
      >
       21YunBox
      </Heading>
      <Flex h="16" alignItems="center">
        <Flex
          mr={{ md: "9", lg: "20" }}
          color="#333333"
          fontWeight="500"
          cursor="pointer"
          borderBottom="4px solid #333"
          h="16"
          alignItems="center"
        >
          {location.pathname === "/"
            ? "Home"
            : location.pathname === "/simplifiedChinese"
            ? "首页"
            : "首頁"}
        </Flex>
        <Flex
          mr={{ md: "9", lg: "20" }}
          fontWeight="500"
          color="#999"
          cursor="pointer"
          alignItems="center"
        >
          <AnchorLink href="#product">
            {" "}
            {location.pathname === "/"
              ? "product"
              : location.pathname === "/simplifiedChinese"
              ? "产品"
              : "產品"}
          </AnchorLink>
        </Flex>
        <Flex
          mr={{ md: "9", lg: "20" }}
          fontWeight="500"
          color="#999"
          cursor="pointer"
          alignItems="center"
        >
          <AnchorLink href="#About">
            {" "}
            {location.pathname === "/"
              ? "About Us"
              : location.pathname === "/simplifiedChinese"
              ? "关于我们"
              : "關於我們"}
          </AnchorLink>
        </Flex>
        <Flex>
          <Box
            mr={{ md: "1", lg: "3.5" }}
            fontWeight={location.pathname === "/" ? "600" : "normal"}
            cursor="pointer"
            onClick={() => {
              navigate("/")
            }}
            color={location.pathname === "/" ? "#000" : "#999"}
          >
            EN{" "}
          </Box>
          <Box borderLeft="1px dashed #999" />
          <Box
            ml={{ md: "1", lg: "3.5" }}
            mr={{ md: "1", lg: "3.5" }}
            cursor="pointer"
            onClick={() => {
              navigate("/simplifiedChinese")
            }}
            color={location.pathname === "/simplifiedChinese" ? "#000" : "#999"}
            fontWeight={
              location.pathname === "/simplifiedChinese" ? "600" : "normal"
            }
          >
            简
          </Box>
          <Box borderLeft="1px dashed #999" />
          <Box
            ml={{ md: "1", lg: "3.5" }}
            cursor="pointer"
            onClick={() => {
              navigate("/traditionalChinese")
            }}
            color={
              location.pathname === "/traditionalChinese" ? "#000" : "#999"
            }
            fontWeight={
              location.pathname === "/traditionalChinese" ? "600" : "normal"
            }
          >
            繁
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
