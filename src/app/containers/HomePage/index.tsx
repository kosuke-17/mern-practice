import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/navbar";

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
    </PageContainer>
  );
};

export default HomePage;
