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

export const ThreeSameCard = new PointCard(10, ThreeSamePattern);
export const TwoSameCard = new PointCard(7, TwoSamePattern);
export const AllSameCard = new PointCard(15, allSamePattern);
export const AllSameTwoSideCard = new PointCard(10, allSameTwoSidePattern);
export const AllDiffCard = new PointCard(5, allDiffPattern);
export const AllDIffOneSide = new PointCard(8, allDiffOneSidePattern);
export const AllDiffTwoSide = new PointCard(6, allDiffTwoSidePattern);
