import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import Marginer from "../../components/marginer";
import Navbar from "../../components/navbar";
import AboutUs from "./aboutUs";
import BookingSteps from "./bookingSteps";
import TopSection from "./topSection";
import TopSkills from "./topSkills";

// overflow-x-hidden : ブロックレベル要素の中身が溢れた場合の表示方法
// flex-col : flexの方向を制御する(垂直に配置)
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const HomePage: FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="7em" />
      <AboutUs />
      <Marginer direction="vertical" margin="7em" />
      <TopSkills />
    </PageContainer>
  );
};

export default HomePage;
