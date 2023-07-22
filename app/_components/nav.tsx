"use client";
import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useId } from "react";

const getPagenameByPath = {
  "/": "portfolio",
  "/about": "about",
  "/projects": "projects",
  "/contact": "contact",
} as const;

const LINKS = Object.entries(getPagenameByPath);

export default function Nav() {
  return (
    <motion.nav
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "linear", delay: .25 }}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        h="80px"
        maxW="container.lg"
      >
        <Link
          href="/"
          _hover={{
            textDecor: "none",
          }}
          fontWeight="bold"
          fontSize="xl"
          display="flex"
          flexDir="column"
          lineHeight="none"
        >
          IMRANE
          <Flex
            fontSize="xs"
            justifyContent="space-between"
          >
            {"AABBOU".split("").map((char) => <span key={useId()}>{char}
            </span>)}
          </Flex>
        </Link>
        <Box
          as={motion.div}
          layout
          display={{ base: "none", md: "flex" }}
          flexDir="row"
          gap="10px"
        >
          {LINKS.map(([linkPath, pageName]) => {
            let activePath = usePathname();
            let isActive = activePath === linkPath;
            return (
              <Flex
                key={linkPath}
                pos="relative"
                justify="center"
                alignItems="center"
                w="80px"
              >
                <Link
                  href={linkPath}
                  _hover={{
                    textDecor: "none",
                  }}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  {pageName}
                </Link>

                {isActive &&
                  (
                    <Box
                      as={motion.div}
                      layoutId="underline"
                      pos="absolute"
                      w="100%"
                      h="2px"
                      bg="black"
                      bottom="-10px"
                      right="0px"
                    />
                  )}
              </Flex>
            );
          })}
        </Box>
        <Menu>
          <MenuButton display={{ md: "none" }}>
            <HamburgerIcon fontSize="2xl" />
          </MenuButton>
          <MenuList>
            {LINKS.map(([linkPath, pageName]) => {
              let activePath = usePathname();
              let isActive = activePath === linkPath;

              return (
                <MenuItem
                  as={Link}
                  key={linkPath}
                  _hover={{ textDecor: "none" }}
                  textTransform="capitalize"
                  href={linkPath}
                  borderLeft={isActive ? "black solid" : ""}
                  pos="relative"
                >
                  {pageName}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Container>
    </motion.nav>
  );
}
