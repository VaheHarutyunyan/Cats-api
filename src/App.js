import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HomePage from "./components/HomePage/HomePage";
import Category from "./components/Category/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/category/:ids" element={<Category />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
