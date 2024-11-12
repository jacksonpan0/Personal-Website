import { Button, Card, Image, Text } from "@chakra-ui/react";
import MelcourseCalendarImage from "../../assets/melcoursescalendar.png";

export const MelcoursesProjectCard = () => {
  return (
    <Card.Root height={"550px"} width={"384px"} overflow="hidden">
      <Image
        src={MelcourseCalendarImage}
        alt="An image of the calendar page on Melcourses"
        style={{ maxWidth: "100%", maxHeight: "217px" }}
      />
      <Card.Body gap="2">
        <Card.Title>Melcourses</Card.Title>
        <Card.Description>
          Melcourses is an improved course registration system for students at
          the University of Rochester. I've actively worked on creating multiple
          components to improve filtering options and mobile functionality using
          React and TypeScript.
          <Text fontWeight={"bold"}>
            <br></br> React, TypeScript, Python, Django, NextJS
          </Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          as="a"
          href="https://melcourses.com/"
          variant="solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
