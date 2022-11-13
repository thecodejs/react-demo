import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from "../../contexts/AppContext";
import { Routes } from "./routes/Routes";

import "./App.css";

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}
