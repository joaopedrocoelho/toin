import * as React from "react";

import { CardProps } from ".";
const SvgStraightSameDouble = ({ pointsValue, ...props }: CardProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 158.74 246.61"
    {...props}
  >
    <defs>
      <style>
        {
          ".straight_same_double_svg__cls-3{fill:#fff}.straight_same_double_svg__cls-5{fill:red}.straight_same_double_svg__cls-6{fill:none;stroke:red;stroke-miterlimit:10}.straight_same_double_svg__cls-7{fill:#e6e6e6}"
        }
      </style>
    </defs>
    <g id="straight_same_double_svg__Layer_2" data-name="Layer 2">
      <g id="straight_same_double_svg__Layer_4" data-name="Layer 4">
        <g
          id="straight_same_double_svg__straight_same_double"
          data-name="straight same double"
        >
          <g
            id="straight_same_double_svg__card_template"
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
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAADqCAYAAABEFGxlAAAACXBIWXMAAAsSAAALEgHS3X78AAAZPklEQVR4Xu3d23Mj2X3Y8e/pC+4EAXB4v81ld2ZntZJ2V9pIWmntJHZSlTyklCiJkyiVh1QSp1y2o8r63xhXLlUupyrJg+ON7DhV8VteHOdla31RJNmydmc5w+FlhldwCIAkCKCB7j55OECTIMAZEsA6Ffn3qdpZsNn48QD44fTvnNNoKK01V1X59bTGtnEKBVQqZTYqUCheGke9+NfXNeJwvCjiSx/bTxjd9AhrdcKjY8LTUwrv6ys/3eplT9bRb0xqd2oKbAs7m0WlUtiZDCqReOH9xP+/tOcRVCpg2+haDb9URnsezY1NCt/xX5hclyZU6YHSsTu3cWdncJeWUIByHHQQgO9H+3Xd/xq39RX26Xe785NyHHpc9ua4zvZz2zq37FRq4Mdpbl6yz8WfL3me7M7R4M+J9n3TYWiNchxC30c3GnhPnuDvF8l+e+/SpOqbUMcfzGh3dobYrVvYmQza8wBo7e/jl8qEtVq0DehkR9fP59KG7ptX2XaVfc5udN/lBffteqgXtlnq0hhW+s/3Bf1/TYcaOzuGlUziFPI4ExPguugwpPX0Ka3dPbzVNSZ+pfdQ2JNQ1d+9o925WdzFRZRSBJUK3uoT/GIR7QfowAc/QAcB9vj4xXiX6E3aaxny7t36BFNW9+8uJl70+5cZsqFD3r3XYAG175vX2vexM2msdJrY7dvEZmdQ8Th+uUzte/8Hf79I4V+HXUnVlVDHH8xoOztG+qtfJazVaB0c4H26gr9fRAMT1yjOxE+Gyn/KawKTYLHlJeI3l7EKBXMIfLxK6q//Wf+EKj1QOvnOl4i/+irKsjj94+/RfPQ42vE6lb74yVP+tZTWzSbJL34BO5/DnZ2ltbtL88kamW9tRLkR9eXxV18htriIArzVVQDsfI7C+1pJMon8L9QUQHN9ncbDFcJqFXdmBndhnsp/zEWHOQvg+INZ7czNYmcyhLUa3sojmk/WGP+nZUkkESl8x1c6CAjKZby1NfB9nKkp3Pm5aB8LwC7kcefnCet16j/+mKBceel8g/iLKffPjxVA69kW/uEhdiaDU8hz/MGMBrBKD5R2CnksxyEolwkOD18cUfyFl/+FmgprdbyNTcJaDWd6Gqs90W1ZmUy0o18qm95JaibxElYyaeYjfR8Vj0dLcZadzaISCXQQENZqLwkjhKF9n6BUNgllWVidhFKpJPb4OLpeJzg+fkkYIYzcz58o3WigGw2TUIk4pQdKWyoWQ8Xj4Djoev1lcYQ44zj4pXLXpmgeKqxWe/YX4kXsc/V3R5RQ9thYzy+FeDnddTbFVVc9hejRb+lZEkqMlCSUGMKFPkopSSgxIsrMhfcmlMyRi6vS9HRSfXooySgxODnkidGRGkqMmiSUGMK5AurSolyIIcgoTwzu4lS5klGeGCkpysXQurspSSgxPK2lKBej0Hu+gSSUGJ2+E5tSk4ur6nNClIzyxHA6SSU1lPgsSEKJ0Tk/sekfHb1oVyH66C6ilExsimFdrMtllCcGdz6bLhblZ3kkGSUG1LU4rCSRxOBU+1+pocSQZHFYjIys5YnPilKXnGAnpZS4qk4HFV0so28NJRklruHSD3rKKE+MgNRQYjQuO9tA+ilxdRevviI9lBhC76SBnLEphvHCMzajolwySgxODnliNC6d2BRiYLI4LIbSewk7SSgxUr1FudTk4qounrEpV18Ro2ZZqSTKkiOfGJDmZWcbCDEYhRTlYij91vL6fQOMENfVc7aBjPLEdfV0Rgqr/5dUCTGYrhoqrDeQLkoMo+eTw7rRuGRXIV4imtjUctgTw1FKYWqo81cgk6OduBZZHBaj1P+Mza4Vvt49hLgqOcFODE0u2io+O7I4LEZMRnliCO3k6Uw7SQ0lhiKjPPGZiSY2hRghSSgxOl01lFwfSoyAJSWUGFyfi7ZKPomB6eif80W5pJQYHSnKxcAuHvCUFOViaJdeBViIYfScsQlSQolr6jPK67OXEFfTU0TJWp4YMemhxPD6Xn1FRnliGJd/RawQ16NiMcJKhd6rr0hWiWu5bJQnnxwWg+h/xuZ50kWJ6+o+xJ1NG0hRLoYlH1IQoyYJJYbTszgsozwxsN61F+mhxOB0b0pdmCmXLkoMoXdxWIjhyCFPjJDUUGLEZJQnhnChXJKJTTGU3nyS86HEaMkpwGJIPYvDQoyI1FBiaP3W8qJtcsQTQ5KiXAyu50xfqaHEKMkHPcWoyQXHxFCsRKL750v2E2IgspYnRkp6KDEwO5fr+tnfL577KLpMG4iBaPS56QPpocTA+p3rKwklRkoSSgzh4glRMlMuRuXSr4iV2lxcleYql5WWjBKDk0OeGB05wU6MlhTlYijnCqhLi3IhhiCjPDG43hM2ZZQnRklqKDG07m5KEkoMT2spysUoXHbheyFGoe/isNTk4qpe/k0KIBklrqWTVFJDic+CJJQYnfMTm/7R0Yt2FaKP7iJKycSmGNblF77vkJpcXFXXh4QvFOVneSQZJQbUtTgsH/QUQ1Dtf6WGEkOSxWExMrKWJz4rSl1ygp2UUuKqOh1UdLGMvjWUZJS4hks/6CmjPDECUkOJ0bjsbAPpp8TVydebiRHqnTSQMzbFMF54xmZUlEtGicHJIU+MxqUTm0IMTBaHxVB6L2EnCSVGqrcol5pcXNXFMzbl6iti1CwrlURZcuQTA9K87GwDIQajkKJcDKXfWl6/b4AR4rp6zjaQUZ64rp7OSGH1/5IqIQbTVUOF9QbSRYlh9HxyWDcal+wqxEtEE5taDntiOOYrhtW5UV576lyIq5PFYTFK/c/Y7Frh691DiKuSE+zE0OSireKzI4vDYsRklCeG0E6ezrST1FBiKDLKE5+ZaGJTiBGShBKj01VDyfWhxAhYUkKJwfW5aKvkkxiYjv45X5RLSonRkaJcDOziAU9JUS6GdulVgIUYRs8ZmyAllLimPqO8PnsJcTU9RZSs5YkRkx5KDK/v1VdklCeGELa/BL3ng55CXJeKxdo3ZC1PDOWyUZ58clgMov8Zm+dJFyWuq/sQdzZtIEW5GJZ8SEGMmiSUGE7P4rCM8sTAetdepIcSg9O9KXVhply6KDGE3sVhIYYjhzwxQlJDiRGTUZ4YwoVySSY2xVB680nOhxKjJacAiyH1LA4LMSJSQ4lRs7qmz+WIJ67Jiie6f45uSVEurqvnTF+pocQoyQc9xajJBcfESMkhT4yMv1+UtTwxWs7FDdGnQEfk5L8va+U4tLa2yf9iQwGUHigdu3MboP/2IKC5sUnhfX22/eYyrZ1d8r/kRWl//MGMthKJvvsCZL61Ee3b2R42PLLf3u2J0drZIf9LzZ4Yl8W+uN2ZmcZ/fkjhX7XOYv+XKY1lkf32Xlc7nJlpgL7b/cNDCr/c6t2+tx/9PTDtvixGv+2d2+djjJxto07+x22d/OIXsFyX6kd/QGtnl8J3/KH/aOlXLZ18+03c+XmU4xAcH9Nc38BbXSPz3rs4U1MA+MUirWdb4Di4szNmu1I0NzdpPdvGHs/iTE3iTE0RVComxtoGqXfexl1YQFkWfrGIt/oEK5HAXZiPYjc3Nmmub+BMTuBMTZkYR0e0trZprDwi8fp9nEIeZ2oKv1ikufkU7fu4c7PEljuJs0FzfQO7UIjaF1QqtPb2CY+OsNJpnKnJ6HF7j5+AbWHncjiFPADh6Sne2gZOPoe7MG92dF387R28lcfE7716FsN1aa1v0NzYJN5u31mMdaxUCnd+Dith5n/8Uhnv44fEbt/EnZ87i/H0Gc31DWK3buLOzgAQnFRprq2T+xfHQ7++AOVfS+n0V97BXVig+ewZpx9+hKObTcJ6HSsex0qnUW5Pp3VtpQdKp7/xLu7SEpbjoD0Pe24OK5tFxePEb99Gex4A8dvtnmp7+2y7bRO/excrncZbeUT6q18BwM5k0M0mViZN4t49lG0DYKVSJsbWdhRPBwHx1+5hpZLUf/Rj0l/9KtrzsGZmTJJO3uD0w49I/5N/fBYb8Hf3SLz2WhQ7/tprWKkUzfWNqH3W7CzO5CSt7W1O//CPovbpIAANrb09km9+Ecsxz2Xo+1jpNKcffkTmp96L9nXyeXQQ4D16HMUAsNNpgL4xWlvbXY/dnWvgFPLUvvd9Mu99oys2QUDr2RaZr78bxbDHMpQeKD1sT1V6oLRKJrHHx0FrgqMjCt/xlROUSmjfB8tCxeMoZ/iEit1cxpmaQtk2rZ0dtNY44+M4mQxBIU/pN36T5NtvmRc2n8ddWsIvlWnt7NDc2cWZmCA2N4szMUErnaa1swOAXSgQv30bb22N8gffZexn/6rZfi6G9jwaj1exkgliCwumZ5q8QWtnB79Uxs6NE1tYIDg+wZmZ7o69vAytFuUPvkvy7bcAiN+5jTs3F7XPL5Wx8zli8/OoRALnxo2uGLGby6Cg8lv/jdRX3sFOp7ELBZzZWeKv30d7Hv7hIQDOzIzpPYIgih2/uYxTKOAuzFP5r7919hgLBWLLywRHx+D7tPb3CZtN3OlpnNlZYkuLUTsAs+32LUKvGf1NZ2ICd2mJ2J09RsHKpLESCbTW6GbLbAtPa+h6HZTCKRTAcSj9G2eoE8012kyiNps0Vh7ReLhCY20t+r2dz9FcX6ex8pjg+BjLcXAKeU5+7/dpbW9T/7MfA6ASCVQ8jrexaf57vBrFcGamqX3/B3gbmwTlchSj/Nu/g/d4ldZ+sStG89kW/sEBzafPTI+ZzWIlkzRWHuFtbOIXiyjbRrkuAPU//RH+wQHKslCui5U0hxhv5RHeo8dnMVIpGiuPqH/yKf7h4VmvmUhQ/+Gf4q1vQBhixWJYsRiNx6vUP3lI4+EKtFo4MzOomBs9vvqnK2itscbHsfN5at//AY1PV6LY9niW8m//Dqd/+Ee0tnZQloXluqh0Cq019U8e4m1sQrOJncthJeJUP/oDvLV1mjs7WO3Sovzv40O9xoDpnQDdaKBrNQCswvtaBZUKOgxxpyZxbtx4UYwrsVJprKTJXGhfO+hc88PTU4Ljk+iaQl38IFoFUkqhXHPI9Pf3CRuNs/2UIvSa+Hv7poftcBzCkxP8vX2zG6AcGx0EBJVKdKg110C2CKtV/P19utg2tPfvvJBWMsnJ7/0+WBY6CE2IRALVrmXCapWgVI5ChI0GutHAP3hOUKmYGJk09R/8kLB6Gj0dKhYDxzXtUso8lmYTKx7HHs8CEJycdC9zKEVYPcU/fH62zfdpPtsiPD1Fn3+eLAsdaoJSmfD0NNqsm00G1SnyY0uLqHjc1J8bm0B7Hsp/fkjr6VNT39xcxs6OdY0Mrkt7nmlwEABED0QHQdQDEASEjXrPfTv7hhcecFhtxwhDaB+Wdb33/kC0Lqlbra7NYfUU5Z4bxXbadz52u4fpxLDHx9G+T3B0TPz1+4TVqtnX96PHGVarZ49Ra7Da03vtWHYuZ2JUjki+/VbX83He+Re8Q2t91j6tz9Zc27F1GEb7KsfufiydGLVTgvPtG0InL+Kv38ednCQ4PSWoVKLfW2CGmP7z5wTVKs7UlCmmxzIc/ef8YH89DMy72LZpPdtCJRO4kzdQto1utdChCWtnszgTE4S+j18qk/mZvwKAlclgxWKE9Tph9dTESCWxkkmUZYHvm95Aa5Tr4E5PE/o+QblM5qffA62x8zmU6xI2GoSnNVTMNfsn4uZd1e7xgnIFOzeOchwzYnz+3CSa1mab46CBsFbDisdBa6xU0tSaWqObTRMjO4YzUUApZXqTMIQgQNmWedyce5GDACuZMNsbDbTnmZ4qCLAzGVQ8TnByYtpeOcLOjuFOTraLfm3+CwLsbBZlWaY3DDWgTOz24Txsv6mDcgU7k8YptNs3oNIDpe1cDndxgfitm9Hz6K08jqYjoply79NH+MUiKEXilTs4s7MER8eU/13s2kkV1hsEB8VoaOvOz5t36YV3hz1phsqdw1D1f/1vs32iYIbVBwdRLwIQv3XT3FAquo+dz5veot3Nn8WYgM6cWhDgffIpAO7UZNSO6LCYSEQ9UcSxcWbMcLsTu/7DPzGxs1mIxfCLxa5Dh53LEfo+6LPewW4nQidx6j/4odmeybRj7BOentJ8YmpMezxritx67ax9yWTUm/nnDqtWJhPd1p6H98lDANzpKdOzVcpdZYKdz0dv3uuO8koPlO4c3jPvfs0MmA4OaG3vkP/lZhQrGtIV3tfq+LtzGtsmtrRE+q03sTMZmuvrlB4obY2Pk/tnlSs1IvvtPXX6P1/Xpx/+JmDqBGXbphYqFsH3id+7S2xxwbwbDw9prj4x0xYxl9j8fPRObG5sYudzONPTZj6rWqXVfqJjr9whfnMZK52mub2N92gVa2wM5djEFuYhDM081/YOVnbM9L7T06aeOjGHLndxAXdhHhWP09rfJyifdd+x+TnTvufPaT19hpXNYo9ncedmIQwJTqr4e/umfbOzqFiMsNGgtXU22oovLZpph60tmptPAbAnbxBbXDC9GAr/+SF2Loc9eQN3aoqwXscvmXY4c7PEb5reoLW7S1A2CWXncyReuWPad3BAc/Np1D47kzHtOz5rn7u4YNpXr0cF9FWcL33chXniy0sQi+GtreGXyjTXN7r275ojyP7DHVX93TuaIMBdWiJx7y6xhXnqH3+C//yQ0r91dOcwgOMQHh2besGyUJYCZW7rWg2VSKCB2OJC9MCba2t4j9ojNds2hzvPo7WzS6fojN26hZ3J4JfLtLa2AbDSaVJf/ILpYre38Xd3AVCWHR0yW7t7UX0Ru3ULp1Awybe9A5bZHr+5HLWjU4ireJz40hIaCI6O8HdM7PjduzgTEybG1nZUF8Xv3cUpFGgdHBC0h/9WJkPq82+gHKerQI3fu3v2GPf2od0DxhYXsdJp/FKJ1tY29pjpaeLLS+Yxrq1FbyRl28QWF9BaExwd4++aIX/qS29jpVJR+5TjoGwLZ3oKO5+nVSwSHB5i53PYExMk798HpaL2lX7V0v1eu84h9Pzh3snnTAewZNoXthPS++RhT0/XM+mU+eYT1ZnWd6amsLJZUm+9aUY8pTJhrWZGaScnWJk0oDj7RnXzf2VlcGamiS0u4ExOYiUSNPf2aG1tR72K0z4kNdfX8ff2cZeXSH7udaxsFh0EhMfHNDc2SbzxOvFXXjGHh5Mqrd097HyexOffIL5k3i2t9XWCUgl3adHMgRUKpmsvFs2E5L27JF6/j5XJEFRP8EtllOuS+tpXcGdmohh+8QB3cYHEvbvYhYL5m9vb0fbYzWXc2VlC38d7+KmZZPz850jcvQuxmHlxd3bNvkuL3bF3d3GXFonffRUnl0NbFuHJiZkRv3eX5OffQCWTBNUqfqmMFYvhLiyQeO3eufYVTezlJexcLnqDeY8eE3vljnns+Tx+tUrz6TNa2zvEX79P8o3PRc91a2sba3zcJNEl3PwMqj3R7dyYwL1xwySS79Pa2zMrEE/W+h421WVVf+mB0vFXX8FZmMednY1mbHWrZeoXxzGjkvaoRtl29P/OXExnJBLWGzRWVki9/ZaZ6U4k8E+q+AdF/K1tUn/pHVMsui7BaY3goNheovm6KS59n+DwkNbePvU/+RH5n/u7WIkEQb1OcHREc22d1FtvmjmjeBy/WiUoFmltbZN658umPY5Da38fXa/jrT4h8943sJJJE6NSobW9g/fJQ/I/9/dMjJMqYfWE5uNVE6Mdu7nXqXnOYoS+j7+/j79fpP7jjym0YwS1GkGpRHPzqWmfbZ+9MDs7NDc2SH/5y6YnsCy07+Pv7HD64Ufk/r55jGG7PmysrOB9fNa+oFbDPzyktb5B6stfimL7JycE5TLewxUyP/1e9Lo0nz3Df36I98lDct/622DbZsR64bXDss4Kd8dpdxaK8PSU1tYWzafPutYJL7o0oTqOP5jVdiEfrSlZmUw0CouGsOdiaEApZeqAYtGMVo5Mb5P+yz+FUyjgF4tmVrtW61p762wPSiXi91/DyefNCMbz8Faf0Np8yvjf+aYpr+o1wnqd1uZTYrduYudN+4KjI8JGg+aTNRL3XzOF6KkZ1rd29/GLB4z9tZ8xMWqn7e17eKtr5L71za4Y/vZOV2y/uA8ovNUnpN/9WjuGie2XKjQ+ftgbY3fP9BwzM2Ze6nyMr7+Lisej7X6pQnNjk/Fv/i3zXHa2Py/R+HSF/D/6B+hGo7t9t2+9MHZw+DxqX3N9nezf/BuoeJyLOqNTDWZw0mqZqQbfJ6hUCI6O8VbXmPiVFxfzL02ojtIDpa2xMezsGCqZxErETQZ3hrFam2zSGuW6BJUK3vpm1IDKr2e0M3kDjSY4OCSonpq5xXQaZ9JMpvrPD8n9/IkqPVDamZvFisXQYUhweEjuX56qyn8Y086NCfPuaieIUmbW3EqnAU1ra4ew4Zntc7NYyaRZ2tjdI2x42GMZzscIKkfoRgMrk8GZNond2tp+cYz2FEFnArT59BmEIe7cHKo9o649L6oBYzeXUakU2vPMNMj+vpkymZrEiscI6w1aO6bdsfk57FwObIvw6ARvcxMFJnYqAdrEbm5tm3YUCmaWvHEW252ZxpmYaI8W63jrGyjAzo1j37iBlYhHUzeAWb8NNcq2CZtmqQY/wH/+HO23yP+i98IkOu//Ai5/rnQ3V72PAAAAAElFTkSuQmCC"
              width={148}
              height={234}
              transform="translate(7.75 4.15)"
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
              className="straight_same_double_svg__cls-3"
            />
            <path d="m130.84 155.93 8.45 20.37a157.66 157.66 0 0 1-58.91 11.36 160.78 160.78 0 0 1-20.88-1.37 159.59 159.59 0 0 1-38.23-9.91L29.7 156a137.41 137.41 0 0 0 32.66 8.43 139.23 139.23 0 0 0 18 1.18 136 136 0 0 0 50.49-9.68m.55-1.3a135.33 135.33 0 0 1-51 10 136.73 136.73 0 0 1-17.86-1.17 136.29 136.29 0 0 1-33.34-8.73l-9.2 22.2a160.07 160.07 0 0 0 39.41 10.35 160.88 160.88 0 0 0 21 1.38 159.27 159.27 0 0 0 60.22-11.81l-9.21-22.22Z" />
            <path
              d="M80.35 164.11a137.27 137.27 0 0 1-50.54-9.68l9.51-23a111.46 111.46 0 0 0 26.47 6.85 112.31 112.31 0 0 0 14.53.95 109.87 109.87 0 0 0 40.87-7.86l9.54 23a134.43 134.43 0 0 1-50.38 9.74Z"
              className="straight_same_double_svg__cls-3"
            />
            <path d="m120.91 132 9.16 22.07a133.93 133.93 0 0 1-49.72 9.53 137 137 0 0 1-17.73-1.16 135.72 135.72 0 0 1-32.16-8.3l9.13-22.08a112.35 112.35 0 0 0 26.13 6.69 113.51 113.51 0 0 0 14.6 1 110.33 110.33 0 0 0 40.59-7.75m.55-1.3a109.63 109.63 0 0 1-41.14 8 111.51 111.51 0 0 1-41.27-7.94l-9.9 23.93a136.29 136.29 0 0 0 33.34 8.73 136.85 136.85 0 0 0 17.86 1.17 135.33 135.33 0 0 0 51-10l-9.93-23.92Z" />
            <path
              d="M80.32 138.22a111.32 111.32 0 0 1-40.62-7.72l8.48-20.5a88.27 88.27 0 0 0 20.62 5.29 88.55 88.55 0 0 0 11.49.75 86.85 86.85 0 0 0 32-6.08l8.5 20.49a108.82 108.82 0 0 1-40.47 7.77Z"
              className="straight_same_double_svg__cls-3"
            />
            <path d="m112 110.59 8.12 19.57a108.4 108.4 0 0 1-39.83 7.56 111.39 111.39 0 0 1-14.29-.94 110.11 110.11 0 0 1-25.62-6.56l8.1-19.58a88.55 88.55 0 0 0 20.27 5.14 89.75 89.75 0 0 0 11.56.75 87.24 87.24 0 0 0 31.69-5.94m.54-1.29a86.68 86.68 0 0 1-32.28 6.23 88.54 88.54 0 0 1-11.43-.74 87.66 87.66 0 0 1-21-5.44l-8.86 21.43a111.51 111.51 0 0 0 41.27 7.94 109.63 109.63 0 0 0 41.14-8l-8.89-21.41Z" />
            <path
              d="M80.29 115a88.44 88.44 0 0 1-11.36-.74 87.24 87.24 0 0 1-20.37-5.22l7.29-17.62a68 68 0 0 0 15.56 4 69.25 69.25 0 0 0 8.86.58 67.09 67.09 0 0 0 24.34-4.56l7.31 17.6A85.87 85.87 0 0 1 80.29 115Z"
              className="straight_same_double_svg__cls-3"
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
            d="M49.78 136.86a10.87 10.87 0 0 1 3.13.69 9.5 9.5 0 0 1 5.74 12.36 10.19 10.19 0 0 1-18.92-1.21.68.68 0 0 1 .27-.7.79.79 0 0 1 .8-.12 7.06 7.06 0 0 0 9.11-3.67 6.46 6.46 0 0 0-.76-6.2.68.68 0 0 1 0-.76.76.76 0 0 1 .63-.39ZM45.77 163a10.55 10.55 0 0 1 3.13.69A9.51 9.51 0 0 1 54.64 176a10.18 10.18 0 0 1-18.92-1.21.7.7 0 0 1 .22-.73.82.82 0 0 1 .8-.12 7 7 0 0 0 9.11-3.66 6.44 6.44 0 0 0-.75-6.2.7.7 0 0 1 0-.77.77.77 0 0 1 .67-.31ZM58.94 116.8a8.28 8.28 0 0 1 2.42.53 7.35 7.35 0 0 1 4.44 9.56 7.88 7.88 0 0 1-14.63-.89.52.52 0 0 1 .17-.57.62.62 0 0 1 .62-.09 5.44 5.44 0 0 0 7-2.84 5 5 0 0 0-.58-4.79.55.55 0 0 1 0-.6.6.6 0 0 1 .56-.31ZM64.47 95.56a6.87 6.87 0 0 1 2.06.45 6.25 6.25 0 0 1 3.77 8.12 6.69 6.69 0 0 1-12.44-.79.46.46 0 0 1 .14-.48.53.53 0 0 1 .53-.08 4.63 4.63 0 0 0 6-2.41 4.27 4.27 0 0 0-.53-4.08.46.46 0 0 1 0-.5.48.48 0 0 1 .47-.23Z"
            className="straight_same_double_svg__cls-5"
          />
          <path
            d="m67.38 101.86-6.3 25.01-10.11 20-5.55 27.73"
            className="straight_same_double_svg__cls-6"
          />
          <circle
            cx={98.59}
            cy={103.15}
            r={3.82}
            className="straight_same_double_svg__cls-7"
          />
          <circle
            cx={106.75}
            cy={125.01}
            r={3.82}
            className="straight_same_double_svg__cls-7"
          />
          <circle
            cx={112.57}
            cy={149.78}
            r={3.82}
            className="straight_same_double_svg__cls-7"
          />
          <circle
            cx={119.81}
            cy={173.73}
            r={3.82}
            className="straight_same_double_svg__cls-7"
          />
          <path
            d="M75.93 141.79a10.77 10.77 0 0 1 3.21 0 9.51 9.51 0 0 1 8.4 10.72 10.18 10.18 0 0 1-18.7 3.13.68.68 0 0 1 0-.76.81.81 0 0 1 .75-.3 7 7 0 0 0 8-5.64 6.47 6.47 0 0 0-2.06-5.94.7.7 0 0 1-.21-.73.78.78 0 0 1 .61-.48ZM78 168.11a10.38 10.38 0 0 1 3.2-.05 9.51 9.51 0 0 1 8.4 10.73 10.18 10.18 0 0 1-18.69 3.13.68.68 0 0 1 .05-.76.79.79 0 0 1 .75-.3 7.05 7.05 0 0 0 8-5.65 6.44 6.44 0 0 0-2.14-5.86.68.68 0 0 1-.21-.74.74.74 0 0 1 .64-.5ZM80.28 120.17a7.92 7.92 0 0 1 2.48 0 7.34 7.34 0 0 1 6.5 8.29 7.88 7.88 0 0 1-14.46 2.42.51.51 0 0 1 0-.58.63.63 0 0 1 .58-.24 5.45 5.45 0 0 0 6.22-4.36 5 5 0 0 0-1.6-4.57.54.54 0 0 1-.16-.57.61.61 0 0 1 .44-.39ZM80.82 98.22a7.09 7.09 0 0 1 2.11 0 6.25 6.25 0 0 1 5.53 7 6.7 6.7 0 0 1-12.3 2.06.45.45 0 0 1 0-.5.54.54 0 0 1 .5-.2A4.63 4.63 0 0 0 82 102.9a4.24 4.24 0 0 0-1.44-3.9.46.46 0 0 1-.14-.48.54.54 0 0 1 .4-.3Z"
            className="straight_same_double_svg__cls-5"
          />
          <path
            d="m85.09 103.7-.43 25.79-5.29 21.77.91 28.27"
            className="straight_same_double_svg__cls-6"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SvgStraightSameDouble;
