import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TableModalSubmit from './TableModalSubmit';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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
    setOpenModalSubmit:React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalTimer:React.Dispatch<React.SetStateAction<boolean>>;
}
  

export default function ModalSubmit({ openModalSubmit,setOpenModalSubmit,setOpenModalTimer }: ModalSubmitProps) {
  const [value,setValue] = React.useState<number>(0)
  const [status,setStatus] = React.useState<string>('')
  const handleCloseShare = () => {
    setOpenModalSubmit(false);
    setOpenModalTimer(true)
  };
  const handleClose = () => {
    setOpenModalSubmit(false);
  };

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
        <DialogContent dividers>
          <TableModalSubmit/>
        </DialogContent>
        <DialogActions>
        <FormControl>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
            labelId="status-label"
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
            sx={{ height: 56, fontSize: '1.1rem',width:'150px' }}
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
