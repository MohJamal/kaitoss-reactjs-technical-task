import { Box, Typography } from "@mui/material";

const CoWorker = ({ img, title, body }) => {
  return (
    <>
      <Box component="img" alt="co_worker" src={img} />
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
    </>
  );
};

export default CoWorker;
