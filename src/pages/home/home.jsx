import { Box, Button, Stack } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Navbar from "../../components/navbar/Navbar";
import AddButton from "../../components/add-button/AddButton";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
        <AddButton />
      </Stack>
    </Box>
  );
};

export default Home;
