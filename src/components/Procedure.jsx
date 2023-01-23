import { Grid, Box, Typography, Button } from "@mui/material";
import procedure_img_1 from "../assets/images/procedure_img_1.png";
import procedure_img_2 from "../assets/images/procedure_img_2.png";
import procedure_img_3 from "../assets/images/procedure_img_3.png";
import procedure_img_4 from "../assets/images/procedure_img_4.png";

import styles from "./Procedure.module.css";

const Procedure = () => {
  return (
    <Box
      className={styles.Procedure}
      sx={{ padding: { sm: "40px 30px", md: "40px 60px" } }}
    >
      <Box className={styles.Procedure_Header}>
        <Typography variant="h2">How our app works?</Typography>

        <Typography variant="h3">We make this APP!</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            // sx={{
            //   height: 233,
            //   width: 350,
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            alt="Procedure Img 1"
            src={procedure_img_1}
          />
          <Typography variant="h4">Lorem ipsum</Typography>
          <Typography variant="body1">
            Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            // sx={{
            //   height: 233,
            //   width: 350,
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            alt="Procedure Img 2"
            src={procedure_img_2}
          />
          <Typography variant="h4">Lorem ipsum</Typography>
          <Typography variant="body1">
            Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            // sx={{
            //   height: 233,
            //   width: 350,
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            alt="Procedure Img 3"
            src={procedure_img_3}
          />
          <Typography variant="h4">Lorem ipsum</Typography>
          <Typography variant="body1">
            Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            // sx={{
            //   height: 233,
            //   width: 350,
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            alt="Procedure Img 4"
            src={procedure_img_4}
          />
          <Typography variant="h4">Lorem ipsum</Typography>
          <Typography variant="body1">
            Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.
          </Typography>
        </Grid>
      </Grid>

      <Button variant="contained" size="large">
        DOWNLOAD NOW
      </Button>
    </Box>
  );
};

export default Procedure;
