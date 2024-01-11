import './App.css';
import { journal } from "../../utils/journal";
import { constants } from "../../utils/constants";

import { Header } from "../Header/Header";
import { Journal } from "../Journal/Journal";

export function App() {
  const { title } = constants;

  return (
    <div className="app">
      <Header title={title} />
      <Journal journal={journal} />
    </div>
  );
}
