import { Skill } from "../../../typings/skill";
import { apolloClient } from "../../graphql";
import { GET_ALL_SKILLS } from "./queries";

class SkillService {
  public async getSkills(): Promise<Skill[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_SKILLS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) {
      return response.data as Skill[];
    }
    return [{ id: "", name: "", img: "", content: "", stackTime: 0 }];
  }
}

export default new SkillService();
