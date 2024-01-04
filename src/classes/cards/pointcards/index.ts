import { PointCard } from "src/classes/PointCard";
import {
  ThreeSamePattern,
  TwoSamePattern,
  allDiffOneSidePattern,
  allDiffPattern,
  allDiffTwoSidePattern,
  allSamePattern,
  allSameTwoSidePattern,
} from "src/types/cardpatterns";

export const ThreeSameCard = new PointCard(10, ThreeSamePattern, true);
export const TwoSameCard = new PointCard(7, TwoSamePattern, true);
export const AllSameCard = new PointCard(15, allSamePattern, true);
export const AllSameTwoSideCard = new PointCard(
  10,
  allSameTwoSidePattern,
  true
);
export const AllDiffCard = new PointCard(5, allDiffPattern, false);
export const AllDiffOneSide = new PointCard(8, allDiffOneSidePattern, false);
export const AllDiffTwoSide = new PointCard(6, allDiffTwoSidePattern, false);
