import * as React from "react";

import { CardProps } from ".";
const SvgZigzagDifferent = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".zigzag_different_svg__cls-3{fill:#fff}.zigzag_different_svg__cls-6{fill:#e6e6e6}"
        }
      </style>
    </defs>
    <g id="zigzag_different_svg__Layer_2" data-name="Layer 2">
      <g id="zigzag_different_svg__Layer_4" data-name="Layer 4">
        <g
          id="zigzag_different_svg__zigzag_different"
          data-name="zigzag different"
        >
          <g id="zigzag_different_svg__card_template" data-name="card template">
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
              height={234}
              transform="translate(6.87 4.09)"
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
              d="M80.38 188.16a161.86 161.86 0 0 1-20.95-1.37 160.33 160.33 0 0 1-38.81-10.13l8.8-21.3a137.71 137.71 0 0 0 33 8.58 139.93 139.93 0 0 0 17.92 1.17 135.43 135.43 0 0 0 50.76-9.83l8.9 21.29a158.19 158.19 0 0 1-59.62 11.59Z"
              className="zigzag_different_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a137.27 137.27 0 0 1-50.54-9.68l9.51-23a111.7 111.7 0 0 0 26.47 6.85 112.31 112.31 0 0 0 14.53.95 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.74Z"
              className="zigzag_different_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a87.91 87.91 0 0 0 20.62 5.29 88.55 88.55 0 0 0 11.49.75 86.85 86.85 0 0 0 32-6.08l8.5 20.49a108.78 108.78 0 0 1-40.47 7.77Z"
              className="zigzag_different_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 86.88 86.88 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.56 4 69.25 69.25 0 0 0 8.86.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="zigzag_different_svg__cls-3"
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
            d="m59.26 103.15 20.11 24.22-31.46 22.98 32.33 27.06"
            style={{
              fill: "none",
              stroke: "#e6e6e6",
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={80.29}
            cy={105.47}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={98.74}
            cy={104.34}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={55.57}
            cy={125.01}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={103.38}
            cy={125.01}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={112.57}
            cy={149.14}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={82.08}
            cy={151.1}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="zigzag_different_svg__cls-6"
          />
          <path
            d="m90.18 172.55-.05-.08h-.2c-1.38 0-3.53 1.22-5.33 2.43 1.22-1.8 2.43-3.94 2.43-5.33v-.19l-.09-.06a9.41 9.41 0 0 0-9.71 0l-.09.05v.2c0 1.38 1.21 3.53 2.43 5.33-1.81-1.21-3.95-2.43-5.34-2.43H74v.09a9.42 9.42 0 0 0 0 9.72l.06.09h.2c1.38 0 3.53-1.21 5.33-2.43-1.22 1.8-2.43 3.95-2.43 5.33v.2h.09a9.41 9.41 0 0 0 9.71 0h.09v-.2c0-1.38-1.21-3.53-2.43-5.33 1.8 1.22 4 2.43 5.33 2.43h.2l.05-.09a9.42 9.42 0 0 0 0-9.72Zm-8.1 9.52a25.57 25.57 0 0 1-.36-4.11v-.19h-.18a24.26 24.26 0 0 1-4.11-.36 24.46 24.46 0 0 1 4.11-.36h.18v-.18a25.59 25.59 0 0 1 .36-4.12 23.48 23.48 0 0 1 .36 4.12v.18h.18a24.46 24.46 0 0 1 4.11.36 23.45 23.45 0 0 1-4.11.36h-.18v.23a23.45 23.45 0 0 1-.36 4.07ZM57.91 144.28v-.08h-.2c-1.38 0-3.53 1.22-5.33 2.43 1.22-1.8 2.43-3.94 2.43-5.33v-.19l-.09-.06A9.42 9.42 0 0 0 45 141l-.08.05v.2c0 1.38 1.22 3.53 2.43 5.33-1.8-1.21-3.95-2.43-5.33-2.43h-.2v.09a9.42 9.42 0 0 0 0 9.72v.09H42c1.39 0 3.53-1.21 5.33-2.43-1.21 1.8-2.43 4-2.43 5.33v.2l.08.05a9.42 9.42 0 0 0 9.72 0l.09-.05V157c0-1.38-1.21-3.53-2.43-5.33 1.8 1.22 4 2.43 5.33 2.43h.2v-.09a9.42 9.42 0 0 0 0-9.72Zm-8.1 9.52a25.57 25.57 0 0 1-.36-4.11v-.19h-.18a24.49 24.49 0 0 1-4.12-.36 25.59 25.59 0 0 1 4.12-.36h.18v-.18a25.59 25.59 0 0 1 .36-4.12 23.48 23.48 0 0 1 .36 4.12v.18h.19a25.57 25.57 0 0 1 4.11.36 23.45 23.45 0 0 1-4.11.36h-.19v.19a23.45 23.45 0 0 1-.36 4.11ZM86.17 123.29v-.07H86c-1.16 0-3 1-4.48 2 1-1.51 2-3.31 2-4.47v-.17h-.07a7.87 7.87 0 0 0-8.16 0h-.07v.17c0 1.16 1 3 2 4.47-1.52-1-3.32-2-4.48-2h-.17v.08a8 8 0 0 0-1.13 4.08 7.92 7.92 0 0 0 1.14 4.08v.07h.17c1.16 0 3-1 4.48-2-1 1.52-2 3.32-2 4.48v.16h.07a7.93 7.93 0 0 0 8.16 0h.07V134c0-1.16-1-3-2-4.47 1.52 1 3.32 2 4.48 2h.17v-.07a7.87 7.87 0 0 0 0-8.16Zm-6.8 8a20.75 20.75 0 0 1-.3-3.45v-.16h-.16a20.55 20.55 0 0 1-3.45-.3 20.75 20.75 0 0 1 3.45-.3h.16v-.15a20.55 20.55 0 0 1 .3-3.45 20.75 20.75 0 0 1 .3 3.45v.15h.16a20.55 20.55 0 0 1 3.45.3 20.75 20.75 0 0 1-3.45.3h-.16v.16a20.75 20.75 0 0 1-.3 3.44ZM67 100v-.06h-.13a8.14 8.14 0 0 0-3.49 1.59A8 8 0 0 0 64.91 98v-.13h-.06a6.06 6.06 0 0 0-3.18-.89 6.15 6.15 0 0 0-3.19.88h-.06V98a8.06 8.06 0 0 0 1.6 3.49 8.23 8.23 0 0 0-3.5-1.59h-.13v.06a6.2 6.2 0 0 0 0 6.37v.06h.13a8.05 8.05 0 0 0 3.5-1.59 8.06 8.06 0 0 0-1.6 3.49v.13h.06a6.2 6.2 0 0 0 6.37 0h.06v-.13a8 8 0 0 0-1.59-3.49 8 8 0 0 0 3.49 1.59h.13v-.06A6.2 6.2 0 0 0 67 100Zm-5.31 6.24a15.85 15.85 0 0 1-.24-2.7v-.12h-.12a16 16 0 0 1-2.7-.23 15.85 15.85 0 0 1 2.7-.24h.12v-.12a15.85 15.85 0 0 1 .24-2.7 16 16 0 0 1 .23 2.7v.12H62a15.75 15.75 0 0 1 2.7.24 16 16 0 0 1-2.7.23h-.1v.12a16 16 0 0 1-.23 2.65Z"
            className="zigzag_different_svg__cls-6"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgZigzagDifferent;
