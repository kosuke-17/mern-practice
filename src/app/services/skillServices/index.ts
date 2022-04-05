import { Skill_TYPE } from "../../../typings/skill";
import { apolloClient } from "../../graphql";
import { GET_ALL_SKILLS } from "./queries";

class SkillService {
  public async getSkills(): Promise<Skill_TYPE[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_SKILLS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) {
      return response.data as Skill_TYPE[];
    }
    return [{ id: 0, name: "", img: "", content: "", stackTime: 0 }];
  }
}

export default new SkillService();
