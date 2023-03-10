// import Avatar from "@mui/material/Avatar";
// import Avatar from 'react-avatar';
// import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import * as React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./Signup.css";


// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cosylab.iiitd.edu.in/">
      CoSyLab, IIIT-Delhi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [CountryCode, setCountryCode] = useState({ Code: "", number: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        lastName: data.get("lastName"),
        firstName: data.get("firstName"),
        password: data.get("password"),
        mobileNumber: CountryCode.number,
        countryCode:CountryCode.Code
      });
  };
  const handleCountry = (value, data, event, formattedValue) => {
    console.log(data.dialCode);
    console.log(value.slice(data.dialCode.length));
    setCountryCode({
      ...CountryCode,
      Code: data.dialCode,
      number: value.slice(data.dialCode.length),
    });
  };
  const [phoneNumber, setPhoneNumber] = useState("+18182925620");
  //const [phoneNumber, setPhoneNumber] = useState("+18182925620");

  // const onPhoneChanged = (val) => {
  //   setPhoneNumber(val);
  // };
  const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }}>
        <CssBaseline />
        <Paper elevated={4} sx={{ padding: "1rem", marginTop: "1rem", backgroundColor:"rgb(0 0 0)", color:"rgb(255 255 255)", opacity:"0.8"  }}>
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
              
            }}
          >
            <PersonAddAltRoundedIcon sx={{ m: 1}} style={{fontSize: 50}}>
              {/* <LockOutlinedIcon /> */}

            </PersonAddAltRoundedIcon>
            
            <Typography component="h1" variant="h5" style={{ fontSize: 24 }}>
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={false}
                    sx={{
                          "& .MuiInputBase-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root": {
                              color: 'white'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          },
                          "& .MuiOutlinedinput-root": {
                              color: 'white'
                          },
                          
                      }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    sx={{
                          "& .MuiInputBase-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root": {
                              color: 'white'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          }
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={false}
                    sx={{
                          "& .MuiInputBase-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root": {
                              color: 'white'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          }
                      }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: 300 }}>
                  <PhoneInput
                    country={"in"}
                    enableSearch={true}
                    value={phone}
                    onChange={handleCountry}
                    sx={{backgroundColor:"rgb(0 0 0)", color:"rgb(255 255 255)"}}
                  />
                  {/* <Box style={{ width: "95%", maxWidth: "1200px", height:"10%" }} sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
              
            }}>
                      <MuiPhone
                      value={phoneNumber}
                      label="Phone Number"
                      // fullWidth
                      countryOptions={countryOptions}
                      onChange={onPhoneChanged}
                      sx={{
                          "& .MultiFormLabel-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root": {
                              color: 'white'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          },
                          backgroundColor:"rgb(0 0 0)", color:"rgb(255 255 255)", opacity:"0.8"
                      }}
                    />
                    </Box> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{
                          "& .MuiInputBase-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root": {
                              color: 'white'
                          },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          }
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" 
                      sx={{
                      "&.Mui-checked": {
                        color: 'primary.main'
                      },
                      "&.MuiButtonBase-root": {
                        color: 'white'
                      }
                      
                    }}
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
              <Grid item xs>
                  <Link href={"/"} variant="body2">
                    Reset Password
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={"/Login"} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
