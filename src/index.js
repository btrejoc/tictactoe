import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './/App'
import './App.css'

import Game from "./pages/Game/Game";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Game />
    </StrictMode>
);