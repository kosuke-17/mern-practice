import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import TSImg from "../../../assets/images/typescript.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    items-center
    2xl:justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `}
`;

const SkillContainer = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    ml-2
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    text-sm
    md:text-base
    text-gray-500
    font-normal
    m-4
  `}
`;

// ポートフォリオが良いかも？
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <SkillContainer>
        <img src={TSImg} alt="スキル1" />
      </SkillContainer>
      <InfoContainer>
        <Title>ここにスキルのタイトル</Title>
        <InfoText>
          TypeScript
          はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。
          TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
