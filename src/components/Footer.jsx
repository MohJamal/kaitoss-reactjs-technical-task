import { Grid, Box, Typography, Link } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  // const styles = {
  //   backgroundColor: "#191b29",
  //   fontSize: "1rem",
  // };

  return (
    <Box
      className={styles.Footer}
      sx={{ padding: { sm: "40px 30px", md: "40px 60px" } }}
      component="footer"
      // style={styles}
    >
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Link href="#" underline="hover">
                Ad litora torquent
              </Link>
              <Link href="#" underline="hover">
                Per conubia
              </Link>
              <Link href="#" underline="hover">
                Nostra
              </Link>
              <Link href="#" underline="hover">
                Per inceptos
              </Link>
              <Link href="#" underline="hover">
                Himenaeos
              </Link>
              <Link href="#" underline="hover">
                In consectetur
              </Link>
              <Link href="#" underline="hover">
                Nisi sed blandit
              </Link>
              <Link href="#" underline="hover">
                Tincidunt
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Link href="#" underline="hover">
                Class aptent
              </Link>
              <Link href="#" underline="hover">
                Taciti sociosqu
              </Link>
              <Link href="#" underline="hover">
                Ad litora torquent
              </Link>
              <Link href="#" underline="hover">
                Per conubia
              </Link>
              <Link href="#" underline="hover">
                Nostra
              </Link>
              <Link href="#" underline="hover">
                Per inceptos
              </Link>
              <Link href="#" underline="hover">
                Himenaeos
              </Link>
              <Link href="#" underline="hover">
                In consectetur
              </Link>
              <Link href="#" underline="hover">
                Nisi sed blandit
              </Link>
              <Link href="#" underline="hover">
                Tincidunt
              </Link>
            </Grid>
          </Grid>
        </Grid> */}

        <Grid item xs={12} md={3}>
          <Link href="#" underline="hover">
            Ad litora torquent
          </Link>

          <Link href="#" underline="hover">
            Per conubia
          </Link>
          <Link href="#" underline="hover">
            Nostra
          </Link>
          <Link href="#" underline="hover">
            Per inceptos
          </Link>
          <Link href="#" underline="hover">
            Himenaeos
          </Link>
          <Link href="#" underline="hover">
            In consectetur
          </Link>
          <Link href="#" underline="hover">
            Nisi sed blandit
          </Link>
          <Link href="#" underline="hover">
            Tincidunt
          </Link>
        </Grid>

        <Grid item xs={12} md={3}>
          <Link href="#" underline="hover">
            Class aptent
          </Link>
          <Link href="#" underline="hover">
            Taciti sociosqu
          </Link>
          <Link href="#" underline="hover">
            Ad litora torquent
          </Link>
          <Link href="#" underline="hover">
            Per conubia
          </Link>
          <Link href="#" underline="hover">
            Nostra
          </Link>
          <Link href="#" underline="hover">
            Per inceptos
          </Link>
          <Link href="#" underline="hover">
            Himenaeos
          </Link>
          <Link href="#" underline="hover">
            In consectetur
          </Link>
          <Link href="#" underline="hover">
            Nisi sed blandit
          </Link>
          <Link href="#" underline="hover">
            Tincidunt
          </Link>
        </Grid>

        <Grid item xs={12} md={3}>
          <Link href="#" underline="hover">
            Ad litora torquent
          </Link>

          <Link href="#" underline="hover">
            Per conubia
          </Link>
          <Link href="#" underline="hover">
            Nostra
          </Link>
          <Link href="#" underline="hover">
            Per inceptos
          </Link>
          <Link href="#" underline="hover">
            Himenaeos
          </Link>
          <Link href="#" underline="hover">
            In consectetur
          </Link>
          <Link href="#" underline="hover">
            Nisi sed blandit
          </Link>
          <Link href="#" underline="hover">
            Tincidunt
          </Link>
        </Grid>

        <Grid item xs={12} md={3}>
          <Link href="#" underline="hover">
            Class aptent
          </Link>
          <Link href="#" underline="hover">
            Taciti sociosqu
          </Link>
          <Link href="#" underline="hover">
            Ad litora torquent
          </Link>
          <Link href="#" underline="hover">
            Per conubia
          </Link>
          <Link href="#" underline="hover">
            Nostra
          </Link>
          <Link href="#" underline="hover">
            Per inceptos
          </Link>
          <Link href="#" underline="hover">
            Himenaeos
          </Link>
          <Link href="#" underline="hover">
            In consectetur
          </Link>
          <Link href="#" underline="hover">
            Nisi sed blandit
          </Link>
          <Link href="#" underline="hover">
            Tincidunt
          </Link>
        </Grid>
      </Grid>

      <Typography variant="h6">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Try awsome tool for desgners
        <Typography variant="string"> symu.co</Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
