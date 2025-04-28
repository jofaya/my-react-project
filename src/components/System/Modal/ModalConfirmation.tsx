import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setAgentState } from '../../../redux/agentStateSlice';


interface ModalConfirmationProps {
    setSubmitStatus:React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalSubmit:React.Dispatch<React.SetStateAction<boolean>>;
    setAgentStatePersistant:React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalConfirmation({ setOpenModalSubmit,setAgentStatePersistant }: ModalConfirmationProps) {
  const [open, setOpen] = React.useState(false);
  const agentState = useSelector((state: RootState) => state.agentState.agentState);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setOpen(agentState?.length > 0 && agentState.includes("Pause"));
  }, [agentState]);

  const handleStateAgent = () => {
      dispatch(setAgentState(''))
    }

  const handleClose = () => {
    setOpen(false);
    handleStateAgent()
  };
  const handleCloseAgree = () => {
    setOpen(false);
    setOpenModalSubmit(true)
    setAgentStatePersistant(agentState)
    handleStateAgent()
  };


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Break Request"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Do you really want to request a break of type: {agentState}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
