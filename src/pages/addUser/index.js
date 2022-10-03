import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userService";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const theme = createTheme();

function AddUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = await createUser({ name, vehicleNumber });
      if (user) {
        alert("User added successfully");
        navigate("/home");
      }
      setLoading(false);
    } catch (error) {
      console.log("Invalid Credential");
    }
  };

  const goToHome = async () => {
    try {
      navigate(`/home`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <ArrowBackIosIcon sx={{ cursor: "pointer" ,paddingBottom: "5px" }} onClick={goToHome} />
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "2px",
            marginTop: "80px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ margin: "10px", backgroundColor: "lightRed" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  label="Driver Name"
                  name="Driver Name"
                  autoComplete="Driver Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  fullWidth
                  name="Vehicle Number"
                  label="Vehicle Number"
                />
              </Grid>
            </Grid>
            {!loading ? (
              <>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    marginTop: "30px",
                    padding: "3px",
                    marginBottom: "20px",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30px",
                  height: "35px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                }}
              >
                <CircularProgress
                  sx={{
                    color: "black",
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddUser;
