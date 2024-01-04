import * as React from "react";

import { CardProps } from ".";
const SvgZigzagRight = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".zigzag_right_svg__cls-3{fill:#fff}.zigzag_right_svg__cls-5{fill:red}.zigzag_right_svg__cls-7{fill:#e6e6e6}"
        }
      </style>
    </defs>
    <g id="zigzag_right_svg__Layer_2" data-name="Layer 2">
      <g id="zigzag_right_svg__Layer_4" data-name="Layer 4">
        <g id="zigzag_right_svg__zigzag_right" data-name="zigzag right">
          <g id="zigzag_right_svg__card_template" data-name="card template">
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
              height={234}
              transform="translate(7.55 4.35)"
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
              d="M80.38 188.16a162 162 0 0 1-20.95-1.37 160.33 160.33 0 0 1-38.81-10.13l8.8-21.3a137.71 137.71 0 0 0 33 8.58 139.93 139.93 0 0 0 17.92 1.17 135.43 135.43 0 0 0 50.76-9.83l8.9 21.29a158.19 158.19 0 0 1-59.62 11.59Z"
              className="zigzag_right_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a137.27 137.27 0 0 1-50.54-9.68l9.51-23a111.46 111.46 0 0 0 26.47 6.85 112.31 112.31 0 0 0 14.53.95 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.74Z"
              className="zigzag_right_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a88.27 88.27 0 0 0 20.62 5.29 88.55 88.55 0 0 0 11.49.75 86.85 86.85 0 0 0 32-6.08l8.5 20.49a108.78 108.78 0 0 1-40.47 7.77Z"
              className="zigzag_right_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.72 86.72 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 87.37 87.37 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.55 4 69.41 69.41 0 0 0 8.87.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="zigzag_right_svg__cls-3"
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
            d="M110.24 139.84a10.38 10.38 0 0 1 3.2-.05 9.5 9.5 0 0 1 8.4 10.73 10.18 10.18 0 0 1-18.69 3.13.68.68 0 0 1 0-.76.79.79 0 0 1 .75-.3 7.06 7.06 0 0 0 8-5.65 6.48 6.48 0 0 0-2.15-5.86.71.71 0 0 1-.21-.74.74.74 0 0 1 .7-.5ZM78 168.11a10.38 10.38 0 0 1 3.2-.05 9.51 9.51 0 0 1 8.4 10.73 10.18 10.18 0 0 1-18.69 3.13.68.68 0 0 1 .05-.76.79.79 0 0 1 .75-.3 7.05 7.05 0 0 0 8-5.65 6.44 6.44 0 0 0-2.14-5.86.68.68 0 0 1-.21-.74.74.74 0 0 1 .64-.5ZM80.28 120.17a7.92 7.92 0 0 1 2.48 0 7.34 7.34 0 0 1 6.5 8.29 7.88 7.88 0 0 1-14.46 2.42.51.51 0 0 1 0-.58.63.63 0 0 1 .58-.24 5.45 5.45 0 0 0 6.22-4.36 5 5 0 0 0-1.6-4.57.54.54 0 0 1-.16-.57.61.61 0 0 1 .44-.39ZM99 97a7.09 7.09 0 0 1 2.11 0 6.26 6.26 0 0 1 5.53 7.06 6.7 6.7 0 0 1-12.3 2.06.45.45 0 0 1 0-.5.54.54 0 0 1 .5-.2 4.63 4.63 0 0 0 5.28-3.71 4.24 4.24 0 0 0-1.41-3.86.46.46 0 0 1-.14-.48A.5.5 0 0 1 99 97Z"
            className="zigzag_right_svg__cls-5"
          />
          <path
            d="m103.06 103.15-20.11 24.22 31.46 22.98-32.33 27.06"
            style={{
              fill: "none",
              stroke: "red",
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={82.03}
            cy={105.47}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={63.58}
            cy={104.34}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={58.94}
            cy={125.01}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={49.74}
            cy={149.14}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={80.23}
            cy={151.1}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="zigzag_right_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgZigzagRight;
