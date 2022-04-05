import { createSlice } from "@reduxjs/toolkit";
import { IHomePageSlice } from "./type";

const initialState: IHomePageSlice = {
  topSkills: [],
};
// actionとsliceを一緒に管理
export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopSkills: (state, action) => {
      state.topSkills = action.payload;
    },
  },
});

export const { setTopSkills } = homePageSlice.actions;
export default homePageSlice.reducer;
