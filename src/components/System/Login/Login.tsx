import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const RootContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #F9FAFB 0%, #ECEFF1 100%)",
}));

const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(5),
  maxWidth: "400px",
  width: "100%",
  borderRadius: theme.spacing(2),
  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const Login = () => {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    navigate("/system");
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <RootContainer>
        <Card>
          <Typography
            variant="h5"
            component="h1"
            fontWeight={600}
            textAlign="center"
          >
            Sign in to your account
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                required
                id="email"
                name="email"
                label="Email address"
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  paddingY: 1.3,
                  backgroundColor: "#1976D2",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                  },
                }}
              >
                Continue
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" textAlign="center" mt={2}>
            <Link href="#" underline="hover">
              Forgot your password?
            </Link>
          </Typography>
        </Card>
      </RootContainer>
    </>
  );
};

export default Login;
