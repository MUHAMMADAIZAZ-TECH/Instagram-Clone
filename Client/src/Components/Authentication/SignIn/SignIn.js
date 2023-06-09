import React,{useState,useEffect} from 'react';
import { TextInput,CustomButton } from '../../UI-Components/Index';
import {Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';

import {signin,clearMessage} from '../../../Store/Slicers/Authentication/AuthenticationSlice';
const SignIn = ()=> {
  const [state,setState] = useState({
    Email:"",
    Password:""
  })
  const State = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const HanldeInput = (e)=>{
    dispatch(clearMessage())
    setState({
      ...state,[e.target.name]:e.target.value
    })
  }
  useEffect(()=>{
    return ()=>{
      dispatch(clearMessage())
    }
  },[])
  return (
    <div className='SignInContainer'>
    <Typography variant="h4" gutterBottom>
      Sign In
    </Typography>
      <TextInput 
          fullWidth 
          label="Email" 
          name="Email" 
          type="text" 
          value={state.Email} 
          change={HanldeInput} 
          variant="outlined" />
      <br/>
        <TextInput 
            fullWidth 
            label="Password" 
            name="Password" 
            type="password" 
            value={state.Password}  
            change={HanldeInput}
            variant="outlined"/>
             <br/>
        {State.message && <div>{State.message}</div>}
        <br/>
        <CustomButton 
            variant="contained" 
            text="Sign In" 
            size="large"
            fullWidth
            onClick={()=>dispatch(signin({state}))}/>
        <br/>
        <Link to="/SignUp">Doesn't have an account?</Link>
    </div>
  )
}

export default SignIn

