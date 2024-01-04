import { pointCardPattern } from "./cardpatterns";

export type cardTypes = "PointCard" | "ActionCard" | "WildCard";

export interface PointCardProperties {
  points: number;
  pattern: pointCardPattern;
  sameSymbol: boolean;
}

export type cardProperties = PointCardProperties;

export interface CardObj {
  type: cardTypes;
  faceUp: boolean;
  properties: cardProperties;
}

export interface PointCard extends CardObj {
  type: "PointCard";
  properties: PointCardProperties;
}
