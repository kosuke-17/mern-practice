import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Skill_TYPE } from "../../../typings/skill";
import Button from "../button";

interface Skill_TYPE_PROPS extends Skill_TYPE {}

const SkillContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    m-1
    sm:m-3
  `};
`;

const SkillThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SkillName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
  `}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`;
//
// color: inherit 親の色を継承する
const SmallText = styled.p`
  color: inherit;
  ${tw`
  inline-flex
    text-xs
    font-thin
  `};
`;

const DaylyPrice = styled.h5`
  ${tw`
    text-green-500
    font-bold
    text-sm
    mr-3
  `}
`;
const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const SkillDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

const SkillDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const SkillInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    my-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

const Skill = (props: Skill_TYPE_PROPS) => {
  const { id, name, img, content, stackTime } = props;
  return (
    <SkillContainer>
      <SkillThumbnail>
        <img src={img} alt="スキル" />
      </SkillThumbnail>
      <SkillName>{name}</SkillName>
      {/* <PricesContainer>
        <DaylyPrice>
          {dailyPrice}
          <SmallText>円/日</SmallText>
        </DaylyPrice>
        <MonthlyPrice>
          {monthlyPrice}
          <SmallText>円/月</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <SkillDetailsContainer>
        <SkillDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <SkillInfo>{mileage}</SkillInfo>
        </SkillDetail>
        <SkillDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <SkillInfo>{gearType}</SkillInfo>
        </SkillDetail>
        <SkillDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <SkillInfo>{gas}</SkillInfo>
        </SkillDetail>
      </SkillDetailsContainer> */}
      <RentButton text="レントボタン" />
    </SkillContainer>
  );
};

export default Skill;
