import { VStack, Text, Image } from "@chakra-ui/react";
import fallImage from "../assets/fall.png";
import { Scroll } from "./Scroll";

export const Header = () => {
  return (
    <VStack
      minHeight="100vh"
      justify="center"
      align="center"
      fontFamily="Georgia"
      color="antiquewhite"
    >
      <Text textStyle="7xl">Jackson Pan</Text>
      <Text textStyle="3xl" fontStyle="italic" mb={4}>
        Junior CS Student @ UofR | Full Stack Developer @ RocLab
      </Text>
      <Image
        src={fallImage}
        h="400px"
        w="500px"
        rounded="md"
        alt="Picture of Jackson"
        mb={6}
      />
      <VStack mt={20}>
        <Scroll />
      </VStack>
    </VStack>
  );
};
