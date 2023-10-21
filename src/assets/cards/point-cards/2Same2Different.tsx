import * as React from "react";

import { CardProps } from ".";
const Svg2Same2Different = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".2_same_2_different_svg__cls-3{fill:#fff}.2_same_2_different_svg__cls-6{fill:#e6e6e6}.2_same_2_different_svg__cls-7{fill:#ddd}"
        }
      </style>
    </defs>
    <g id="2_same_2_different_svg__Layer_2" data-name="Layer 2">
      <g id="2_same_2_different_svg__Layer_4" data-name="Layer 4">
        <g
          id="2_same_2_different_svg___2_same_2_different"
          data-name="2 same 2 different"
        >
          <g
            id="2_same_2_different_svg__card_template"
            data-name="card template"
          >
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
              width={149}
              height={235}
              transform="translate(6.88 3.6)"
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
              d="M80.38 188.16a162 162 0 0 1-20.95-1.37 160.45 160.45 0 0 1-38.81-10.13l8.81-21.3a137.51 137.51 0 0 0 33 8.58 139.93 139.93 0 0 0 17.92 1.17 135.43 135.43 0 0 0 50.76-9.83l8.89 21.29a158.19 158.19 0 0 1-59.62 11.59Z"
              className="2_same_2_different_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a136 136 0 0 1-17.79-1.17 135.55 135.55 0 0 1-32.75-8.51l9.51-23a111.08 111.08 0 0 0 26.47 6.84 110.69 110.69 0 0 0 14.53 1 109.83 109.83 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.7Z"
              className="2_same_2_different_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a87.91 87.91 0 0 0 20.62 5.29 88.67 88.67 0 0 0 11.49.75 86.81 86.81 0 0 0 32-6.08l8.51 20.49a108.87 108.87 0 0 1-40.48 7.77Z"
              className="2_same_2_different_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 87.37 87.37 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.55 4 69.41 69.41 0 0 0 8.87.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="2_same_2_different_svg__cls-3"
            />
            <path d="m104.34 92.06 6.92 16.68a85.21 85.21 0 0 1-31 5.79 85.77 85.77 0 0 1-11.3-.74 86.37 86.37 0 0 1-19.77-5l6.9-16.7a69 69 0 0 0 24.15 4.39 67.56 67.56 0 0 0 24.07-4.42m.55-1.29a66.65 66.65 0 0 1-24.62 4.71 67.26 67.26 0 0 1-8.8-.58 67.76 67.76 0 0 1-15.9-4.09l-7.66 18.54a87.66 87.66 0 0 0 21 5.44 88.54 88.54 0 0 0 11.43.74 86.68 86.68 0 0 0 32.28-6.23l-7.68-18.53Z" />
            <path
              d="m82.08 192.96-8.62 8.27h17.25l-8.63-8.27z"
              style={{
                fill: "red",
                fillRule: "evenodd",
              }}
            />
          </g>
          <path
            d="m83.33 103.7-.44 25.79-5.28 21.77.91 28.27"
            style={{
              fill: "none",
              stroke: "#ddd",
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={98.59}
            cy={103.15}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={63.58}
            cy={104.34}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={58.94}
            cy={125.01}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={49.74}
            cy={149.14}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={112.57}
            cy={149.78}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="2_same_2_different_svg__cls-6"
          />
          <path
            d="M88.67 123.07v-.08h-.17c-1.2 0-3.07 1.05-4.63 2.11 1.06-1.57 2.11-3.43 2.11-4.63v-.17h-.08a8.15 8.15 0 0 0-8.43 0h-.08v.17c0 1.2 1 3.06 2.11 4.63-1.62-1.1-3.5-2.1-4.68-2.1h-.18v.07a8.2 8.2 0 0 0 0 8.44l.05.08h.17c1.2 0 3.07-1.05 4.63-2.11-1.06 1.57-2.11 3.43-2.11 4.63v.17h.08a8.18 8.18 0 0 0 8.43 0h.08v-.17c0-1.2-1.05-3.06-2.11-4.63 1.56 1.06 3.43 2.11 4.63 2.11h.17v-.07a8.2 8.2 0 0 0 0-8.44Zm-7 8.26a22 22 0 0 1-.31-3.57v-.16h-.16a21.91 21.91 0 0 1-3.57-.31 20.82 20.82 0 0 1 3.57-.32h.16v-.16a21.91 21.91 0 0 1 .31-3.57 20 20 0 0 1 .31 3.57v.19h.16a20.82 20.82 0 0 1 3.57.32 22 22 0 0 1-3.57.31H82v.16a20 20 0 0 1-.37 3.54ZM87.19 101v-.07H87c-1 0-2.67.91-4 1.83.92-1.36 1.84-3 1.84-4v-.14h-.06a7 7 0 0 0-3.67-1 7.11 7.11 0 0 0-3.68 1h-.06v.15c0 1 .91 2.67 1.83 4-1.36-.92-3-1.84-4-1.84H75v.06a7.13 7.13 0 0 0 0 7.35v.06h.15c1.05 0 2.67-.92 4-1.84-.92 1.36-1.83 3-1.83 4v.15h.06a7.13 7.13 0 0 0 7.35 0h.06v-.15c0-1-.92-2.67-1.84-4 1.36.92 3 1.84 4 1.84h.15v-.07a7.11 7.11 0 0 0 0-7.34Zm-6.12 7.19a18 18 0 0 1-.28-3.11v-.14h-.14a19 19 0 0 1-3.1-.27 17.06 17.06 0 0 1 3.1-.27h.14v-.13a17.91 17.91 0 0 1 .28-3.11 19.11 19.11 0 0 1 .27 3.11v.13h.14a18.14 18.14 0 0 1 3.11.27 19.32 19.32 0 0 1-3.11.27h-.14v.14a19.21 19.21 0 0 1-.27 3.1Z"
            className="2_same_2_different_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default Svg2Same2Different;
