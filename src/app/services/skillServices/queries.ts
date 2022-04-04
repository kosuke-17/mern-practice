import { gql } from "@apollo/client";

export const GET_ALL_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
      img
      content
      stackTime
    }
  }
`;
