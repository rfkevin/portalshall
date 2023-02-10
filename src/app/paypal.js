import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { createOrders, captureOrders } from "./api";
export const ButtonWrapper = ({ currency, showSpinner, style, amount }) => {
  const navigate = useNavigate();
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [message, setMessage] = React.useState("");
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={function (data, actions) {
          return createOrders({ currency, amount }).then((order) => {
            return order.data.id;
          });
        }}
        onApprove={function (data, actions) {
          return captureOrders(data.orderID).then((orderData) => {
            // Successful capture! For dev/demo purposes:
            console.log(
              "Capture result",
              orderData,
            );
            var transaction = orderData.data.purchase_units[0].payments.captures[0];
            setMessage("Transaction " +transaction.status + ": " + transaction.id );
            if (transaction.status === "COMPLETED"){
               navigate("/thanks");
            }
          });
        }}
      />
      <Typography variant="body2" color="error">{message}</Typography>
    </>
  );
};
