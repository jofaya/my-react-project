import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WcIcon from '@mui/icons-material/Wc';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ForumIcon from '@mui/icons-material/Forum';
import BuildIcon from '@mui/icons-material/Build';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from "react-redux";
import { setAgentState } from '../../redux/agentStateSlice';

export default function NestedList() {
  const [openPause, setOpenPause] = React.useState(false);
  const [openProduction, setOpenProduction] = React.useState(false);
  const [openAutre, setOpenAutre] = React.useState(false);
  const dispatch = useDispatch();

  const handleStateAgent = (stateCurrent: string) => {
    dispatch(setAgentState(stateCurrent))
  }

  const handleClickPause = () => {
    setOpenPause(!openPause);
  };
  const handleClickProduction = () => {
    setOpenProduction(!openProduction);
  };
  const handleClickAutre = () => {
    setOpenAutre(!openAutre);
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClickPause}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Pause" />
        {openPause ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPause} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("Pause Allaitement")}>
            <ListItemIcon><ChildFriendlyIcon /></ListItemIcon>
            <ListItemText primary="Pause Allaitement" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("Pause Déjeuner")}>
            <ListItemIcon><RestaurantIcon /></ListItemIcon>
            <ListItemText primary="Pause Déjeuner" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("Pause toilette")}>
            <ListItemIcon><WcIcon /></ListItemIcon>
            <ListItemText primary="Pause toilette" />
          </ListItemButton>
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
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("analyse")}>
            <ListItemIcon><AnalyticsIcon /></ListItemIcon>
            <ListItemText primary="Analyse" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("debrief")}>
            <ListItemIcon><ForumIcon /></ListItemIcon>
            <ListItemText primary="Débrief" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("production")}>
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Production" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickAutre}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Autre" />
        {openAutre ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAutre} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("ostie")}>
            <ListItemIcon><ReportProblemIcon /></ListItemIcon>
            <ListItemText primary="Ostie" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("convocation_rh")}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Convocation RH" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleStateAgent("autre")}>
            <ListItemIcon><MoreHorizIcon /></ListItemIcon>
            <ListItemText primary="Autre" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
