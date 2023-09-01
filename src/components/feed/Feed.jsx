import { Box } from "@mui/material";
import Post from "../post/Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
