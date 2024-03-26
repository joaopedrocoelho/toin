import { ReactNode } from "react";

const ModalWrapperBlur = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed top-0 w-full h-full blurredBG flex justify-center items-center z-50">
      {children}
    </div>
  );
};

export default ModalWrapperBlur;
