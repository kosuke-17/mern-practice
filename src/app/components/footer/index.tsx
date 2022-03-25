import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-4
    pl-10
    md:pt-12
    pb-1
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
     mb-3
  `}

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-500
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-extrabold
    text-white
    mb-3
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>aboutテキストについて文章をいれる</AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>リンク各種</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">技術</a>
            </ListItem>
            <ListItem>
              <a href="#">ポートフォリオ</a>
            </ListItem>
            <ListItem>
              <a href="#">連絡先</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>その他リンク</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">サポートリンク</a>
            </ListItem>
            <ListItem>
              <a href="#">プライバシーポリシー</a>
            </ListItem>
            <ListItem>
              <a href="#">チーム</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
