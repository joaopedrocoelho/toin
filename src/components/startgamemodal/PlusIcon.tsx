import React from "react";

const PlusIcon = ({ className }: React.SVGProps<SVGElement>) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      className={className}
    >
      <polygon
        points="100,37.5 62.5,37.5 62.5,0 37.5,0 37.5,37.5 0,37.5 0,62.5 37.5,62.5 37.5,100 62.5,100 62.5,62.5 
	100,62.5 "
      />
    </svg>
  );
};

export default PlusIcon;
