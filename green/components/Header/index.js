import HeaderMenu from "./HeaderMenu";
import Menu from "./Menu";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenCloseMenu = () => setOpenMenu(!openMenu);
  return (
    <Container className="w-full top-0 left 0">
      <HeaderMenu
        handleOpenCloseMenu={handleOpenCloseMenu}
        openMenu={openMenu}
      />
      <Menu openMenu={openMenu} />
    </Container>
  );
};

export default Header;
