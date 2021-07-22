import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DataList from "./components/DataList";
import AvgPrice from "./components/AvgPrice";

const dataList = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App({ name, age }) {
  const [ready, setReady] = useState(true);
  const [state2, setState2] = useState(7);

  function changeReadyState() {
    setReady(!ready);
  }

  return (
    <div>
      <Button changeReadyState={changeReadyState} />
      <DataList dataList={dataList} />
      <AvgPrice dataList={dataList} />
      <p>{ready ? "ready" : "not ready"}</p>
    </div>
  );
}

export default App;
