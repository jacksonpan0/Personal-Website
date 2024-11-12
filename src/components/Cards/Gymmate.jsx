import { Button, Card, Image, Text } from "@chakra-ui/react";
import GymMateImage from "../../assets/GymMatePreview.png";

export const GymMateProjectCard = () => {
  return (
    <Card.Root height={"550px"} width={"384px"} overflow="hidden">
      <Image
        src={GymMateImage}
        alt="An image of the home page of GymMate"
        style={{ maxWidth: "100%", maxHeight: "217px" }}
      />
      <Card.Body gap="2">
        <Card.Title>GymMate</Card.Title>
        <Card.Description>
          GymMate is a website that focuses on allowing users to easily improve
          their health through generating customized workout plans and calorie
          goals. In order to generate an appropriate workout plan and calorie
          goal users input input their biometric information, availabilty, and
          fitness goals.
          <Text fontWeight={"bold"}>
            <br></br> JavaScript, HTML, CSS
          </Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          as="a"
          href="https://jacobmcgreen.github.io/DandyHacks23/"
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
