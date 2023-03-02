import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigat = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) navigat("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigat]);

  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d={"flex"}
        p={"3"}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth="1px"
      >
        <Text
          fontSize={"4xl"}
          textAlign={"center"}
          fontFamily="Work sans"
          color={"black"}
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box w={"100%"} bg={"white"} p="4" borderRadius={"lg"} borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<Signup />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
