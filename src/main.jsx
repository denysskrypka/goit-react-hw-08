import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";

import "modern-normalize";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Oval } from "react-loader-spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Oval />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
