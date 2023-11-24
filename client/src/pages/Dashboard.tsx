import React from 'react';
import CustomCard from '../components/Card';
import configData from '../configData.json';
import { Button, Input, Typography } from '@material-tailwind/react';

import Paginator from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import DialogSizes from "../components/DialogBox";


const NOTES_DATA = configData['notes'];

function Dashboard() {

  const [modalOpen, setModalOpen] = React.useState(false);
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
                NOTES_DATA.map((note, id) => {
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