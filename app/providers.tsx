"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import Nav from "./_components/nav";

export default function ({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Container maxW="container.lg">
          <Nav />
          <main>
            {children}
          </main>
        </Container>
      </ChakraProvider>
    </CacheProvider>
  );
}

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
      },
    },
  },
});
