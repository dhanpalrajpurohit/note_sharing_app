import React, {useEffect} from "react";
import { Alert } from "@material-tailwind/react";

interface ErrorMessageInterface {
    message: string | null
};

function ErrorMessage(props:ErrorMessageInterface) {
    const [visible, setIsVisible] = React.useState(false);

    useEffect(() => {
        if(!props?.message){
         setIsVisible(false)
         return
        }
        setIsVisible(true)
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000);
        return () => clearTimeout(timer);
      }, [props?.message])

    return (
        visible && <Alert>{props?.message}</Alert>
    )
}

export default ErrorMessage
