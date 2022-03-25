import styled from "styled-components";
import tw from "twin.macro";
import { ISkill } from "../../../typings/skill";
import Skill from "../../components/skill";
import ReactImg from "../../../assets/images/react.png";
import NextImg from "../../../assets/images/nextjs.png";
import TSImg from "../../../assets/images/typescript.png";

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

const TopSkills = () => {
  const testSkill1: ISkill = {
    name: "TypeScript",
    mileage: "10k",
    thumbnailSrc: TSImg,
    dailyPrice: 40,
    monthlyPrice: 50,
    gearType: "Auto",
    gas: "Petrol",
  };
  const testSkill2: ISkill = {
    name: "TypeScript",
    mileage: "10k",
    thumbnailSrc: ReactImg,
    dailyPrice: 40,
    monthlyPrice: 50,
    gearType: "Auto",
    gas: "Petrol",
  };
  const testSkill3: ISkill = {
    name: "React",
    mileage: "10k",
    thumbnailSrc: NextImg,
    dailyPrice: 40,
    monthlyPrice: 50,
    gearType: "Auto",
    gas: "Petrol",
  };
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
