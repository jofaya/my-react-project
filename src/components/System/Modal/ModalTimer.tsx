import React from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function ModalTimer({
  open,
  handleClose,
  agentStatePersistant,
}: {
  open: boolean;
  handleClose: () => void;
  agentStatePersistant: string;
}) {
  const [seconds, setSeconds] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (open) {
      setSeconds(0);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSeconds(0);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [open]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Vous êtes actuellement en status Pause</DialogTitle>
      <DialogContent>
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h4" gutterBottom>
            {agentStatePersistant}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {formatTime(seconds)}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="success">
          Prêt
        </Button>
      </DialogActions>
    </Dialog>
  );
}
