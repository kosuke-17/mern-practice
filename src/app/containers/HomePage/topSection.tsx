import styled from "styled-components";
import tw from "twin.macro";
import SoccerFieldIcon from "../../../assets/images/soccer_field.svg";
import AvatarImg from "../../../assets/images/avatar.jpg";
import { SCREENS } from "../../components/responsive";
import Button from "../../components/button";

// コンテナ全体のスタイル
const TopSectionContainer = styled.div`
  min-height: 500px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `}
`;

// 左コンテナのスタイル
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;
// 右コンテナのスタイル
const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;
// スローガンのスタイル
// leading : 行の高さを指定
const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`;

// 説明のスタイル
const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}
`;

// 背景の画像スタイル(レスポンシブも記述)
// transform: rotate() : 要素を回転表示する
const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -4em;
  z-index: -1;
  transform: rotate() (-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 33em;
    max-height: 10em;
    right: -3em;
    top: -10em;
    transform: rotate() (-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 40em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate() (-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 50em;
    max-height: 30em;
    right: -5em;
    top: -15em;
    transform: rotate() (-20deg);
  }
`;

// アバターの画像スタイル(レスポンシブも記述)
const Avator = styled.div`
  width: auto;
  height: 10em;
  right: 1em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 10em;
    right: 6em;
    top: -2em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 15em;
    right: 5em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 20em;
    right: 10em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    m-4
  `}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>左のスローガン</Slogan>
        <Description>
          ポートフォリオはクリエイターやアーティストが自身の実績を相手にアピールするためのものです。
          主な用途としては、転職や就職活動の選考で使用されるほか、SNSなどで自身の活動を発信するためのアピール用にも使用されます
        </Description>
        <ButtonsContainer>
          <Button text="ボタン" />
          <Button text="ボタン" theme="filled" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        {/* 背景のアイコン */}
        <BlobContainer>
          <img src={SoccerFieldIcon} alt="画像" />
        </BlobContainer>
        {/* メインの画像 */}
        <Avator>
          <img src={AvatarImg} alt="画像" />
        </Avator>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
