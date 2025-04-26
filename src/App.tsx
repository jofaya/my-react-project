import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Material UI
import { ThemeProvider } from "@mui/material/styles";

// Routes
import { MenuItem } from "./constants/NavigationItem";

// Template components
import Layouts from "./layouts/Layouts";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { getTheme } from "./utils/Theme";

// Pages
import Virtual from "./pages/Virtual";
import Login from "./components/System/Login/Login";

const App = () => {
  const mode = useSelector((state: RootState) => state?.theme?.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Redirect from `/` to `/login` */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />

          {/* Authenticated routes under Layout */}
          <Route path="/" element={<Layouts />}>
            {MenuItem.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={item.element}
              />
            ))}
          </Route>

          {/* Direct route */}
          <Route path="/virtual-desk" element={<Virtual />} />

          {/* Fallback 404 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
