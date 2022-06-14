import Image from "next/image";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 5%;
`;
const Menu = ({ openMenu }) => {
  let Links = [
    {
      key: 1,
      name: "Khuyến mãi",
      icon: "/icon_menu_flashsale.webp",
      link: "/",
    },
    {
      key: 2,
      name: "rau củ hữu cơ",
      icon: "",
      link: "/",
    },
    {
      key: 3,
      name: "trái cây hữu cơ",
      icon: "",
      link: "/",
    },
    {
      key: 4,
      name: "nấm tươi và nấm khô",
      icon: "",
      link: "/",
    },
  ];
  return (
    <Container className="left-0 right-0 w-full bg-[#547f44]">
      <div className="container md:mx-auto">
        <ul
          className={`left-[-1px] right-0 lg:left-0 absolute lg:static pb-12 lg:pb-0 bg-white pl-0 lg:pl-9 lg:bg-[#547f44] text-black lg:text-white uppercase lg:flex lg:items-center lg:pb-0 pd-12 transition-all duration-500 ease-in ${
            openMenu ? "top-28" : "top-[-500px]"
          } w-full`}
        >
          {Links?.map((link) => (
            <li
              key={link.key}
              className={`relative lg:flex items-center px-10 py-5 hover:bg-[#4b723d] cursor-pointer text-2xl ${
                link.key === 1 ? "pl-20" : ""
              }`}
            >
              {link.icon ? (
                <span className="absolute left-5">
                  <Image src={link.icon} width={24} height={24} />
                </span>
              ) : (
                ""
              )}
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Menu;
