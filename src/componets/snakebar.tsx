import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import { Snackbar } from "@mui/material"

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


interface SnackBarProps {
  open: boolean,
  message: string,
  color: string,
  onClose: () => void,

}
export default function SnackBarMUI({ open, message,  color, onClose }: SnackBarProps) {
  

  const vertical = "top"
  const horizontal = "center"

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    onClose()
  };

  return (

    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
        <Alert onClose={handleClose} severity="info" icon={false} style={{background: color}} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>


  );
}
