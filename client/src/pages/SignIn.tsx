import React from "react";
import {
  Avatar,
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'

import {getTokenAPI} from "../services/users";
import {userLoginInterface, UserState} from '../types/index';
import ErrorMessage from "../components/ErrorMessage";

export default function SignIn() {

  let navigate = useNavigate();
  const {user, token, isAuthenticated} = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();


  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errormsg, setErrorMsg] = React.useState("");

  const formSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload:userLoginInterface = {
      "username": username,
      "password": password
    }
    dispatch(getTokenAPI(payload));
    if(isAuthenticated){
      localStorage.setItem('user', user);
      localStorage.setItem('token', token);
      navigate('/');
    }
    else{
      let msg = "provided username and password are incorrect"
      setErrorMsg(msg)
    }    
  }
  return (
    <div className="flex flex-row h-screen">
      <img
        className="h-screen w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Card color="transparent" className="mx-auto w-100 p-0 justify-center place-items-center" shadow={false}>
      {errormsg && <ErrorMessage message={errormsg}/>}
        <div className="flex items-center gap-4">
            <Avatar src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="avatar" variant="square" size="xxl"/>
        </div>
        <Typography variant="h4" color="blue-gray" className="w-full justify-start">
          Sign In
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={formSubmitHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Username" onChange={e => setUsername(e.target.value)}/>
            <Input type="password" size="lg" label="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <Button type="submit" className="mt-6" fullWidth>Sign In</Button>
        </form>
        <Typography color="gray" className="mt-4 text-center font-normal">
            do you have account? if not please register?{" "}
            <Link to='/signup' className="font-medium text-gray-900">SignUp</Link>
          </Typography>
      </Card>
    </div>
  )
}