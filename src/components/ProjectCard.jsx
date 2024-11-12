import { HStack } from "@chakra-ui/react";
import { NBAProjectCard } from "./Cards/NBACard.jsx";
import { MelcoursesProjectCard } from "./Cards/Melcourses.jsx";
import { GymMateProjectCard } from "./Cards/Gymmate.jsx";

export const ProjectCard = () => {
  return (
    <HStack justifyContent="center">
      <NBAProjectCard />
      <MelcoursesProjectCard />
      <GymMateProjectCard />
    </HStack>
  );
};
