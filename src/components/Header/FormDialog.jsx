import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Login from "./Login";
import Registration from "./Registration";
import { useState } from "react";

export default function FormDialog() 
{
    const [open, setOpen] = React.useState(false);
    const [isRegistration, setIsRegistration] = useState(false);

  const handleClickOpen = () => 
  {
    setOpen(true);
    setIsRegistration(false);
  }
  const handleClose = () => setOpen(false);

  const toggleRegistration = () => setIsRegistration(!isRegistration);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={ open } onClose={handleClose}>
        <DialogTitle> {isRegistration ? "Registration" : "Authorization"} </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx=
          {
            {
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }
          }
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          { isRegistration ? <Registration toggleRegistration={toggleRegistration}/> : <Login toggleRegistration={toggleRegistration}/> } 
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
