import React, { ReactNode } from "react";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed top-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center">
      {children}
    </div>
  );
};

export default ModalWrapper;
