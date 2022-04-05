import styled from "styled-components";
import tw from "twin.macro";
import { Skill_TYPE } from "../../../typings/skill";
import Skill from "../../components/skill";
import skillServices from "../../services/skillServices";
import { useEffect } from "react";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setTopSkills } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopSkills } from "./selectors";

const TopSkillsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    md:px-0
    mb-10
  `}
`;
const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const SkillsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const EmptySkills = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    pt-4
    text-gray-500
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopSkills: (skills: Skill_TYPE[]) => dispatch(setTopSkills(skills)),
});

const stateSelector = createSelector(makeSelectTopSkills, (topSkills) => ({
  topSkills,
}));

const TopSkills = () => {
  const { topSkills } = useSelector(stateSelector);
  const { setTopSkills } = actionDispatch(useDispatch());
  const fetchTopSkills = async () => {
    const skills = await skillServices.getSkills().catch((err) => {
      console.log("Error" + err);
    });
    // reduxで状態管理する
    if (skills) setTopSkills(skills);
  };

  useEffect(() => {
    fetchTopSkills();
  }, []);

  // 取得データが存在しなければtrue
  const isEmptyTopSkills = !topSkills || topSkills.skills.length === 0;
  // const isEmptyTopSkills = true;

  // 取得データが存在すればSkillコンポーネントを返す
  const skills =
    (!isEmptyTopSkills &&
      topSkills.skills.map((skillData) => {
        return <Skill key={skillData.id} {...skillData} />;
      })) ||
    [];
  return (
    <TopSkillsContainer>
      <Title>マイスキルセット</Title>
      {isEmptyTopSkills && <EmptySkills>スキルが存在しません!</EmptySkills>}
      {!isEmptyTopSkills && <SkillsContainer>{skills}</SkillsContainer>}
    </TopSkillsContainer>
  );
};

export default TopSkills;
