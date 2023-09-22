import "./App.css";
import { CircularLinkedList } from "./classes/CircularLinkedList";
import Board from "./components/board/Board";

function App() {
  const List = CircularLinkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  List.print();

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <Board />
      </div>
    </>
  );
}

export default App;
