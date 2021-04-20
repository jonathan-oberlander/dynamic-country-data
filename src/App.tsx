import React from "react";
import { Body } from "./components/body";
import { Card } from "./components/card";
import { Search } from "./components/search";

function App() {
  return (
    <Body>
      <Search />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Body>
  );
}

export default App;
