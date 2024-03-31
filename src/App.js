import "./App.css";

import { Routes, Route } from "react-router-dom";
import ItemsHome from "./features/items/ItemsHome";
import ItemsTasks from "./features/items/ItemsTasks";
import TabItemList from "./features/Tabs/TabItemList";

function App() {
  return (
    <Routes>
      <Route index element={<ItemsHome />} />
      <Route path="/item/:itemId" element={<ItemsTasks />} />
      <Route path="/category/:itemCat" element={<TabItemList />} />
    </Routes>
  );
}

export default App;
