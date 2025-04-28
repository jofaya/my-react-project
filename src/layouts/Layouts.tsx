import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { Outlet, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DrawerHeader from "../components/templates/DrawerHeader";
import AppBar from "../components/templates/AppBar";
import SearchBar from "../components/templates/Searchbar";
import Badge from "@mui/material/Badge";
import { getTheme } from "../utils/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NestedList from "../components/System/NestedList";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const Layouts = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(themeMode);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload()
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", maxHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        drawerwidth={drawerWidth}
        position="fixed"
        open={true}
        sx={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ flexGrow: 1 }} />

          <SearchBar />

          <IconButton
            color="inherit"
            aria-label="notifications"
            edge="end"
            size="large"
            sx={{
              ml: 2,
              backgroundColor: "rgba(255,255,255,0.08)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.16)" },
            }}
          >
            <Badge badgeContent={5} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Tooltip title="Logout">
            <IconButton
              color="inherit"
              onClick={handleLogout}
              sx={{
                ml: 4,
                backgroundColor: "rgba(255,255,255,0.08)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.16)" },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            backgroundColor: theme.palette.primary.main,
            boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
          "& .MuiListItemIcon-root": {
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginInline: 2 }} variant="h6" noWrap>
<<<<<<< HEAD
            ROMEO
=======
            Kenny ANDRIANALISOA
>>>>>>> ee0de59 (update)
          </Typography>
        </DrawerHeader>
        <NestedList />
      </Drawer>

      <Main open={true}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default Layouts;
