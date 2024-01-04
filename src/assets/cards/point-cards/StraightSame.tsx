import * as React from "react";

import { CardProps } from ".";
const SvgStraightSame = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".straight_same_svg__cls-3{fill:#fff}.straight_same_svg__cls-5{fill:red}.straight_same_svg__cls-7{fill:#e6e6e6}"
        }
      </style>
    </defs>
    <g id="straight_same_svg__Layer_2" data-name="Layer 2">
      <g id="straight_same_svg__Layer_4" data-name="Layer 4">
        <g id="straight_same_svg__straight_same" data-name="straight same">
          <g id="straight_same_svg__card_template" data-name="card template">
            <rect
              width={158.74}
              height={246.61}
              rx={16.62}
              style={{
                fill: "#1f0b32",
              }}
            />
            <image
              xlinkHref="data:image/png;base64,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"
              width={148}
              height={235}
              transform="translate(7.69 3.47)"
            />
            <text
              style={{
                fontSize: "40.15px",
                fill: "#ffea5c",
                fontFamily: "MyriadPro-Regular,Myriad Pro",
              }}
              transform="matrix(1.19 0 0 1 116.23 47.22)"
            >
              {pointsValue}
            </text>
            <path
              d="M80.38 188.16a161.86 161.86 0 0 1-20.95-1.37 160.45 160.45 0 0 1-38.81-10.13l8.8-21.3a137.71 137.71 0 0 0 33 8.58 139.93 139.93 0 0 0 17.92 1.17 135.43 135.43 0 0 0 50.76-9.83l8.9 21.29a158.19 158.19 0 0 1-59.62 11.59Z"
              className="straight_same_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a136.16 136.16 0 0 1-17.79-1.17 135.55 135.55 0 0 1-32.75-8.51l9.51-23a111.21 111.21 0 0 0 26.47 6.84 110.57 110.57 0 0 0 14.53 1 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.7Z"
              className="straight_same_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a87.91 87.91 0 0 0 20.62 5.29 88.67 88.67 0 0 0 11.49.75 86.81 86.81 0 0 0 32-6.08l8.5 20.49a108.82 108.82 0 0 1-40.47 7.77Z"
              className="straight_same_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 86.88 86.88 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.55 4 69.41 69.41 0 0 0 8.87.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="straight_same_svg__cls-3"
            />
            <path d="m104.34 92.06 6.92 16.68a85.21 85.21 0 0 1-31 5.79 85.77 85.77 0 0 1-11.3-.74 86.37 86.37 0 0 1-19.77-5l6.91-16.7a69 69 0 0 0 24.14 4.39 67.56 67.56 0 0 0 24.07-4.42m.55-1.29a66.65 66.65 0 0 1-24.62 4.71 67.26 67.26 0 0 1-8.8-.58 67.76 67.76 0 0 1-15.9-4.09l-7.66 18.54a87.66 87.66 0 0 0 21 5.44 88.54 88.54 0 0 0 11.43.74 86.68 86.68 0 0 0 32.28-6.23l-7.68-18.53Z" />
            <path
              d="m82.08 192.96-8.62 8.27h17.25l-8.63-8.27z"
              style={{
                fillRule: "evenodd",
                fill: "red",
              }}
            />
          </g>
          <path
            d="M75.93 141.79a10.77 10.77 0 0 1 3.21 0 9.51 9.51 0 0 1 8.4 10.72 10.18 10.18 0 0 1-18.7 3.13.68.68 0 0 1 0-.76.81.81 0 0 1 .75-.3 7 7 0 0 0 8-5.64 6.47 6.47 0 0 0-2.06-5.94.7.7 0 0 1-.21-.73.78.78 0 0 1 .61-.48ZM78 168.11a10.38 10.38 0 0 1 3.2-.05 9.51 9.51 0 0 1 8.4 10.73 10.18 10.18 0 0 1-18.69 3.13.68.68 0 0 1 .05-.76.79.79 0 0 1 .75-.3 7.05 7.05 0 0 0 8-5.65 6.44 6.44 0 0 0-2.14-5.86.68.68 0 0 1-.21-.74.74.74 0 0 1 .64-.5ZM80.28 120.17a7.92 7.92 0 0 1 2.48 0 7.34 7.34 0 0 1 6.5 8.29 7.88 7.88 0 0 1-14.46 2.42.51.51 0 0 1 0-.58.63.63 0 0 1 .58-.24 5.45 5.45 0 0 0 6.22-4.36 5 5 0 0 0-1.6-4.57.54.54 0 0 1-.16-.57.61.61 0 0 1 .44-.39ZM80.82 98.22a7.09 7.09 0 0 1 2.11 0 6.25 6.25 0 0 1 5.53 7 6.7 6.7 0 0 1-12.3 2.06.45.45 0 0 1 0-.5.54.54 0 0 1 .5-.2A4.63 4.63 0 0 0 82 102.9a4.24 4.24 0 0 0-1.44-3.9.46.46 0 0 1-.14-.48.54.54 0 0 1 .4-.3Z"
            className="straight_same_svg__cls-5"
          />
          <path
            d="m85.09 103.7-.43 25.79-5.29 21.77.91 28.27"
            style={{
              fill: "none",
              stroke: "red",
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={98.59}
            cy={103.15}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={63.58}
            cy={104.34}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={58.94}
            cy={125.01}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={49.74}
            cy={149.14}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={112.57}
            cy={149.78}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="straight_same_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgStraightSame;
