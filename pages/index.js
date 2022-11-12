import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/Layouts/article";
function about() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          color="white"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
          mb={6}
        >
          Hello, I&apos;m a Front End Developer Based in Pakistan!
        </Box>
        <Box display={{ md: "fl" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ehtisham ur Rehman
            </Heading>
            <p>Digital Craftzman (Artist / Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteApha.800"
              borderWidth={2}
              borderStye="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/takuya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit
            amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur
            adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum
            dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet,
            consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.{" "}
            <NextLink href="/works/inkdrop">
              <Link>My WOrk</Link>
            </NextLink>
            .
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Okara, Punjab, Pakistan.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the Bachelor&apos;s Program in Bachelor&apos;s of Science
            in Computer Science from The University of Lahore.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as Web Front End Intern in Suven Consultants and Technology
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as Mern Stack Instructor in Blank Slate
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
}

export default about;
