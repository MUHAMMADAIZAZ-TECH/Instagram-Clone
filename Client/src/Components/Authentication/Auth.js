import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Outlet } from 'react-router-dom';
import {  CssBaseline, Box, Container } from "@mui/material";
function Auth() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: '90vh' }} >
          <Outlet/>
          </Box>
        </Container>
      </React.Fragment>
    );
}

export default Auth;
export {
    SignIn,
    SignUp
}