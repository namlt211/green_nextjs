import Image from "next/image";
import styled from "styled-components";
import SearchProduct from "./SearchProduct";
const Container = styled.div`
  padding: 0px 12%;
`;
const HeaderMenuItem = styled.div``;
const LogoContainer = styled.div``;
const FormSearchContainer = styled.div``;
const LeftMenuContainer = styled.div`
  margin-left: auto;
`;
const BoxInfoOrder = styled.div`
  display: none;
  width: 400px;
  top: 55px;
  right: 0;
  :before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 10px 7.5px;
    border-color: transparent transparent #ffffff transparent;
    position: absolute;
    top: -9px;
    right: 70px;
    filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, 0.05));
  }
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    z-index: 0;
  }
`;
const ButtonCartContainer = styled.div`
  position: relative;
  @media (min-width: 1280px) {
    :hover > #box-info-order {
      display: inline-block;
    }
  }
`;
const HeaderMenu = ({ handleOpenCloseMenu, openMenu }) => {
  return (
    <Container className="shadow-md w-full top-0 left 0 ">
      <div className="container mx-auto">
        <HeaderMenuItem className="xl:flex items-center xl:justify-between xl:w-full flex flex-wrap xl:flex-nowrap">
          <div
            onClick={handleOpenCloseMenu}
            className="xl:hidden w-1/3 xl:w-full text-4xl xl:text-2xl"
          >
            {openMenu ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <LogoContainer className="w-1/3 xl:w-1/4 flex xl:block justify-center xl:items-left">
            <Image src="/logo.webp" width={110} height={68} />
          </LogoContainer>
          <FormSearchContainer className="px-0 py-10 xl:px-5 w-full xl:w-2/4 xl:order-none order-1">
            <SearchProduct />
          </FormSearchContainer>
          <div className="flex w-1/3 xl:w-full px-0 lg:pl-10 justify-end">
            <LeftMenuContainer className="xl:flex hidden">
              <div className="md:flex items-center">
                <Image src="/phone.png" width={28} height={28} />
              </div>
              <div className="pl-3">
                <div className="text-2xl py-1">Hỗ trợ khách hàng</div>
                <div className="text-xl font-bold hover:text-[#537f44] py-1 cursor-pointer">
                  098 167 3441
                </div>
              </div>
            </LeftMenuContainer>
            <LeftMenuContainer className="xl:flex hidden">
              <div className="md:flex items-center">
                <Image src="/account.png" width={28} height={28} />
              </div>
              <div className="pl-3">
                <div className="text-2xl py-1 hover:text-[#537f44] cursor-pointer">
                  Đăng nhập
                </div>
                <div className="text-base py-1 hover:text-[#537f44] cursor-pointer">
                  Đăng ký
                </div>
              </div>
            </LeftMenuContainer>
            <LeftMenuContainer className="px-0 xl:px-7 cursor-pointer sm:w-2/7 xl:w-2/7 ">
              <ButtonCartContainer className=" md:flex py-2  px-2 items-center justify-between w-full border-none md:border-solid md:border-2 md:rounded-md border-[#537f44] text-[#537f44] hover:bg-[#537f44] hover:text-white">
                <div className="text-5xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-2xl px-2 hidden md:block">Giỏ hàng</div>
                <div className="bg-[#ffc108] text-black py-1 px-3 md:py-2 md:px-3 rounded-md absolute md:static top-0 right-[-10px]">
                  3
                </div>
                <BoxInfoOrder
                  id="box-info-order"
                  className="absolute bg-white border rounded-md border-solid border-[#ccc] text-black py-4 px-2 text-center"
                >
                  Chưa có đơn hàng nào
                </BoxInfoOrder>
              </ButtonCartContainer>
            </LeftMenuContainer>
          </div>
        </HeaderMenuItem>
      </div>
    </Container>
  );
};

export default HeaderMenu;
