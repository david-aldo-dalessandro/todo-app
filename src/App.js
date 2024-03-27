import "./App.css";

import { Routes, Route } from "react-router-dom";
import ItemsHome from "./features/items/ItemsHome";
import ItemsTasks from "./features/items/ItemsTasks";

function App() {
  return (
    <Routes>
      <Route index element={<ItemsHome />} />
      <Route path="/item/:itemId" element={<ItemsTasks />} />
    </Routes>
  );
}

export default App;
