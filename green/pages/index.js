import HomePageComponent from "../components/pages/home";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 5%;
`;

export default function Home() {
  return (
    <Container>
      <HomePageComponent />
    </Container>
  );
}
