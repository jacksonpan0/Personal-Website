import { HStack, Image } from "@chakra-ui/react";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

export const Footer = () => {
  return (
    <HStack
      direction="row"
      spacing={6}
      align="center"
      justify="center"
      mt={"100px"}
    >
      <a
        href="https://github.com/jacksonpan0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={githubIcon}
          h="30px"
          w="30px"
          rounded="md"
          mb={"30px"}
          alt="GitHub Icon"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
      </a>
      <a
        href="https://linkedin.com/in/jpan0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={linkedinIcon}
          h="30px"
          w="30px"
          rounded="md"
          mb={"30px"}
          alt="LinkedIn Icon"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
      </a>
    </HStack>
  );
};
