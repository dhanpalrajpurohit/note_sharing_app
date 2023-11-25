import React, {useEffect} from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useDispatch, useSelector } from "react-redux";

import CustomCard from '../components/Card';
import configData from '../configData.json';
import Paginator from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import DialogSizes from "../components/DialogBox";

import {getNotes} from "../services/notes";


const NOTES_DATA = configData['notes'];

function Dashboard() {

  let userTestStatus: { id: number, title: string, description: string, created: string, updated: string, user: number };
  const [modalOpen, setModalOpen] = React.useState(false);
  const [notes, setNotes] = React.useState<userTestStatus[]>([]);
  const {user, token} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log({token});
  if(!token){
    const local_token = localStorage.getItem('authToken');
    useEffect(() =>{
      const response = getNotes(local_token)
      response && setNotes(response);
      console.log({response});
    }, []);
  }
  
  const openModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className='flex'>
        <div className=''><Sidebar /></div>
        <div className='mx-auto max-w-screen-xl py-2 place-items-center'>
          <div className="flex justify-center">
            <Button variant="gradient" size="sm" className="flex items-center gap-3" onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add Note
            </Button>
            {modalOpen && <DialogSizes show={modalOpen} />}
          </div>
          <div className='w-full h-full'>
            <div className='grid grid-cols-3 gap-4'>
              {
                notes && notes.map((note, id) => {
                  return <CustomCard key={id} title={note.title} description={note.description} />
                })
              }
            </div>
            {/* <div className='flex justify-center py-4'><Paginator /></div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard