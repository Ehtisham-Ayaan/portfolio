import { Container, Box, Heading } from "@chakra-ui/react";

function about() {
  return (
    <Container>
      <Box borderRadius="lg" color="white" bg="red" p={3} align="center" mb={6}>
        Hello, I&apos;m a Front End Developer Based in Pakistan!
      </Box>
      <Box display={{ md: "fl" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ehtisham ur Rehman
          </Heading>
          <p>Digital Craftzman (Artist / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  );
}

export default about;
