import styled from "styled-components";
import Image from "next/image";
const Container = styled.div`
  padding: 0px 5%;
`;
const Menu = () => {
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
        <ul className=" text-white uppercase md:flex md:items-center md:pb-0 pd-12">
          {Links?.map((link) => (
            <li
              key={link.key}
              className={`relative md:flex items-center px-10 py-5 hover:bg-[#4b723d] cursor-pointer text-2xl ${
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
