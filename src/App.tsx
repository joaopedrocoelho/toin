import { useReducer, useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import { circleArr } from "./classes/BoardClass";
import PlayArea from "./components/board/playArea/PlayArea";
import { BoardContext } from "./context/boardContext";
import { boardReducer } from "./context/boardReducer";
import { ModalContext } from "./context/modalContext";

import { TurnContext, initialTurnContextState } from "@context/turnContext";
import { turnReducer } from "@context/turnReducer";
import StartGameModal from "./components/modals/StartGameModal";
import { DeckContext } from "./context/deckContext";
import { PlayersContext } from "./context/playersContext";
import { playersReducer } from "./context/playersReducer";
import { CardObj } from "./types/card";

function App() {
  const [modal, setNewModal] = useState<JSX.Element | null>(<StartGameModal />);
  const [open, setOpen] = useState<boolean>(true);
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

  const [deck, setDeck] = useState<CardObj[]>([]);

  const [playerState, playerDispatch] = useReducer(playersReducer, {
    activePlayer: 0,
    players: [],
  });

  const [turnState, turnDispatch] = useReducer(
    turnReducer,
    initialTurnContextState
  );

  return (
    <DeckContext.Provider
      value={{
        deck,
        setDeck,
      }}
    >
      <PlayersContext.Provider
        value={{
          state: playerState,
          dispatch: playerDispatch,
        }}
      >
        <TurnContext.Provider
          value={{
            state: turnState,
            dispatch: turnDispatch,
          }}
        >
          <BoardContext.Provider
            value={{
              state,
              dispatch,
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
          </BoardContext.Provider>
        </TurnContext.Provider>
      </PlayersContext.Provider>
    </DeckContext.Provider>
  );
}

export default App;
