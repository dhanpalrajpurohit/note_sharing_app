import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
    Textarea
} from "@material-tailwind/react";

import { useState, useRef, useMemo } from 'react';

import configData from "./../configData.json";

interface DialogSizesInterface {
    show: boolean
    editMode?: boolean
    description?: string
    title?: string
}

export default function DialogSizes(prop: DialogSizesInterface) {

    const [show, setShow] = React.useState(prop.show);
    const [showEditor, setShowEditor] = React.useState(true);
    const handleOpen = (value: boolean) => setShow(value);
    const handleEditor = (value: boolean) => setShowEditor(value);
    const handleView = (value: boolean) => setShow(value)

    const Notes = configData["notes"];

    const editor = useRef(null);
    const [content, setContent] = useState(prop.description);
    const [title, setTitle] = useState(prop.title)

    const handleSave = () => {
        Notes.push({ "title": title, "description": content })
    }

    return (
        <>
            {!prop.editMode && <Dialog
                open={show}
                size={"lg"}
                handler={handleOpen}
            >
                <DialogHeader>
                    <Typography variant="h4" color="blue-gray">
                        Add Note
                    </Typography>

                </DialogHeader>
                <DialogBody divider>
                    <div className="mt-2">
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                <form>
                                    <div className="mb-4 flex flex-col gap-6">
                                        <Input size="lg" label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>

                                    <Textarea
                                        label="Description"
                                        value={content}
                                        onChange={newContent => setContent(newContent)}
                                    />
                                </form>
                            </dl>
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(!show)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleSave}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            }

            {
            prop.editMode && <Dialog open={show}>
                <DialogHeader>{prop.title}</DialogHeader>
                <DialogBody divider>
                    {prop.description}
                </DialogBody>
                <DialogFooter>
                    <Button variant="gradient" onClick={() => handleOpen(!show)}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            }
        </>
    );
}