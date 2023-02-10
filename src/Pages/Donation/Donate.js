import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { ButtonWrapper } from "../../app/paypal";
import FilledInput from "@mui/material/FilledInput";
import MenuItem from "@mui/material/MenuItem";

import useStyles from "./style";
// This values are the props in the UI
const style = { layout: "vertical" };

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
];

export default function App() {
  const classes = useStyles();

  const [values, setValues] = React.useState("1");
  const [currency, setCurrency] = React.useState("USD");

  const handleChangeC = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange = (prop) => (event) => {
    setValues(event.target.value.replace(/[^0-9]/g, "").toString());
  };
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.images}
            src="https://portalshall.s3.eu-west-3.amazonaws.com/main/Donations.png"
            alt="donation"
          />
        </Grid>

        <Grid item xs={12} md={6} align="center">
          <Paper elevation={3} background="palette.secondary">
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <Typography variant="h5">Donations</Typography>
              </Grid>
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <Grid container spacing={0}>
                  <Grid item xs={3} align="center">
                    <TextField
                      style={{ width: "80%" }}
                      variant="filled"
                      id="currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChangeC}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={9} align="center">
                    <FilledInput
                      fullWidth
                      id="amount"
                      value={values}
                      onChange={handleChange()}
                    />
                  </Grid>
                </Grid>
              </FormControl>
              <Grid item xs={12} align="center">
                <div
                  style={{
                    minWidth: "300px",
                    minHeight: "200px",
                    maxWidth: "80%",
                  }}
                >
                  <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    style={style}
                    amount={values}
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
