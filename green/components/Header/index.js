import HeaderMenu from "./HeaderMenu";
import Menu from "./Menu";
import styled from "styled-components";

const Container = styled.div``;
const Header = () => {
  return (
    <Container className="w-full top-0 left 0">
      <HeaderMenu />
      <Menu />
    </Container>
  );
};

export default Header;
