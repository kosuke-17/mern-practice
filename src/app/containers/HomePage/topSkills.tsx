import styled from "styled-components";
import tw from "twin.macro";
import { Skill_TYPE } from "../../../typings/skill";
import Skill from "../../components/skill";
import ReactImg from "../../../assets/images/react.png";
import NextImg from "../../../assets/images/nextjs.png";
import TSImg from "../../../assets/images/typescript.png";
import skillServices from "../../services/skillServices";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { setTopSkills } from "./slice";
import { useDispatch } from "react-redux";

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
// ダミーデータ
const testSkill1 = {
  id: 1,
  name: "TypeScript",
  img: TSImg,
  content: "TSのCONTENT",
  stackTime: 330,
};
const testSkill2 = {
  id: 1,
  name: "Next.js",
  img: NextImg,
  content: "Next.jsのCONTENT",
  stackTime: 40,
};
const testSkill3 = {
  id: 1,
  name: "React",
  img: ReactImg,
  content: "ReactのCONTENT",
  stackTime: 20,
};

const actionDispatch = (dispatch: Dispatch) => ({
  setTopSkills: (skills: Skill_TYPE[]) => dispatch(setTopSkills(skills)),
});

const TopSkills = () => {
  const { setTopSkills } = actionDispatch(useDispatch());
  const fetchTopSkills = async () => {
    const skills = await skillServices.getSkills().catch((err) => {
      console.log("Error" + err);
    });
    console.dir(skills);
    // reduxで状態管理する
    if (skills) setTopSkills(skills);
  };

  useEffect(() => {
    fetchTopSkills();
  }, []);
  return (
    <TopSkillsContainer>
      <Title>スキルを探す(タイトル)</Title>
      <SkillsContainer>
        <Skill {...testSkill1} />
        <Skill {...testSkill2} />
        <Skill {...testSkill3} />
        <Skill {...testSkill1} />
        <Skill {...testSkill2} />
        <Skill {...testSkill3} />
      </SkillsContainer>
    </TopSkillsContainer>
  );
};

export default TopSkills;
