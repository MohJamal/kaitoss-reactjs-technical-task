import { Grid, Box, Typography, Button } from "@mui/material";
import procedure_img_1 from "../../assets/images/procedure_img_1.png";
import procedure_img_2 from "../../assets/images/procedure_img_2.png";
import procedure_img_3 from "../../assets/images/procedure_img_3.png";
import procedure_img_4 from "../../assets/images/procedure_img_4.png";
import Step from "./Step";

import styles from "./Procedure.module.css";

const Procedure = () => {
  const steps = [
    {
      img: procedure_img_1,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: procedure_img_2,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: procedure_img_3,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: procedure_img_4,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
  ];

  return (
    <Box
      className={styles.Procedure}
      // sx={{ padding: { sm: "40px 30px", md: "40px 60px" } }}
    >
      <Box className={styles.Procedure_Header}>
        <Typography variant="h2">How our app works?</Typography>

        <Typography variant="h3">We make this APP!</Typography>
      </Box>

      <Grid container spacing={3} className={styles.Grid}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={3} key={`${step.title} ${index}`}>
            <Step img={step.img} title={step.title} body={step.body} />
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" size="large">
        DOWNLOAD NOW
      </Button>
    </Box>
  );
};

export default Procedure;
