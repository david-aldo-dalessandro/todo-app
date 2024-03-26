import "./App.css";
import ItemsList from "./features/items/ItemsList";
import ItemsAddition from "./features/items/ItemsAddition";

function App() {
  return (
    <div className="App">
      To do app
      <br />
      <ItemsAddition />
      <ItemsList />
    </div>
  );
}

export default App;
