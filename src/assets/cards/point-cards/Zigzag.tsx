import * as React from "react";

import { CardProps } from ".";
const SvgZigzag = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".zigzag_svg__cls-3{fill:#fff}.zigzag_svg__cls-5{fill:red}.zigzag_svg__cls-7{fill:#e6e6e6}"
        }
      </style>
    </defs>
    <g id="zigzag_svg__Layer_2" data-name="Layer 2">
      <g id="zigzag_svg__Layer_4" data-name="Layer 4">
        <g id="zigzag_svg__zigzag">
          <g id="zigzag_svg__card_template" data-name="card template">
            <rect
              width={158.74}
              height={246.61}
              rx={16.62}
              style={{
                fill: "#1f0b32",
              }}
            />
            <image
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAADqCAYAAACr1gdbAAAACXBIWXMAAAsSAAALEgHS3X78AAAYiklEQVR4Xu3d2W8l2X3Y8e+p5e4k78K9Nza7Z0bTI2k0IxlIbMlJLCfIo2DZ8TKxgeQhjiHIiTP+NxoOkDhSgERBBCmIY+jZL7byEFlKZGlmWjOa3rg3dzYvt7vVevJw7i3ykuxtbrEf7N8H4My9xbo/nqr61anfOVVsKq01z6N+W2kcB2e0hlXIo3J58w0FqvfixP+e/f551lHm5bNivNB7QPW1OHl/YoUzMaLDQ/4uUbZF3GqjOx2CtXUAqu/q0zvqXOpZSVW/rXRm5hru5UtgWSjXxR4ZQeVy567/XD+158zBHEBasZ4QR0fRucv/tlJA7PvEzSbx0REA0d4enQdzVP/Qf+rOfmpS7X+zqN1r18jemMWpVNBxDFpDGCbr9H3+BV7r51jnSa/PfPYJ6533Wp94/dT1TyaX1jjV6svd1u77527vOa+f97NOtcppse9jZTJJRwIQNZuEW1v4i0sM/dbaExPr3KSq/4mtM9dncKcmcaensXI5tOcR7u7ir28Qt1rEBwdmZd3dab1N6Aunz77vW+f5PqOfGqP75qnvOXvAuuvoU+/7VzleYA8P9W/rE7dBP+H12e+d2a7n/Nx53zvbLs62/wXoKMIeGcEaGsIuFrFHhnEmJgAIHz/GX16hc+8+tXMuiWeSqn5b6eyt13GqFbKzs2jPw1tZIVhdI2400EGIDs1X/14556B8YinGOuek+URs+8SbFNuXZqwnbWuv7c/oFZOXnGWPDJO5PkP+tddQ2SzR0RHtn32Iv7hE9Y+ivsRyTn84c2OW7M0bOOUycadD+8OP8O7eS77/vMWa+Nujflvp+OAQ794D4kaT7I1Z3IkJ8m9+FqtYOLN+X0+1/82izr/1uaSHavzwRwSPVgFJJgF7f5rXutMhc/MGmatXcKenCTY38efmKX11KckPq/eiflvpzCs3ca9eRXserQ8/Ini0il0pS0IJACpfayuUItrdpXPvPvHREe7kJO7lS2bKqStJqsyNWezhYZRl4a9v4H18F4CRf7knCSUS1X8XKx2GRPU9vIVFCAKc8XGyt15P1rHA9FLu1CTZmRm07+MtLJgA0kOJc5T/1ZECCFZXCXd3sUslnFqV+p/YGk70VD3h7i661Tq9WIg+la+1Vbi3j7++buYvHQdn0kw5WADu5UtYxSI6CAg2Non29qWXEs9kl0eI9vaJGw2c0VHsUgnoJpXKZrGGhiCOkyl5IZ4pDNGdDjoMzay7Y2aoLACrkMfKZNBhSLR/8NQ4QvSUf7+hoqMjdKeD5Tg41Qr120pbu7eVtkeGwbYJ9/dRzsmZYyFenNV7CEQp8yX1lHgRdmmI07f6zoz+hPgkTiaWJJUYyHk3nyWpxIDOppUklUiXUuckVVqP5Yq/O3qdVTd3pKcSg9HJfxKSVCJ1klQiXefWVEK8EBn9iYv0xEJdBn/iRZ3qrM7pqSSrxAs4PfpTcvkTqZNCXaRJJj9FquQpBZGe55lSkDpdvKiTeXX+5KdklXgBcu9PXCgp1MVFkaQS6ZIbymJw/fWUQkZ/Ig1y70+k6uToTwp1cSHkhrJIU++33SWpROokqcSATvwRAHnyU6Sm796fjP7EoHqjv+TRF6mpxAWQpBKpO5NUcvETn5hMfop06Oco1KWrEi/g7MPE8uSnGJQ8+SleBkkqkR6l5IayuAgy+SkGps9U6zL6E6mT0Z8YzOknP6WmEumTmkqkRf6BDnFRzv8VLSFeiNz7ExfpyU8pSFaJF3Dm3p8U6uICSFKJ1ElSiVQox0G3WjL5KdJw+t7fuX/v78wSIV6I9FRiMM/35Kd0VWIAUlOJNJz+5QdJKpEymfwUaZAnP0W6TmWU1FRiYDL6ExdPaipxASSpRLqkphKpkNGfSNfpqc9zairJKfFCZPQnXgapqcRATl/84oMDSSqRgmcW6kIMSEZ/YkBn/9VP6anEYGT0J14G6alE6iSpxOBk9Ccumoz+xIBk9CfSJqM/8TJITyVSJ0klBiejP3HRZPQnBiSjP5E2DVpGf+KiSU8lUidJJQYnoz9x0WT0JwYkoz+RNrn3J14G6alE6iSpxOBk9Ccumoz+xICeMfrT+uwKQjyVjP7EyyA1lUhdklS9S5/0U+KFyehPXDTLJNmJVJOuSgzIMjmkUMp8RXv7z/iIEMfschm7Uu5bJpc/kYqT01GSVGIg581sSlKJAcnzVOKiKfmDRyINvc5KmWGfJJUYzPPd+xNiMJJUIl1SU4nByehPXCQp1EVq5CkFkarToz/5c7cifVKoizRJTSVSJU8piPTIlIK4CCfzSiY/xcDk3p+4UFKoi4siSSXSJTWVGFx/PaWQnkqkQe79iVSdHP1JoS4uhNxQFmnq/ba7JJVInSSVGNCJv6ElNZVITd+9P0kqMaje6C959EVqKnEBJKlE6iSpRHqkUBfp0FKoi3SdfZhYCnUxKHnyU7wMklQiPUpJTSUugtRUYmD6TLUuSSVSJ0klBnP6yU+pqUT6pKYSaZF/oENcFPkVLZECufcnLpI8pSBScebenxTq4gJIUonUSVKJVCjHQbdaUqiLNJy+9yc1lbgAklRiMPLkp7hwUlOJNJz+5QdJKpEyKdRFGuTJT5GuUxklNZUYmIz+xMWTmkpcAEkqkS6pqUQqZPQn0nV66lNqKjEoGf2JixYfHEhSicGc/UfPpKcSaZBCXVw0SSoxoLMXQEkqMRgZ/YmXQZJKpE6SSgxORn/ioklSiQHJ6E+kTUZ/4mWQpBKpk6QSg5PRn7hoklRiQDL6E2nToGX0Jy6aJJVInSSVGJyM/sRFk6QSA5LRn0ib3PsTL4MklUidJJUYnIz+xEWTpBIDesboT+uzKwjxVDL6Ey+DJJVIXZJUcukTaZGeSgzMqVT63lumf5JeSnxycbvd996pvatV8y9uafdqhDs6il0pU7+tdPVdrZ4Q44XUbyudvfU6AFG9zvA7mwpg/7+MaPfSJZSl8BYWqfxBSwE0vjejVaGA9n38uXmq72pVv610ZuYa2DbB2jqVr7XV6dj+wmKy/PC7k9quVtGehz+/QG9bktitFqWvLiUxMjdmUdlsX4yD/1rWzvQ0KPDnz4kdBPgP5/rbBwTrG1S+7vXFBvrakSyPoqQdvfZh28StFsO/s3G8bm/bH60+M/bhdye1VSyeiX3w38e0XSrir61T/UM/lWPbY+Xzfe+V1prmX9zS+c+9iYoiDv/q+0T7B1T/TTDwD258b0a7ly/hXr0KQPj4McHqGt7Hdxn6p/8Eu1pFAf7KCsHGJv78AiO/9hVULof2fcLNTfyVRzi1GpnrMwBEh4f4i0t48wuUvviLSexgZQX/0RpWsUDm+gz2yIhJquVlgkdruFOTZGavo3I5wp0dgrV1vJ/fpfilX8QZH0flcgQrKwSPVvGXVih+ycTWnke4tYU3N48zOYE7PY1dLqM9j87de8SHhzjj4/SSKtzexl9dRdkO7tQk7vQ0Ogzxl5fxF5ZwpiZxqhWc8XEAOvfu4318l/zbnyMz093GgwP8pWW8uQVK3fb1Yntz81ilEu7kRLLcX1rGX1wkMzODe2kalckQHRwQbGx2Y7+FVcjjjI8nMXon96Dqt5Ue+tVfwZ2exltYoPmDH+IA6HYb3emgXBe7XCZuNJ8V65kOvzupszdnyc7Ooj0PgMzkJHapBGGIU6tBGKKDgOzsLMp1IYqwCgUIApRtk501Z2Lzr39E7lOvQRxjT09jDw2jstkkto7jZF1/cQm3VkN7nlnn1VexikU6H/6c3Bu3IAxxx8ZwajWUY9P8wQ+p/OZvQBQlMbBUEls5TnKwvbl58m+8AWGIymbJf+5NgkePaP6fvyb/6TfQnpfECDY2j2Pk82Rfew0rn8ebm6f4hc+bfWLb5D/7GZxqhdaPf0Lute42XrqEPTLSt40AmZkZtIZwbe14ueOQ/dRrWIU87Q/uJPvJmpjAGh4BoP3e+1R/75+bTSsU0FrT+N6MPtmTfRL120rblTJWoUAchoT1ParvamWBuSZGh4fgOKhMBuU4z4r3TFaxiDM+gfY8Wh9+RLCzQ7S/j10q4YyPsfc//xetD+7Q/vnHaM/DmZoC2ybc3KT50/cINrfQnodVLJK5dpXO/QcEW1sE6+vYQyWcaoX6t79D68OPCHd20J6He/Uq1sgIwfo6rQ8/Mj1GFOHUatjDQ3Tu3qP1wR2CrS2sTAZ7eBiAzsM5gq0toqMj3KtXUflC0m5/fR2CAGd83CTn3Xs03/8Af2kJy3FQuRzWUIlgfZ3OwznidpvMtWvY5RHq3/4OnYdzeAuLph3j41il43V77UApnIlxs42bm2YbS8fb2Hk4R+fhHLrTIXPtKqpg2td5OEewuZnEdkZHCXd2zP5eW8cZKuFOT+FMThCsrxOsr6M7HbIzM1jlkWccwedj12pY+Ty600F3aysLIKrvocMQlMKdnEA5DgffqgxUvVuFAiqXAyDc2KD5f39MsL3dt453/wH+o1UAlG3jjI0SHRwSrK/jLSyYOMUiKp/HX16m9f4dwvpe8nm7UsH7+C6t9++YGJaFXSoCmMvswzmz3HWPL3sbmwRr6+gowq5Wca9cxl9cpPX+HeKjIyzHwalW2PuzP8d78JD2nZ+ZGLkcKpslOjoyl8ltk8j20BBOrUbrp+8Rbu8QbG+jbDupM7y5OYJHj45jZDLEnmcuk0vL5oQaG0M5DuHODs2/+UnfNgL4i4uE29voMEQphZXPEe7u4s0v4N1/eBy7UMBbWiY+PMLf2EDHMVYuh5XL0frpe7Tv3iOs11G2jV0qUb+tPvExrt9WWoPphLJZwu3tpGC3ACpf91S08xgdx7hjY9ijNaKjxtNiPpOOIvP/3vyXjvt6QOU6yfJwdxelFMpxaP3NT/oGoyqXA6UgjtFBwElx01ymdRCYGJaFymQ4+svvm5OkF8e2wTKzJ2a5Npcwx0HZNtFR40xsAJXNoGzbvFbKtFlrsO3kkoRlmfe+T7S/T9/1xHGID4+I9g9MDEA5NsHWNtH+Adr3uz9IgWURNxooyybudI5DTE4QNZpE+wfm+92EPfrL70MUETf7j5P2PKL9fYhjU0ZkMmZ5GBIfNUz7e6zBZpTc6Wnyb9xKjnG4uQWcmKcKd3cJVlbMdXzmGvbQYJmc6P5A3e6gHPfMt61cDqtYREcRUaNJ9tbr6HYblc2az/k+BAFWqYRutcyyKEp2FoCVyZjvRxHRUYPcZz6drBt7Htr3k6TRrZbZmY5DtL9P7Psmwayz5YVudmP0Dj6mR9XNlqkBe7rtiRvmAOs4hlMlxMmkVY5D3GyeiWGVSmZ5JpPEiFstCEPOEzebqHy+/4SwbXOynUqY+Khx3D6tB0qoXl5kZ6+b7W42CTY3kxFoEnn4nU0V7jwmajTMaOb6dazhoU+cWNr3idsdUIpobx+7UgbbMj0FoDvmTLeKRaxcDq012vcpfObT/YG6PVTQvUw61Yo5sL5/fKYDVjaL1pq40cAZHzPLSkWsbDY5a3sxrHw+iRGubwDmEunUaknBWfryP+rGKGFlMsTtNvHBId79B6hCPrkchpub+EvLyTYq14U4Jtp5nCRDb3nc6RAfHmHlsqD1cYytLeJWi+DRKnZ5BHe0hrKs42TSGuU6Z9untSkzXNfUNK0WwdIyViGPXSodX5a6PZ89Mow7Po6OIuJWi+ofRS9cqPeK8+yt13EvTaG1xl9cJFhZTdbpS9dgdZVwexuUIjt7ncIvfAFsm73/kNV73yi+UHLFjQbRzjZWt66ySqWkMO6ri2o1cF2CtTV0q8Xen/05AO7UFLgu4e4u/vKKWXblMtbQEDoMTRff5UybdXWnA1FE46/+t1m/uzx8/Ph4x1bKyfA/OVstC2dyEjCXD+15SQxnbCyJcVJmesr0Jur4uNiVCvbI2QLYrlVNjJ0dANrvfQCAOzZqeg2lCLd3jtcfGUlOvvjwCGz7uH2dTl/77OFhyGTMcTvBqVbOXJbsSiUpS+JW/4Tl8+h1MHatRuHzb2NlzTSM93AumT8D6Oujy/+6qQ7/x5TGsnAvX8YdHaXwC1/AX1wiOjri4FsVHR0eUv23z87wcHML98pl6t/+DgDOaA17aAhvYQHdapmeC8hcmjYfiCL8pWXsShm7ViMzPWUK2p3HoDV2pYw7PY2VzxPs7BDW95IY2ZlrKMsi3N4m2NjArpSxhofJTJkDHx8eEW5uYVfKOFNTWLkcUaNBsLaOyufQnk/m0rQ5s9fWTI9RKZv5oKlJ0Jro8ChpnzM+bnoNzyPcrZvtuHkDZ3QUlc0SbG0R7u11Bxk5MpcvmzJAa4K19WQb3clJ4k4niWFXyriXL6OyWeJOh2B1zWzfzRtJ+6LHjwlWHpmTtFI2J04cEx01zrav0yHYMsnmXrmMMzmBymQINjeJ6nWeV/220iqXMz/v6lVyr9wEwFtYIFjfoPz7jf5S8nSA4d/ZUIffndTEMe7Vq2Rnr+NOjNN58JBwcxOi+DhjK2VQFliW6a4tU3CG6xso18X7+B4qlyNz7Sq5V19FRxFam8k6Z3KC3Btv4IyOJgcYTI+WmblmDvDCQrLx9tgY2ZlraCDaPyBcN8mTuT5zHGNjE+35qFqN3Cs3u7PkCwSbmyZGtUrh02+Ykdb2NmF3h+c/91mcWo2o0TBJ3O3Bsq+9ilOrEezuEnd7RpUvkLlyOWlfsPIo2XfZa1fRmDmqaOcxKpOh8OabONUqQXfiVwcBVrFoToRejG5PbBWL5G+9bvZhd3RoGm4n7QtW15LeMfvqKyb2zg7R7m43RqmvfcnlPZsle+WKad/mFsp1OfhvNY2lQFmmprQsUAplWWYdxzFfhQLu9BSZa9dwJ8ZBKfzlZaK9PfyFRU5TT3o64eBbFZ25MYtdrZKZnCRut01vsLtLWN8zNUbj1GgCZYY43S7dGRszZ06thspm8RYW8efncaencacmsSsV4laLcHub5g9+SP7tt8xZ4LpErSad9z5AFQpkpqfMZGkmg7+4QPMHPyJ763Wys9exy2WIY/yVlSSGe2kae2SEuNmi/f77qEIBu1Qie30GMhmiRpPOz37WnVw0MXQc468s4929jzMxQfbGrFkeRbT+34/x5xfIv/0WmUvTWOUyUaOBd/8BOgzJXr1yon2LeHPz2NUquVduYg0Po6OI4ET7MlcuYw0PEzebdO7dR/s+zugo7uQE1tCQqVFW18zE5sy1vtidn9/FmZok9+orphSIItof3ElmzjNXr2ANDRE3m2Y6RCmcsVHcqSmsYjFpX98g4RxWoWDq3VKRzNQUQHdKpUGwvYW/uMTwb6+fe8V6YlLB8f0l9/Ilkxi5HJbjmOu9ZZlhdRSZM6f7pcPQTOhhGqGjiLjdJtzeIlhdp/jFXzLrRZGZtGy38R7OM/SPv4yyLNNlr68Rtzq0P7hD5Z3fRilFdHREHAT49x/gPZij8nvvdGN3iHa28eYXGPryr5gYYYi/vIJuNWm9f4fq776DUoq40yE6OsJfXqHz8V2qv/uOubQ1W0Q72wSraxS/+Et9MQD8hQWGfvXLfTGCjU06H9yh/M9+HSuXIzxqoNstvLl5Cm+/ZQYfcYy3uAgo/Pl5Sr/8pe6gBOJmA29uns6dDyn/5q8ny4PNDcKtLdp3PqL6W79hLoVhaHquxSVTy+RyZllv/80dx+4tDze3aH/4EZVu+6J22/Qsi0sU//7fM8dO9eeE7t7JwLJQtp0knrnCaIKVFcLHu3j37vO0e8NPTaqe+r93dO+S5FQryTDWqVbNHBCglDKFYRybkVV3R8StFvFRg87DOQpf+DxWsQBRSNzuELc7hNvb5taCbZsEheQ+YPEffAmiEDAjyLjZxL18qbtub/ke4W6d7M0bZhjfLXDD+h7ex3cp/sNfhjCA7gzSebHD+h5RvRvjRDvC+h7hxga5Nz/bF+NkbKdaTYrkYHXNnIDj48SeR3xwcBz7U6/hVKvEzQZxs4m/ukawtJLE6C0PNrbw5hYof/UrgLkPGHc6hGvruDPXzLrd22rB1jbB6ir5t9/qixHW9/E+vsvIr33FlHKtbuz1Tdxp02NZxSJPPvRmJB4fmPm16PAQHUZ9DwQ8zXMl1Un120qrQgF7ZNjcpzuPAjREe/uM/IvdpBH120qrbBa7PEK4tZ1k+95/zGm7UiY+ahA1mtT+uLv8T/PaLo8Qbm713eF3JicA+pbv/ae87o28go0tan9snh5Q+Xxyczms7yXLz43R/XknY5jYBW1idAjr+8cxpiaxslnMVIxp9943CtodHzc97ol2OJMTpic5tTwzcw2NRne8ZPn+N4vaGRvrtmOTuOOdiR0fHlH+g2ZfO+JOh2j/gMrX2mr/G0Xdm1oJHz9G+z6Vr/tq/z+XtDM6ikaj7CffjtNBQLS/T3RwlOyH5/X/Abv/O9vviFDbAAAAAElFTkSuQmCC"
              width={149}
              height={234}
              transform="translate(6.87 4.35)"
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
              className="zigzag_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a137.27 137.27 0 0 1-50.54-9.68l9.51-23a111.46 111.46 0 0 0 26.47 6.85 112.31 112.31 0 0 0 14.53.95 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.74Z"
              className="zigzag_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a88.27 88.27 0 0 0 20.62 5.29 88.55 88.55 0 0 0 11.49.75 86.85 86.85 0 0 0 32-6.08l8.5 20.49a108.78 108.78 0 0 1-40.47 7.77Z"
              className="zigzag_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.45 87.45 0 0 0 31.69-5.94m.54-1.29a86.72 86.72 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 87.24 87.24 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.56 4 69.14 69.14 0 0 0 8.86.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="zigzag_svg__cls-3"
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
            d="M52.08 139.84a10.38 10.38 0 0 0-3.2-.05 9.51 9.51 0 0 0-8.41 10.73 10.19 10.19 0 0 0 18.7 3.13.68.68 0 0 0-.05-.76.79.79 0 0 0-.75-.3 7.06 7.06 0 0 1-8-5.65 6.45 6.45 0 0 1 2.15-5.86.71.71 0 0 0 .21-.74.75.75 0 0 0-.65-.5ZM84.35 168.11a10.38 10.38 0 0 0-3.2-.05 9.51 9.51 0 0 0-8.4 10.73 10.18 10.18 0 0 0 18.69 3.13.68.68 0 0 0 0-.76.79.79 0 0 0-.75-.3 7 7 0 0 1-8-5.65 6.44 6.44 0 0 1 2.14-5.86.71.71 0 0 0 .21-.74.74.74 0 0 0-.69-.5ZM82 120.17a7.92 7.92 0 0 0-2.48 0 7.34 7.34 0 0 0-6.5 8.29 7.88 7.88 0 0 0 14.46 2.42.5.5 0 0 0 0-.58.61.61 0 0 0-.58-.24 5.44 5.44 0 0 1-6.21-4.36 5 5 0 0 1 1.66-4.54.56.56 0 0 0 .16-.57.61.61 0 0 0-.51-.42ZM63.28 97a7.09 7.09 0 0 0-2.11 0 6.26 6.26 0 0 0-5.53 7.06 6.71 6.71 0 0 0 12.3 2.06.44.44 0 0 0 0-.5.51.51 0 0 0-.49-.2 4.63 4.63 0 0 1-5.28-3.71 4.24 4.24 0 0 1 1.41-3.86.46.46 0 0 0 .14-.48.5.5 0 0 0-.44-.37Z"
            className="zigzag_svg__cls-5"
          />
          <path
            d="m59.26 103.15 20.11 24.22-31.46 22.98 32.33 27.06"
            style={{
              fill: "none",
              stroke: "red",
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={80.29}
            cy={105.47}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={98.74}
            cy={104.34}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={55.57}
            cy={125.01}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={103.38}
            cy={125.01}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={112.57}
            cy={149.14}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={82.08}
            cy={151.1}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={42.51}
            cy={173.73}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="zigzag_svg__cls-7"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgZigzag;
