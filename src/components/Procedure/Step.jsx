import { Box, Typography } from "@mui/material";

const Step = ({ img, title, body }) => {
  return (
    <>
      <Box
        component="img"
        // sx={{
        //   height: 233,
        //   width: 350,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        // }}
        alt="Procedure Img 1"
        src={img}
      />
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </>
  );
};

export default Step;
