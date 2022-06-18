import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Wrapper = styled.div``;
const Container = styled.div`\
    background-color: #ffffff;
`;
const FooterContainer = styled.div`
  padding: 0 9%;
  background-color: #ffffff;
`;
const Layout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
      <FooterContainer>
        <div className="container text-xl md:mx-auto py-2">
          © Bản quyền thuộc về The Fresh Garden Limited Company | Mọi quyền được
          bảo lưu cho The Fresh Garden Limited Company
        </div>
      </FooterContainer>
    </Container>
  );
};

export default Layout;
