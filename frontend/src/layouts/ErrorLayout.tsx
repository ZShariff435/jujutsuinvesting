import React from 'react';
import { Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ErrorLayoutProps {
  children: React.ReactNode;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Spacer />
      <Flex flex="1" direction="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default ErrorLayout;