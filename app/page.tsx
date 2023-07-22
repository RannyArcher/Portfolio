"use client";
import { Image, Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const pageVariants: Variants = {
  transparent: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};

export default function Page() {
  return (
    <Flex
      as={motion.div}
      variants={pageVariants}
      initial="transparent"
      animate="shown"
      h="100vh"
      minH="2xl"
      maxH="3xl"
    >
      <Box
        userSelect="none"
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
        pos="relative"
        h="full"
        w="md"
        flexGrow="1"
        flexShrink="0"
      >
        <Image
          priority
          alt="imrane"
          src="/imrane.jpg"
          quality={100}
          fill
          objectFit="cover"
        />
      </Box>
      <Flex
        flexGrow="1"
        flexShrink="1"
        justify="center"
        alignItems="center"
      >
        <Flex
          flexDir="column"
          gap={{ base: "25", md: "50" }}
        >
          <Box>
            <Heading as="h1" m="0" size="2xl">Hello,</Heading>
            <Heading
              as="h1"
              m="0"
              ml={{ base: "0", md: "5" }}
              fontWeight="bold"
              size="2xl"
            >
              I'm Imrane !
            </Heading>
          </Box>
          <Text m="0" maxW="md" fontSize="xl">
            I'm a front-end web developer, My philosophy is to create Friendly,
            Flexible, Interactive, Accessible, and Performant Websites.
          </Text>
          <Link
            href="/bg.jpg"
            color="white"
            bg="black"
            px="5"
            py="2.5"
            alignSelf="center"
            borderRadius="md"
            _hover={{
              textDecoration: "none",
            }}
          >
            See My CV
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
