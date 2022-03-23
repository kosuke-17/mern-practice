import styled from "styled-components";
import tw from "twin.macro";

// ナビゲーションリスト全体のスタイル
// list-none : リストのスタイルを無効にする
const ListContainer = styled.div`
  ${tw`
    flex
    list-none
  `}
`;

// ナビゲーションのスタイル
const NavItem = styled.div`
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
