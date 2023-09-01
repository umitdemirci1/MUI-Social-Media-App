import styled from "@emotion/styled";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const AddButton = () => {
  return (
    <Box position={"fixed"} sx={{left: "20px", bottom: "30px"}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AddButton;
