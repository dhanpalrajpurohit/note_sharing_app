import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Input,
} from "@material-tailwind/react";

interface ResetPasswordModalInterface {
    current_password?: boolean,
    new_password?: boolean,
    show: boolean,
}

export default function ResetPasswordModal(props: ResetPasswordModalInterface) {
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
                        please provide the current password and new password
                        <Input type="password" label="Current Password" size="lg" />
                        <Input type="password" label="New Password" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0 flex gap-4">
                        <Button variant="gradient" fullWidth>
                            Save
                        </Button>

                        <Button variant="text" fullWidth>
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog >
        </>
    );
}