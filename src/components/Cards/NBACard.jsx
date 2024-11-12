import { Button, Card, Image, Text } from "@chakra-ui/react";
import NBAVizImage from "../../assets/NBA-Viz-Screenshot.png";

export const NBAProjectCard = () => {
  return (
    <Card.Root height={"550px"} width={"384px"} overflow="hidden">
      <Image
        src={NBAVizImage}
        alt="Green double couch with wooden legs"
        style={{ maxWidth: "100%", maxHeight: "217px" }}
      />
      <Card.Body gap="2">
        <Card.Title>NBA Visualizer</Card.Title>
        <Card.Description>
          The following program calculates NBA players' impact on their team's
          performance during a particular season. Each NBA player's score is
          calculated using a novel formula. The data analysis is done through
          Python and visualization is handled by React.
          <Text fontWeight={"bold"}>
            <br></br> React, JavaScript, Python, Flask, SQLite
          </Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          as="a"
          href="https://github.com/jacksonpan0/NBA-Viz"
          variant="solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          as="a"
          href="https://docs.google.com/document/d/1yq8VrNR0Vt58NdcdFoxtk4WEj80ipIbE9HpCCMlmRaI/edit?usp=sharing"
          variant="ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Document
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
