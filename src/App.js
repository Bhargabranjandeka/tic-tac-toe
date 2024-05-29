import "./styles.css";
import Tic_tac_toe from "./tic-tac-toe";
import { Gameprovider } from "./context/tic-tac-toe-context";
export default function App() {
  return (
    <Gameprovider>
      <Tic_tac_toe />
    </Gameprovider>
  );
}
