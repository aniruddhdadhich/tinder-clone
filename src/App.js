import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats.js";
import ChatScreen from "./Components/ChatScreen";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />

          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/" />
                <ChatScreen />
              </>
            }
          />

          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />

          {/* Card */}
          {/* Buttons */}

          {/* Chat Screen */}
          {/* Individual Chat Screen */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
