import { useEffect, useReducer, useState } from "react";
import "./App.css";
import PlayArea from "./components/board/playArea/PlayArea";
import { ModalContext } from "./context/modalContext";
import { createPortal } from "react-dom";
import { ToinContext, cardProp } from "./context/toinContext";
import { circleArr } from "./classes/BoardClass";
import { boardReducer } from "./context/boardReducer";
import { BoardContext } from "./context/boardContext";

import { DeckContext } from "./context/deckContext";
import { PlayerContext } from "./context/playerContext";
import StartGameModal from "./components/modals/StartGameModal";
import {
  PlayerObj,
  playerAction,
  playerReducer,
} from "./context/playerReducer";
import { CardObj } from "./types/card";
import { allSameOneSidePattern, rotatePattern } from "./types/cardpatterns";

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

  const [card, setCard] = useState<cardProp>(null);

  const [deck, setDeck] = useState<CardObj[]>([]);

  const [playerState, playerDispatch] = useReducer(playerReducer, {
    hand: [],
    score: 0,
    name: "",
    id: 1,
    arrow: {
      playerId: 1,
      arrowIndex: 12,
    },
  });

  return (
    <DeckContext.Provider
      value={{
        deck,
        setDeck,
      }}
    >
      <PlayerContext.Provider
        value={{
          state: playerState,
          dispatch: playerDispatch,
        }}
      >
        <BoardContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          <ToinContext.Provider
            value={{
              card,
              setCard: (card: CardObj | null) => {
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
      </PlayerContext.Provider>
    </DeckContext.Provider>
  );
}

export default App;
