import { createContext } from "react";

export interface ModalContextValues {
  ModalComponent: JSX.Element | null;
  setModal: (modal: JSX.Element | null) => void;
  open: boolean;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValues>({
  ModalComponent: null,
  setModal: () => {},
  closeModal: () => {},
  open: false,
});
