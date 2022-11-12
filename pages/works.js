import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/Layouts/article";
// import thumbInkdrop from "";
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            {/* <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbnail}> */}
            About Appppp
            {/* </WorkGridItem> */}
          </Section>

          <Section delay={0.3}>
            {/* <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={thumbnail}> */}
            About Appppp
            {/* </WorkGridItem> */}
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Works;
