import { useState } from "react";
import "./App.css";
import PlayArea from "./components/board/PlayArea";
import { ModalContext } from "./context/modalContext";
import { createPortal } from "react-dom";

function App() {
  const [modal, setNewModal] = useState<JSX.Element | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  4;

  const setModal = (modal: JSX.Element | null) => {
    // document.body.style.overflow = "hidden";
    // document.body.style.position = "fixed";
    setNewModal(modal);
    setOpen(true);
  };

  const closeModal = () => {
    // document.body.style.position = "static";
    // document.body.style.overflow = "auto";
    setOpen(false);
    setNewModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        ModalComponent: modal,
        setModal,
        closeModal,
        open,
      }}
    >
      {modal && open && createPortal(modal, document.body)}
      <div className="flex w-full h-screen items-center justify-center">
        <PlayArea />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
