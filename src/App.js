import React from "react";
import "./App.css"
import { MainPage } from "./components/MainPage/MainPage";
import { SignUp } from "./componentsPage1/SignUp/SignUp";
import { SignIn } from "./componentsPage1/SignIn/SignIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/main-page" element={<MainPage />}/>s
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
