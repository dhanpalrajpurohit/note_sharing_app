import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

  import { Link } from 'react-router-dom'

   
  export default function SignUp() {
    return (
      <div className="flex flex-row h-screen">
      <img
        className="h-screen w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <Card color="transparent" className="mx-auto justify-center place-items-center" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="w-full justify-start">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal w-full justify-start" >
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Username" />
            <Input size="lg" label="First Name" />
            <Input size="lg" label="Last Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to='/signin' className="font-medium text-gray-900">SignIn</Link>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }