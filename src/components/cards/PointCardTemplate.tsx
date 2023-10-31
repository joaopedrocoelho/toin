import * as React from "react";
import type { SVGProps } from "react";
import { pointCardPattern } from "src/types/cardpatterns";

interface Props extends SVGProps<SVGSVGElement> {
  value: number;
  pattern: pointCardPattern;
}
const PointCardTemplate = ({ value, pattern, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 158.74 246.61"
      {...props}
    >
      <defs>
        <style>
          {
            ".template_svg__cls-2{fill:#ffea5c}.template_svg__cls-3,.template_svg__cls-6{fill:red}.template_svg__cls-3{fill-rule:evenodd}.template_svg__cls-4{fill:#0f0}.template_svg__cls-5{fill:#e6e6e6}"
          }
        </style>
      </defs>
      <g id="template_svg__Layer_2" data-name="Layer 2">
        <g id="template_svg__new_cards" data-name="new cards">
          <g id="template_svg__NEW_card_template" data-name="NEW card template">
            <rect
              width={158.74}
              height={246.61}
              rx={16.62}
              style={{
                fill: "#1f0b32",
              }}
            />
            <text
              className="template_svg__cls-2 text-2xl font-bold"
              transform="matrix(1.19 0 0 1 115 50.51)"
            >
              {value}
            </text>
            <text
              className="template_svg__cls-2 text-xl font-bold"
              transform="matrix(-1.30 0 0 -1 45 196.62)"
            >
              {value}
            </text>
            <path
              d="m79.37 193.86-8.63 8.27H88l-8.63-8.27z"
              className="template_svg__cls-3"
            />
            <image
              xlinkHref="data:image/png;base64,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"
              width={148}
              height={235}
              transform="translate(5.24 5.79)"
            />
            <g id="template_svg__pattern_base" data-name="pattern base">
              <g id="template_svg__innerLayerLeft">
                {pattern[0][0] === 2 && (
                  <path
                    id="template_svg__random"
                    d="m45.89 64.12-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                  />
                )}
                {pattern[0][0] === 0 && (
                  <circle
                    cx={45.89}
                    cy={73.09}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[0][0] === 1 && (
                  <path
                    d="m46.65 82.52-1.38-3a.6.6 0 0 0-1-.17L42 81.7a.59.59 0 0 1-1-.53l.66-3.27a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.3-.39a.6.6 0 0 0 .46-.87l-1.55-2.94a.6.6 0 0 1 .82-.8l2.9 1.64a.6.6 0 0 0 .88-.44l.49-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.38a.6.6 0 0 1 1 .53l-.67 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.47 2.31a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.3.37a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.3a.6.6 0 0 1-1.16.08Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__innerLayerMid">
                {pattern[0][1] === 2 && (
                  <path
                    id="template_svg__random-2"
                    d="m79.37 64.12-9.43 6.85 3.6 11.09H85.2l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[0][1] === 0 && (
                  <circle
                    cx={79.37}
                    cy={73.09}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[0][1] === 1 && (
                  <path
                    d="m80.13 82.52-1.38-3a.6.6 0 0 0-1-.17l-2.29 2.35a.59.59 0 0 1-1-.53l.66-3.27a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1L70 72a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-2.94a.6.6 0 0 1 .82-.8l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.38a.59.59 0 0 1 1 .53l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.5 2.34a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.3.37a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.3a.6.6 0 0 1-1.16.08Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__innerLayerRIght">
                {pattern[0][2] === 2 && (
                  <path
                    id="template_svg__random-3"
                    d="m112.85 64.12-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[0][2] === 0 && (
                  <circle
                    cx={112.85}
                    cy={73.09}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[0][2] === 1 && (
                  <path
                    d="m113.61 82.52-1.38-3a.6.6 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.53l.67-3.27a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-2.94a.6.6 0 0 1 .82-.8l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.38a.59.59 0 0 1 1 .53l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.31.37a.6.6 0 0 0-.46.87l1.55 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.3a.6.6 0 0 1-1.15.1Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__thirdLayerLeft">
                {pattern[1][0] === 2 && (
                  <path
                    id="template_svg__random-4"
                    d="m45.89 97.6-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[1][0] === 0 && (
                  <circle
                    cx={45.89}
                    cy={106.57}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[1][0] === 1 && (
                  <path
                    d="m46.65 116-1.38-3a.6.6 0 0 0-1-.17L42 115.18a.6.6 0 0 1-1-.54l.66-3.26a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.42-2.24a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13L40 104a.6.6 0 0 0 .46-.87l-1.55-2.95a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44L44 97.3a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17L49.8 98a.6.6 0 0 1 1 .53l-.67 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.3.37a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.14.08Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__thirdLayerMid">
                {pattern[1][1] === 2 && (
                  <path
                    id="template_svg__random-5"
                    d="m79.37 97.6-9.43 6.85 3.6 11.09H85.2l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[1][1] === 0 && (
                  <circle
                    cx={79.37}
                    cy={106.57}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[1][1] === 1 && (
                  <path
                    d="m80.13 116-1.38-3a.6.6 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.66-3.26a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.47-2.27a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-2.95a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17L83.28 98a.59.59 0 0 1 1 .53l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.3.37a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.15.08Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__thirdLayerRight">
                {pattern[1][2] === 2 && (
                  <path
                    id="template_svg__random-6"
                    d="m112.85 97.6-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[1][2] === 0 && (
                  <circle
                    cx={112.85}
                    cy={106.57}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[1][2] === 1 && (
                  <path
                    d="m113.61 116-1.38-3a.6.6 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.67-3.26a.59.59 0 0 0-.69-.7l-3.28.56a.6.6 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13L107 104a.59.59 0 0 0 .46-.87l-1.54-2.95a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.24-2.31a.59.59 0 0 1 1 .53l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.6.6 0 0 1-.2 1.13l-3.31.37a.6.6 0 0 0-.46.87l1.55 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.15.08Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__secondLayerLeft">
                {pattern[2][0] === 2 && (
                  <path
                    id="template_svg__random-7"
                    d="m45.89 131.08-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[2][0] === 0 && (
                  <circle
                    cx={45.89}
                    cy={140.05}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[2][0] === 1 && (
                  <path
                    d="m46.65 149.48-1.38-3a.6.6 0 0 0-1-.17L42 148.66a.6.6 0 0 1-1-.54l.66-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.31-.38a.6.6 0 0 0 .46-.87l-1.55-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.67 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.3.38a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.18.2Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__secondLayeMid">
                {pattern[2][1] === 2 && (
                  <path
                    id="template_svg__random-8"
                    d="m79.37 131.08-9.43 6.85 3.6 11.09H85.2l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[2][1] === 0 && (
                  <circle
                    cx={79.37}
                    cy={140.05}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[2][1] === 1 && (
                  <path
                    d="m80.13 149.48-1.38-3a.6.6 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.66-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1L70 139a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.3.38a.59.59 0 0 0-.46.87l1.54 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.21.19Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__secondLayerRight">
                {pattern[2][2] === 2 && (
                  <path
                    id="template_svg__random-9"
                    d="m112.85 131.08-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[2][2] === 0 && (
                  <circle
                    cx={112.85}
                    cy={140.05}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[2][2] === 1 && (
                  <path
                    d="m113.61 149.48-1.38-3a.6.6 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.67-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.31.38a.6.6 0 0 0-.46.87l1.55 3a.6.6 0 0 1-.82.8l-2.9-1.64a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.15.17Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__outerLayerLeft">
                {pattern[3][0] === 2 && (
                  <path
                    id="template_svg__random-10"
                    d="m45.89 164.56-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[3][0] === 0 && (
                  <circle
                    cx={45.89}
                    cy={173.53}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[3][0] === 1 && (
                  <path
                    d="m46.65 183-1.38-3a.59.59 0 0 0-1-.17L42 182.14a.6.6 0 0 1-1-.54l.66-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13L40 171a.6.6 0 0 0 .46-.87l-1.55-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.67 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.3.38a.59.59 0 0 0-.46.87l1.54 2.95a.59.59 0 0 1-.82.79l-2.9-1.63a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.17.25Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <g id="template_svg__outerLayerMid">
                {pattern[3][1] === 2 && (
                  <path
                    id="template_svg__random-11"
                    d="m79.37 164.56-9.43 6.85 3.6 11.09H85.2l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[3][1] === 0 && (
                  <circle
                    cx={79.37}
                    cy={173.53}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[3][1] === 1 && (
                  <path
                    d="m80.13 183-1.38-3a.59.59 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.66-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13l3.3-.38a.59.59 0 0 0 .46-.87l-1.54-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.3.38a.59.59 0 0 0-.46.87l1.54 2.95a.59.59 0 0 1-.82.79l-2.9-1.63a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.14.22Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
              <path
                d="M79.37 54.65 88 46.38H70.74l8.63 8.27z"
                className="template_svg__cls-3"
              />
              <g id="template_svg__outerLayerRight">
                {pattern[3][2] === 2 && (
                  <path
                    id="template_svg__random-12"
                    d="m112.85 164.56-9.43 6.85 3.6 11.09h11.66l3.6-11.09-9.43-6.85z"
                    className="template_svg__cls-4"
                    data-name="random"
                  />
                )}
                {pattern[3][2] === 0 && (
                  <circle
                    cx={112.85}
                    cy={173.53}
                    r={7.81}
                    className="template_svg__cls-5"
                  />
                )}
                {pattern[3][2] === 1 && (
                  <path
                    d="m113.61 183-1.38-3a.59.59 0 0 0-1-.17l-2.32 2.38a.6.6 0 0 1-1-.54l.67-3.26a.6.6 0 0 0-.69-.71l-3.28.56a.59.59 0 0 1-.5-1l2.45-2.25a.6.6 0 0 0-.14-1l-3-1.47a.6.6 0 0 1 .2-1.13L107 171a.59.59 0 0 0 .46-.87l-1.54-3a.59.59 0 0 1 .82-.79l2.9 1.64a.6.6 0 0 0 .88-.44l.48-3.29a.6.6 0 0 1 1.14-.16l1.38 3a.6.6 0 0 0 1 .17l2.32-2.39a.6.6 0 0 1 1 .54l-.66 3.26a.6.6 0 0 0 .69.71l3.28-.56a.6.6 0 0 1 .5 1l-2.45 2.25a.59.59 0 0 0 .14 1l3 1.48a.59.59 0 0 1-.2 1.12l-3.31.38a.6.6 0 0 0-.46.87l1.55 2.95a.59.59 0 0 1-.82.79l-2.9-1.63a.59.59 0 0 0-.88.43l-.48 3.29a.6.6 0 0 1-1.23.25Z"
                    className="template_svg__cls-6"
                  />
                )}
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default PointCardTemplate;
