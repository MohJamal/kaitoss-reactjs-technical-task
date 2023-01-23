import { Grid, Box, Typography } from "@mui/material";
import CoWorker from "./CoWorker";

import co_worker_img from "../../assets/images/co-worker.png";
import styles from "./Team.module.css";

const Team = () => {
  const coworkers = [
    {
      img: co_worker_img,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: co_worker_img,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: co_worker_img,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
    {
      img: co_worker_img,
      title: "Lorem ipsum",
      body: `Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum
            aliquam lectusmattis ac.`,
    },
  ];

  return (
    <Box
      className={styles.Team}
      // sx={{ padding: { sm: "40px 30px", md: "40px 60px" } }}
    >
      <Box className={styles.Team_Header}>
        <Typography variant="h2">Meet our team</Typography>

        <Typography variant="h3">We make this APP!</Typography>
      </Box>

      <Grid container spacing={3}>
        {coworkers.map((coworker, index) => (
          <Grid item xs={12} md={3} key={`${coworker.title} ${index}`}>
            <CoWorker
              img={coworker.img}
              title={coworker.title}
              body={coworker.body}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
