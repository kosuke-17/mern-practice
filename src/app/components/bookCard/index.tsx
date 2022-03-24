import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import Marginer from "../marginer";

// カード全体のスタイル
const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    py-1
    px-2
    md:py-2
    md:px-9
  `};
`;
// 各項目のスタイル
const ItemContainer = styled.div`
  ${tw`flex`}
`;
// アイコンのスタイル
const Icon = styled.span`
  ${tw`
    text-green-500
    fill-current
    md:text-base
    mr-1
    md:mr-3
  `}
`;
// 文字のスタイル
const Name = styled.span`
  ${tw`
    text-gray-500
    text-xs
    md:text-sm
  `}
`;
// 縦棒のスタイル
const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
  bg-gray-300
  mx-2
  md:mx-5
`}
`;

const BookCard = (): JSX.Element => {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>hoge</Name>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>hoge</Name>
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="予約する" />
    </CardContainer>
  );
};

export default BookCard;
