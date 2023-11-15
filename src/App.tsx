import { useReducer, useState } from "react";
import "./App.css";
import PlayArea from "./components/board/playArea/PlayArea";
import { ModalContext } from "./context/modalContext";
import { createPortal } from "react-dom";
import { ToinContext, cardProp } from "./context/toinContext";
import { CardClass } from "./classes/Card";
import { circleArr } from "./classes/BoardClass";
import { boardReducer } from "./context/boardReducer";
import { BoardContext } from "./context/boardContext";

function App() {
  const [modal, setNewModal] = useState<JSX.Element | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(boardReducer, {
    outerLayerArr: circleArr,
    secondLayerArr: circleArr,
    thirdLayerArr: circleArr,
    innerLayerArr: circleArr,
    rotateDirection: "clockwise",
  });

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

  const [card, setCard] = useState<cardProp>(null);

  return (
    <BoardContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <ToinContext.Provider
        value={{
          card,
          setCard: (card: CardClass | null) => {
            setCard(card);
          },
        }}
      >
        <ModalContext.Provider
          value={{
            ModalComponent: modal,
            setModal,
            closeModal,
            open,
          }}
        >
          {modal && open && createPortal(modal, document.body)}

          <PlayArea />
        </ModalContext.Provider>
      </ToinContext.Provider>
    </BoardContext.Provider>
  );
}

export default App;
