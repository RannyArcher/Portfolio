"use client";
import {
  Box,
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

const getPagenameByPath = {
  "/": "portfolio",
  "/about": "about",
  "/projects": "projects",
  "/contact": "contact",
} as const;

const LINKS = Object.entries(getPagenameByPath);

export default function Nav() {
  return (
    <Flex
      as={motion.nav}
      w="100%"
      p="0 25px"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      top="0"
      left="0"
      h="80px"
      pos="fixed"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link
        href="/"
        _hover={{
          textDecor: "none",
        }}
        fontWeight="bold"
        fontSize="xl"
      >
        IMRANE
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
            return (
              <MenuItem
                key={linkPath}
              >
                <Link
                  href={linkPath}
                  _hover={{ textDecor: "none" }}
                  textTransform="capitalize"
                >
                  {pageName}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}
