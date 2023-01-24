import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <Box className={styles.Main} component="main">
      <Typography variant="h1">
        Discover the wold of awsome
        <Typography variant="string"> free PSD templates</Typography>
      </Typography>

      <Box component="form">
        <Stack direction="row" spacing={2} justifyContent="center">
          <TextField
            // id="outlined-basic"
            label="EMAIL"
            variant="outlined"
            type="email"
            sx={{
              color: "#fff",
              borderColor: "#fff",
            }}
          />

          <TextField
            // id="outlined-basic"
            label="PASSWORD"
            variant="outlined"
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                md: "240px",
              },
            }}
          >
            REGISTER
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Main;
