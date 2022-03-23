import styled from "styled-components";
import tw from "twin.macro";
// typingディレクトリよりreact-burger-menuを
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

// ナビゲーションリスト全体のスタイル
// list-none : リストのスタイルを無効にする
const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

// ナビゲーションのスタイル
const NavItem = styled.li`
  ${tw`
  text-xs
  md:text-base
  text-black
  mr-1
  md:mr-5
  cursor-pointer
  transition
  duration-300
  ease-in-out
  hover:text-gray-700
`}
`;

const NavItems = () => {
  // 画面のサイズから真偽値を受け取る
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  // モバイルの場合、ハンバーガーメニューを利用
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem>
            <a href="#">Home</a>
          </NavItem>
          <NavItem>
            <a href="#">技術</a>
          </NavItem>
          <NavItem>
            <a href="#">ポートフォリオ</a>
          </NavItem>
          <NavItem>
            <a href="#">連絡先</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">技術</a>
      </NavItem>
      <NavItem>
        <a href="#">ポートフォリオ</a>
      </NavItem>
      <NavItem>
        <a href="#">連絡先</a>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
