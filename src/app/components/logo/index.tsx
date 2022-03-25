import styled from "styled-components";
import ReactLogoImg from "../../../assets/images/react.png";
import tw from "twin.macro";

interface ILogoProps {
  color: "white" | "dark";
}

interface LogoTextProps {
  color: string;
}

// ロゴ全体のスタイル
const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;
// ロゴの文字
const LogoText = styled.div<{ color: string }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
  ${({ color }: LogoTextProps) =>
    color === "white" ? tw`text-white` : tw`text-black`}
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
const Logo = (props: ILogoProps) => {
  const { color } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={ReactLogoImg} alt="react-img" />
      </Image>
      <LogoText color={color || "dark"}>React</LogoText>
    </LogoContainer>
  );
};

export default Logo;
