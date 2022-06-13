import styled from "styled-components";
import SearchProduct from "./SearchProduct";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  padding: 0px 5%;
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
  :hover > #box-info-order {
    display: inline-block;
  }
`;
const HeaderMenu = () => {
  return (
    <Container className="shadow-md w-full top-0 left 0 ">
      <div className="container md:mx-auto">
        <HeaderMenuItem className="grid grid-cols-7 gap-0 md:items-center py-5 md:px-10 px-7">
          <LogoContainer>
            <Image src="/logo.webp" width={110} height={68} />
          </LogoContainer>
          <FormSearchContainer className="col-span-3 px-10">
            <SearchProduct />
          </FormSearchContainer>
          <LeftMenuContainer className="md:flex">
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
          <LeftMenuContainer className="md:flex">
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
          <LeftMenuContainer className="w-full px-7 cursor-pointer">
            <ButtonCartContainer
              data-tooltip-target="box-info-order"
              data-tooltip-placement="bottom"
              className="md:flex py-2 px-2 items-center justify-between w-full border-solid border-2 rounded-md border-[#537f44] text-[#537f44] hover:bg-[#537f44] hover:text-white  "
            >
              <div className="text-5xl">
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
              <div className="text-2xl">Giỏ hàng</div>
              <div className="bg-[#ffc108] text-black py-2 px-3 rounded-md">
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
        </HeaderMenuItem>
      </div>
    </Container>
  );
};

export default HeaderMenu;
