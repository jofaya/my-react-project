import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {  useDispatch } from "react-redux";
import { setAgentState } from '../../redux/agentStateSlice';



export default function NestedList() {
  const [openPause, setOpenPause] = React.useState(true);
  const [openProduction, setOpenProduction] = React.useState(true);
  const dispatch = useDispatch();

  const PauseStates = ["Pause Allaitement", "Pause Déjeuner", "Pause toilette"];
  
  const handleStateAgent = (stateCurrent: string) => {
    dispatch(setAgentState(stateCurrent))
  }

  const handleClickPause = () => {
    setOpenPause(!openPause);
  };
  const handleClickProduction = () => {
    setOpenProduction(!openProduction);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClickPause}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Pause" />
        {openPause ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPause} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            PauseStates.map((state) => (
              <ListItemButton key={state} sx={{ pl: 4 }} onClick={() => handleStateAgent(state)}>
                <ListItemIcon><StarBorder /></ListItemIcon>
                <ListItemText primary={state} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickProduction}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Production" />
        {openProduction ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProduction} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Test" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
