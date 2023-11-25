import React from "react";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import DialogSizes from "./DialogBox";


export default function Sidebar() {

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <Card className="h-screen w-full max-w-[16rem] p-4 py-0 border-none">
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to='/' className="font-medium text-gray-900">Notes</Link>
        </ListItem>
        {/* <ListItem onClick={openModal}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Reminder
          {modalOpen && <DialogSizes show={modalOpen} />}
        </ListItem> */}
        {/* <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to='/profile' className="font-medium text-gray-900">Profile</Link>
        </ListItem> */}
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to='/signin' className="font-medium text-gray-900">Log Out</Link>
        </ListItem>
      </List>
    </Card>
  );
}