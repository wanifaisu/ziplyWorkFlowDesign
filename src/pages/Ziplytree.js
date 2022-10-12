import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, IconButton, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SuccessDialog from "../components/SuccessDialog";
import Massage from "../components/Massage";
import "./style.css";
import Header from "../components/Header";
function Ziplytree() {
  const [treeNoteArray, setTreeNoteArray] = useState([]);
  const [nodeForm, setNodeForm] = useState({});
  const [open, setOpen] = React.useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const addNotesTree = () => {
    const addNote = {
      id: treeNoteArray.length + 1,
      name: "New Flow",
      clicked: false,
    };

    let noteI = [...treeNoteArray];
    noteI.push(addNote);
    setTreeNoteArray(noteI);
  };
  const addNode = () => {
    setOpen(true);
  };
  const submitData = () => {
    let filterData = treeNoteArray.map((item) => {
      return item.id === nodeForm.id ? nodeForm : item;
    });
    setTreeNoteArray(filterData);
    setOpen(false);
    setOpenMessage(true);
  };
  const handleClick = (item) => {
    let itemClicked = { ...item, clicked: true };
    setNodeForm(itemClicked);
    let findMeth = treeNoteArray.map((item) => {
      return item.id === itemClicked.id
        ? itemClicked
        : { ...item, clicked: false };
    });
    setTreeNoteArray(findMeth);
  };
  return (
    <div style={{ marginLeft: "1rem" }}>
      <Grid container spacing={2}>
        <Grid md={2}>
          <Button
            sx={{ ml: 1 }}
            variant="contained"
            onClick={() => {
              addNotesTree();
            }}
          >
            Add New Node
          </Button>
          <Box sx={{ m: 2 }}>
            {treeNoteArray.map((item, index) => {
              return (
                <Box sx={{ mt: 1 }}>
                  <Button
                    className="btn-hover"
                    style={{
                      backgroundColor: item.clicked
                        ? " rgb(179, 187, 187) "
                        : "",
                      color: item.clicked ? "white" : "",
                    }}
                    onClick={() => handleClick(item)}
                    variant="outlined"
                    startIcon={<DeviceHubIcon />}
                  >
                    {item.name}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid md={0.2}>
          <div style={{ borderLeft: "1px solid green", height: "600px" }}></div>
        </Grid>
        <Grid md={2}>
          <Button variant="outlined">VIEW DIAGRAM</Button>
          <Button sx={{ mt: 2 }} variant="contained">
            Add New Node
          </Button>
        </Grid>
        <Grid md={0.2}>
          <div style={{ borderLeft: "1px solid green", height: "600px" }}></div>
        </Grid>
        <Grid md={7}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                backgroundColor: "#e0dbdb",
                borderRadius: "50px",
                color: "white",
              }}
              variant="outlined"
            >
              New Flow
            </Button>
            <Box>
              <Button sx={{ mr: 1 }} variant="outlined">
                Cancel
              </Button>
              <Button variant="contained" onClick={addNode}>
                ADD
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <label>Name</label>
              <br />
              <TextField
                value={nodeForm.name === "New Flow" ? "" : nodeForm.name}
                onChange={(e) => {
                  setNodeForm({ ...nodeForm, name: e.target.value });
                }}
                sx={{ mt: 1 }}
                InputProps={{ sx: { height: 30 } }}
                id="outlined-basic"
                variant="outlined"
              />
            </Box>

            <Box>
              <label>Id</label>
              <br />
              <TextField
                sx={{ mt: 1, color: "red" }}
                value={nodeForm?.id}
                InputProps={{ sx: { height: 30 } }}
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <SuccessDialog
        open={open}
        submitData={submitData}
        handleClose={() => setOpen(false)}
      />
      <Massage
        openMessage={openMessage}
        closeMessage={() => {
          console.log("click");
          setOpenMessage(false);
        }}
      />
    </div>
  );
}

export default Ziplytree;
