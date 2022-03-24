import { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import Marginer from "../marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

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
  ${tw`flex relative`}
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
// スモールアイコン
const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`;
// 文字のスタイル
const Name = styled.span`
  ${tw`
    text-gray-500
    text-xs
    md:text-sm
    cursor-pointer
    select-none
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
// カレンダーのスタイル
// user-select: ユーザーがテキストを範囲選択できるかどうかを制御
const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: -75px;
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

const BookCard = (): JSX.Element => {
  const date = { start: "開始日", end: "終了日" };
  // 開始日
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  // 終了日
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isEndCalendarOpen, setEndCalendarOpen] = useState(false);

  // カレンダー表示:argで表示させるカレンダーを切り替えている
  const toggleStartDateCalendar = (date: string) => {
    switch (date) {
      case "開始日":
        setStartCalendarOpen(!isStartCalendarOpen);
        if (isEndCalendarOpen) setEndCalendarOpen(false);
        break;
      case "終了日":
        setEndCalendarOpen(!isEndCalendarOpen);
        if (isStartCalendarOpen) setStartCalendarOpen(false);
        break;
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={() => toggleStartDateCalendar(date.start)}>
          {date.start}
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={() => toggleStartDateCalendar(date.end)}>
          {date.end}
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isEndCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isEndCalendarOpen && (
          <DateCalendar value={endDate} onChange={setEndDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="予約する" />
    </CardContainer>
  );
};

export default BookCard;
