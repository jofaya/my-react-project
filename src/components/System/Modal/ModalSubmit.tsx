import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface ModalSubmitProps {
    openModalSubmit: boolean;
    setAgentStatePersistant:React.Dispatch<React.SetStateAction<string>>;
    setOpenModalSubmit:React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalTimer:React.Dispatch<React.SetStateAction<boolean>>;
    setSubmitStatus:React.Dispatch<React.SetStateAction<boolean>>;
}
  

export default function ModalSubmit({ openModalSubmit,setOpenModalSubmit,setOpenModalTimer,setSubmitStatus,setAgentStatePersistant }: ModalSubmitProps) {
  const [value,setValue] = React.useState<number>(0)
  const [status,setStatus] = React.useState<string>('')
  const agentState = useSelector((state: RootState) => state.agentState.agentState);

  const handleCloseShare = () => {
    if(agentState?.length > 0 && !agentState.includes("Pause")){
      console.log('if');
      setOpenModalSubmit(false);
      setSubmitStatus(true)
      setAgentStatePersistant(agentState)
    }else{
      setOpenModalSubmit(false);
      setOpenModalTimer(true)
      setSubmitStatus(true)
    }
    
  };
  const handleClose = () => {
    setOpenModalSubmit(false);
  };

  console.log('agentState',agentState);
  

  React.useEffect(() => {
    if(agentState?.length > 0 && (!agentState.includes("Pause") || agentState.includes('Attente'))){
      setOpenModalSubmit(agentState?.length > 0 && (!agentState.includes("Pause") && !agentState.includes("Attente")));
    }
  }, [agentState]);

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModalSubmit}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Veuillez indiquer le status du projet
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogActions>
        <FormControl>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
            labelId="status-label"
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
            sx={{ height: 56, fontSize: '1.1rem',width:'350px' }}
        >
            <MenuItem value="en_attente">En Cours</MenuItem>
            <MenuItem value="validé">Validé</MenuItem>
            <MenuItem value="rejeté">Rejeté</MenuItem>
        </Select>
        </FormControl>
        <TextField
        label="Volume"
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        variant="outlined"
        />
          <Button color="success" autoFocus onClick={handleCloseShare}>
            Envoyer
          </Button>
          <Button color="warning" autoFocus onClick={handleClose}>
            Annuler
          </Button>

        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
