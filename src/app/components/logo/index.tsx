import styled from "styled-components";
import ReactLogoImg from "../../../assets/images/react.png";
import tw from "twin.macro";

// ロゴ全体のスタイル
const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;
// ロゴの文字
const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;

// 画像のスタイル
const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}

  img {
    width: auto;
    height: 100%;
  }
`;
const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={ReactLogoImg} alt="react-img" />
      </Image>
      <LogoText>React</LogoText>
    </LogoContainer>
  );
};

export default Logo;
