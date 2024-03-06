import { ReactNode } from "react";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed top-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center z-50">
      {children}
    </div>
  );
};

export default ModalWrapper;
