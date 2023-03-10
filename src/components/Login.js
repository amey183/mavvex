// import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { MDBBtn } from "mdb-react-ui-kit";
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { CenterFocusStrong } from "@mui/icons-material";



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

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    
  };

  

  return (
    <>
      <ThemeProvider theme={theme}>
      <div class="transbox">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={4} sx={{ padding: "1rem", marginTop: "4rem", backgroundColor:"rgb(0 0 0)", color:"rgb(255 255 255)", opacity:"0.8" }}>
            <Box
              sx={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              
              
              <AccountCircleIcon sx={{ m: 1}} style={{ fontSize: 50 }}>
                {/* <LockOutlinedIcon /> */}
              </AccountCircleIcon>
              

              
              <Typography component="h1" variant="h5" style={{ fontSize: 24 }}>
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
              <div class="flexbox-container" >
              <div className="d-flex align-items-center ">   
              {/* add 'justify-content-center' to above line  */}
                <EmailRoundedIcon sx={{ m: 1}} style={{ float: 'left', fontSize: 30 }}>
                            {/* <LockOutlinedIcon /> */}
                </EmailRoundedIcon>
                
                <TextField
                  margin="normal"
                  required
                  // fullWidth
                  // width="100%"
                  style = {{width: 320, color: 'white', }}
                  // height="100%"
                  id="email"
                  label="Email Address"
                  // color="white"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  float= "none"
                  overflow= "hidden"
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
                </div>
                </div>

                <div class="flexbox-container" >
              <div className="d-flex align-items-center ">  
                <KeyRoundedIcon sx={{ m: 1}} style={{ float: 'left', fontSize: 30 }}>
                            {/* <LockOutlinedIcon /> */}
                </KeyRoundedIcon>

                <TextField
                  margin="normal"
                  required
                  // fullWidth
                  style = {{width: 320}}
                  KeyRoundedIcon
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                           "& .MuiInputBase-root": {
                          color: 'white'
                         },
                          "& .MuiFormLabel-root.Mui-focused": {
                              color: 'white'
                          },
                          "& .MuiInputLabel-root": {
                              color: 'white'
                          }
                      }}

                      
                />
                </div>
                </div>
                <FormControlLabel
                  control={<Checkbox 
                  value="remember" 
                  color="primary" 
                  sx={{
                      "&.Mui-checked": {
                        color: 'primary.main'
                      },
                      "&.MuiButtonBase-root": {
                        color: 'white'
                      }
                      
                    }}
                  />}
                  label="Remember me"
                />
                        <Box
                          m={1}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          // sx={boxDefault}
                        >
                <Button
                  type="submit"
                  fullWidth
                  // style = {{width: 220}}
                  variant="contained"
                  
                  sx={{ mt: 3, mb: 2 , bgcolor: "primary.main"}}
                >
                  Sign In
                </Button>
                </Box>
                <Grid container>
                  <Grid item xs>
                    <Link href={'/ForgetPassword'} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={"/Signup"} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>

          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </div>
      </ThemeProvider>
    </>
  );
}
