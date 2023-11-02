import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";

interface ShareNoteModal {
    show: boolean
}

export default function ShareNoteModal(props: ShareNoteModal) {
    const [open, setOpen] = React.useState(props.show);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        Enter the email address to share the note
                        <Input label="Email" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Send Note
                        </Button>
                        <Typography variant="small" className="my-auto flex justify-center"> OR </Typography>
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Generate the QR code
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog >
        </>
    );
}