import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <PayPalScriptProvider
        deferLoading={true}
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
          components: "buttons",
          currency: "USD",
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
