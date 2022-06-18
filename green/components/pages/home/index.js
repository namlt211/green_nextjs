import BannerHomePage from "./BannerHomePage";
import MenuHome from "./MenuHome";
import styled from "styled-components";
import BannerMidPage from "./BannerMidPage";
import FresherDay from "./FresherDay";

const Container = styled.div`
  padding: 0 9%;
`;
const HomePageComponent = () => {
  return (
    <Container className="mt-10">
      <div className="flex justify-center">
        <BannerHomePage />
      </div>
      <div className="mt-10">
        <MenuHome />
      </div>
      <div className="mt-10">
        <BannerMidPage />
      </div>
      <div className="mt-10">
        <FresherDay />
      </div>
    </Container>
  );
};

export default HomePageComponent;
