import { useState } from "react";
import "./App.css";
import { CircularLinkedList } from "./classes/CircularLinkedList";

function App() {
  const List = CircularLinkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  List.print();

  return (
    <>
      <div>{}</div>
    </>
  );
}

export default App;
