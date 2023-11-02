import {
  Avatar,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom'


export default function SignIn() {
  return (
    <div className="flex flex-row h-screen">
      <img
        className="h-screen w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Card color="transparent" className="mx-auto justify-center place-items-center" shadow={false}>
        <div className="flex items-center gap-4">
            <Avatar src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="avatar" variant="square" size="xxl"/>
        </div>
        <Typography variant="h4" color="blue-gray" className="w-full justify-start">
          Sign In
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            do you have account? if not please register?{" "}
            <Link to='/signup' className="font-medium text-gray-900">SignUp</Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}