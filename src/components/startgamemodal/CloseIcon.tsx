import React from "react";

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 14 14" {...props}>
      <path
        d="M1.7,0.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L5.6,7l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0
	L7,8.4l5.3,5.3c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.4,7l5.3-5.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7,5.6L1.7,0.3z"
      />
    </svg>
  );
};

export default CloseIcon;
