"use client";
import {
  itemVariants,
  listingVariants,
  pageVariants,
} from "../lib/sharedVariants";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ABOUT = [
  {
    question: "Who is Imrane ?",
    answer:
      "Junior Front-End Web Developer. Based in Morocco, Currently Stuying at Specialized Institute of Applied Technology.",
  },
  { question: "huuuh ?", answer: "wtf is this shit" },
  { question: "huuuh Xd?", answer: "ithis shit" },
];

export default function About() {
  return (
    <Flex
      as={motion.div}
      direction="column"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      pt="80px"
    >
      <Box
        as={motion.ul}
        variants={listingVariants}
        initial="hidden"
        animate="visible"
      >
        {ABOUT.map(({ question, answer }) => (
          <Flex
            as={motion.li}
            direction="column"
            gap="1"
            variants={itemVariants}
            key={question}
          >
            <Heading
              as="h1"
              m="0"
              mt="10"
            >
              {question}
            </Heading>
            <Text>
              {answer}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
