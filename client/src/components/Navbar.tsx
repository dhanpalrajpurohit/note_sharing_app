import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  ListItem
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import DialogSizes from "./DialogBox";

interface CustomNavbarModal {
  showaddNote?: boolean
}

export default function CustomNavbar(props: CustomNavbarModal) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <Navbar className="px-4 !w-full py-2 rounded-none shadow-none border-b-gray-500">
      <div className="flex text-blue-gray-900">
        <button
          className="middle none center h-12 max-h-[48px] w-12 max-w-[48px] font-sans text-sm font-bold uppercase transition-all"
          data-ripple-light="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <Typography
          variant="h6"
          className="cursor-pointer py-1.5 self-center"
        >
          <Link to='/' className="font-medium text-gray-900">Notes Sharing</Link>
        </Typography>
        </div>

        {/* {props.showaddNote &&
          <Button variant="gradient" size="sm" className="flex items-center gap-3" onClick={openModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Note
          </Button>
        } */}

        {/* <div className="hidden gap-2 lg:flex">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal flex items-center gap-2 py-2 pr-4"
          >

            <UserCircleIcon className="h-[18px] w-[18px]" />
            <Link to="/profile">Dhanpal Singh</Link>
          </Typography>
          <Button variant="gradient" size="sm">
            <Link to="/signin">Logout</Link>
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div> */}
      {modalOpen && <DialogSizes show={modalOpen} />}
    </Navbar>
  );
}