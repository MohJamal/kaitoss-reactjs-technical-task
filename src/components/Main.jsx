import { Box, Typography } from "@mui/material";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <Box className={styles.Main} component="main">
      <Typography variant="h1">
        Discover the wold of awsome free PSD templates
      </Typography>
    </Box>
  );
};

export default Main;
