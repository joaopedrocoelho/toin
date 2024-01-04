import * as React from "react";
import { CardProps } from ".";

const Svg2Different2Same = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".2_different_2_same_svg__cls-3{fill:#fff}.2_different_2_same_svg__cls-6{fill:#e6e6e6}.2_different_2_same_svg__cls-7{fill:#ddd}"
        }
      </style>
    </defs>
    <g id="2_different_2_same_svg__Layer_2" data-name="Layer 2">
      <g id="2_different_2_same_svg__Layer_4" data-name="Layer 4">
        <g
          id="2_different_2_same_svg___2_same_2_different"
          data-name="2 same 2 different"
        >
          <g
            id="2_different_2_same_svg__card_template"
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
              width={148}
              height={234}
              transform="translate(7.66 4.06)"
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
              d="M80.38 188.16a161.86 161.86 0 0 1-20.95-1.37 160.45 160.45 0 0 1-38.81-10.13l8.81-21.3a137.51 137.51 0 0 0 33 8.58 139.93 139.93 0 0 0 17.92 1.17 135.43 135.43 0 0 0 50.76-9.83l8.89 21.29a158.19 158.19 0 0 1-59.62 11.59Z"
              className="2_different_2_same_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a137.27 137.27 0 0 1-50.54-9.68l9.51-23a111.58 111.58 0 0 0 26.47 6.85 112.31 112.31 0 0 0 14.53.95 109.83 109.83 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.74Z"
              className="2_different_2_same_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a88.27 88.27 0 0 0 20.62 5.29 88.55 88.55 0 0 0 11.49.75 86.85 86.85 0 0 0 32-6.08l8.51 20.49a108.87 108.87 0 0 1-40.48 7.77Z"
              className="2_different_2_same_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.24 87.24 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 87.37 87.37 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.56 4 69.25 69.25 0 0 0 8.86.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="2_different_2_same_svg__cls-3"
            />
            <path d="m104.34 92.06 6.92 16.68a85.21 85.21 0 0 1-31 5.79 85.77 85.77 0 0 1-11.3-.74 86.37 86.37 0 0 1-19.77-5l6.91-16.7a69 69 0 0 0 24.14 4.39 67.56 67.56 0 0 0 24.07-4.42m.55-1.29a66.65 66.65 0 0 1-24.62 4.71 67.26 67.26 0 0 1-8.8-.58 67.76 67.76 0 0 1-15.9-4.09l-7.66 18.54a87.66 87.66 0 0 0 21 5.44 88.54 88.54 0 0 0 11.43.74 86.68 86.68 0 0 0 32.28-6.23l-7.68-18.53Z" />
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
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={63.58}
            cy={104.34}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={58.94}
            cy={125.01}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={49.74}
            cy={149.14}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={112.57}
            cy={149.78}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="2_different_2_same_svg__cls-6"
          />
          <path
            d="M72.36 156.09v.07h.17c1.21 0 3.06-1.09 4.61-2.16-1 1.58-2.07 3.45-2.06 4.65v.17l.07.05a8.2 8.2 0 0 0 8.44-.1l.07-.05v-.17c0-1.2-1.09-3.05-2.16-4.6C83.14 155 85 156 86.21 156h.18v-.08a8.18 8.18 0 0 0-.1-8.43v-.08h-.17c-1.2 0-3 1.09-4.6 2.16 1-1.57 2.07-3.45 2-4.65v-.17h-.08a8.06 8.06 0 0 0-4.23-1.13 8.18 8.18 0 0 0-4.2 1.22h-.08v.16c0 1.2 1.09 3 2.16 4.6-1.57-1-3.45-2.07-4.65-2.05h-.17v.08a8.2 8.2 0 0 0 .1 8.44Zm6.94-8.35a20.45 20.45 0 0 1 .35 3.57v.16h.16a20.44 20.44 0 0 1 3.57.27 20.35 20.35 0 0 1-3.57.35h-.15v.15a20.49 20.49 0 0 1-.27 3.58 22.48 22.48 0 0 1-.35-3.57v-.16h-.16a20.49 20.49 0 0 1-3.58-.27 22.6 22.6 0 0 1 3.57-.35H79v-.15a20.57 20.57 0 0 1 .3-3.58ZM72.38 181.89l.05.08h.19c1.34 0 3.4-1.21 5.12-2.4-1.15 1.75-2.3 3.84-2.28 5.17v.19h.09a9.08 9.08 0 0 0 9.38-.11l.09-.05v-.19c0-1.33-1.22-3.39-2.41-5.12 1.75 1.15 3.84 2.3 5.18 2.29H88v-.08a9.28 9.28 0 0 0 1.28-4.67 9.07 9.07 0 0 0-1.36-4.68l-.06-.08h-.19c-1.34 0-3.4 1.21-5.12 2.4 1.15-1.75 2.3-3.84 2.29-5.17v-.19l-.08-.05a9.1 9.1 0 0 0-9.39.11h-.08v.19c0 1.33 1.21 3.39 2.41 5.12-1.76-1.16-3.84-2.3-5.18-2.29h-.19v.08a9.1 9.1 0 0 0 .11 9.39Zm7.71-9.28a23.23 23.23 0 0 1 .4 4v.18h.18a24.87 24.87 0 0 1 4 .3 23.47 23.47 0 0 1-4 .4h-.17v.18a23.54 23.54 0 0 1-.3 4 23.37 23.37 0 0 1-.39-4v-.17h-.17a24.68 24.68 0 0 1-4-.3 23.25 23.25 0 0 1 4-.4h.17v-.18a24.64 24.64 0 0 1 .28-4.01Z"
            className="2_different_2_same_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default Svg2Different2Same;
