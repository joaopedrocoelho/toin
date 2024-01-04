import * as React from "react";

import { CardProps } from ".";
const SvgStraightDifferent = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".straight_different_svg__cls-3{fill:#fff}.straight_different_svg__cls-6{fill:#e6e6e6}.straight_different_svg__cls-7{fill:#ddd}"
        }
      </style>
    </defs>
    <g id="straight_different_svg__Layer_2" data-name="Layer 2">
      <g id="straight_different_svg__Layer_4" data-name="Layer 4">
        <g
          id="straight_different_svg__straight_different"
          data-name="straight different"
        >
          <g
            id="straight_different_svg__card_template"
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
              height={235}
              transform="translate(7.84 3.47)"
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
              className="straight_different_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a136.16 136.16 0 0 1-17.79-1.17 135.55 135.55 0 0 1-32.75-8.51l9.51-23a111.21 111.21 0 0 0 26.47 6.84 110.57 110.57 0 0 0 14.53 1 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.7Z"
              className="straight_different_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a87.91 87.91 0 0 0 20.62 5.29 88.67 88.67 0 0 0 11.49.75 86.81 86.81 0 0 0 32-6.08l8.5 20.49a108.82 108.82 0 0 1-40.47 7.77Z"
              className="straight_different_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 86.88 86.88 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.55 4 69.41 69.41 0 0 0 8.87.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="straight_different_svg__cls-3"
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
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={63.58}
            cy={104.34}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={58.94}
            cy={125.01}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={49.74}
            cy={149.14}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={112.57}
            cy={149.78}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="straight_different_svg__cls-6"
          />
          <path
            d="M88.74 172.16v-.09h-.2c-1.42 0-3.61 1.24-5.45 2.49 1.24-1.85 2.48-4 2.48-5.45v-.2l-.09-.05a9.63 9.63 0 0 0-9.92 0l-.09.06v.2c0 1.41 1.23 3.6 2.48 5.44-1.84-1.24-4-2.48-5.45-2.48h-.2l-.06.09a9.68 9.68 0 0 0 0 9.93l.06.09h.2c1.42 0 3.61-1.24 5.45-2.48-1.25 1.84-2.48 4-2.48 5.44v.2l.09.06a9.6 9.6 0 0 0 9.92 0h.09v-.2c0-1.42-1.24-3.61-2.48-5.45 1.84 1.25 4 2.49 5.45 2.49h.2v-.09a9.6 9.6 0 0 0 0-9.92Zm-8.27 9.71a25.32 25.32 0 0 1-.37-4.2v-.18h-.19a25.46 25.46 0 0 1-4.2-.36 24.38 24.38 0 0 1 4.2-.37h.19v-.19a25.32 25.32 0 0 1 .37-4.2 25.32 25.32 0 0 1 .37 4.2v.19H81a24.28 24.28 0 0 1 4.2.37 24.6 24.6 0 0 1-4.2.36h-.19v.18a25.32 25.32 0 0 1-.34 4.2ZM88.56 146.14l-.06-.09h-.2c-1.42 0-3.61 1.24-5.45 2.49 1.25-1.85 2.49-4 2.49-5.45v-.2h-.09a9.52 9.52 0 0 0-5-1.39 9.63 9.63 0 0 0-5 1.38l-.09.06v.2c0 1.41 1.24 3.6 2.48 5.44-1.84-1.24-4-2.48-5.45-2.48h-.2l-.06.09a9.66 9.66 0 0 0-1.37 5 9.54 9.54 0 0 0 1.38 5v.09h.21c1.41 0 3.6-1.24 5.44-2.48-1.24 1.84-2.48 4-2.48 5.44v.2l.09.06a9.6 9.6 0 0 0 9.92 0l.09-.05v-.2c0-1.42-1.24-3.61-2.49-5.45 1.85 1.25 4 2.49 5.45 2.49h.2l.06-.09a9.6 9.6 0 0 0 0-9.92Zm-8.28 9.71a24.41 24.41 0 0 1-.36-4.2v-.18h-.18a25.35 25.35 0 0 1-4.2-.36 24.28 24.28 0 0 1 4.2-.37h.18v-.19a25.46 25.46 0 0 1 .36-4.2 24.28 24.28 0 0 1 .37 4.2v.19h.19a24.28 24.28 0 0 1 4.2.37 24.41 24.41 0 0 1-4.2.36h-.19v.18a24.28 24.28 0 0 1-.37 4.2ZM88.67 123.07v-.08h-.17c-1.2 0-3.07 1.05-4.63 2.11 1.06-1.57 2.11-3.43 2.11-4.63v-.17h-.08a8.15 8.15 0 0 0-8.43 0h-.08v.17c0 1.2 1 3.06 2.11 4.63-1.62-1.1-3.5-2.1-4.68-2.1h-.18v.07a8.2 8.2 0 0 0 0 8.44l.05.08h.17c1.2 0 3.07-1.05 4.63-2.11-1.06 1.57-2.11 3.43-2.11 4.63v.17h.08a8.18 8.18 0 0 0 8.43 0h.08v-.17c0-1.2-1.05-3.06-2.11-4.63 1.56 1.06 3.43 2.11 4.63 2.11h.17v-.07a8.2 8.2 0 0 0 0-8.44Zm-7 8.26a22 22 0 0 1-.31-3.57v-.16h-.16a21.91 21.91 0 0 1-3.57-.31 20.82 20.82 0 0 1 3.57-.32h.16v-.16a21.91 21.91 0 0 1 .31-3.57 20 20 0 0 1 .31 3.57v.19h.16a20.82 20.82 0 0 1 3.57.32 22 22 0 0 1-3.57.31H82v.16a20 20 0 0 1-.37 3.54ZM87.19 101v-.07H87c-1 0-2.67.91-4 1.83.92-1.36 1.84-3 1.84-4v-.14h-.06a7 7 0 0 0-3.67-1 7.11 7.11 0 0 0-3.68 1h-.06v.15c0 1 .91 2.67 1.83 4-1.36-.92-3-1.84-4-1.84H75v.06a7.13 7.13 0 0 0 0 7.35v.06h.15c1.05 0 2.67-.92 4-1.84-.92 1.36-1.83 3-1.83 4v.15h.06a7.13 7.13 0 0 0 7.35 0h.06v-.15c0-1-.92-2.67-1.84-4 1.36.92 3 1.84 4 1.84h.15v-.07a7.11 7.11 0 0 0 0-7.34Zm-6.12 7.19a18 18 0 0 1-.28-3.11v-.14h-.14a19 19 0 0 1-3.1-.27 17.06 17.06 0 0 1 3.1-.27h.14v-.13a17.91 17.91 0 0 1 .28-3.11 19.11 19.11 0 0 1 .27 3.11v.13h.14a18.14 18.14 0 0 1 3.11.27 19.32 19.32 0 0 1-3.11.27h-.14v.14a19.21 19.21 0 0 1-.27 3.1Z"
            className="straight_different_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgStraightDifferent;
