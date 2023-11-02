import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ShareIcon } from '@heroicons/react/20/solid'

import { useState } from "react"
import CustomModel from './CustomModel';
import { IconButton } from "@material-tailwind/react";
import DialogSizes from './DialogBox';
import ShareNoteModal from './ShareNoteModal';
import { Draggable } from 'react-beautiful-dnd';


interface CustomCardInterface {
  key: number,
  index: number,
  title: string,
  description: string,
}

export default function CustomCard(prop: CustomCardInterface) {

  const [modalOpen, setModalOpen] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [readModal, setReadModal] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  }

  const viewReadViewModal = () => {
    setReadModal(!readModal)
  }

  const handleShareModal = () => {
    setShareModal(!readModal);
  }

  return (
    <React.Fragment>
      <Card className="h-64">
        <CardBody className="cursor-pointer" onClick={() => setReadModal(!readModal)}>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {prop.title}
          </Typography>
          <Typography>
            {prop.description.substring(0, 150)}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex">
          <p color="blue-gray" className="self-center align-text-bottom flex-1">21 May 2023</p>
          <div className="flex justify-end">
            <IconButton onClick={openModal} type="sm" variant="text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </IconButton>
            <IconButton type="sm" variant="text" onClick={handleShareModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
              </svg>
            </IconButton >
            <IconButton color="red" type="sm" variant="text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
              </svg>
            </IconButton>
          </div>
        </CardFooter>
      </Card>
      {modalOpen && <DialogSizes show={modalOpen} title={prop.title} description={prop.description} />}

      {shareModal && <ShareNoteModal show={shareModal} />}

      {readModal && <DialogSizes show={readModal} title={prop.title} description={prop.description} editMode={readModal} />}

    </React.Fragment >
  );
}