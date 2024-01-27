import * as React from "react";

import { CardProps } from "./cards/point-cards";
const SvgClover = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 500 500"
    {...props}
  >
    <path d="m464.3 121.5-1.4-2.3-2.7-.1h-2.6c-36.6 0-93.4 32.1-141 64.3 32.2-47.7 64.3-104.4 64.3-141v-2.5l-.1-2.7-2.3-1.4C339.8 12.3 295.3 0 250 0s-89.8 12.3-128.5 35.7l-2.3 1.4-.1 2.7v2.5c0 36.6 32.1 93.4 64.3 141C135.7 151.2 78.9 119 42.3 119h-2.6l-2.7.1-1.4 2.3C12.3 160.2 0 204.7 0 250s12.3 89.8 35.7 128.5l1.4 2.3 2.7.1h2.6c36.6 0 93.4-32.1 141-64.3-32.2 47.7-64.3 104.4-64.3 141v2.5l.1 2.7 2.3 1.4C160.2 487.7 204.7 500 250 500s89.8-12.3 128.5-35.7l2.3-1.4.1-2.7v-2.5c0-36.6-32.1-93.4-64.3-141 47.7 32.2 104.4 64.3 141 64.3h2.6l2.7-.1 1.4-2.3C487.7 339.8 500 295.3 500 250s-12.3-89.8-35.7-128.5ZM250 373.2c-5.4-27-8.9-66.4-9.5-108.8l-.1-4.8-4.8-.1c-42.5-.6-81.9-4.2-108.8-9.5 27-5.4 66.4-8.9 108.8-9.5l4.8-.1.1-4.8c.6-42.5 4.2-81.9 9.5-108.8 5.4 27 8.9 66.4 9.5 108.8l.1 4.8 4.8.1c42.5.6 81.9 4.2 108.8 9.5-27 5.4-66.4 8.9-108.8 9.5l-4.8.1-.1 4.8c-.6 42.4-4.1 81.8-9.5 108.8Z" />
  </svg>
);
export default SvgClover;
