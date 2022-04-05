import { createSelector } from "@reduxjs/toolkit";
import { IRootAppState } from "../../../typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopSkills = createSelector(
  selectHomePage,
  (homePage) => homePage.topSkills
);
