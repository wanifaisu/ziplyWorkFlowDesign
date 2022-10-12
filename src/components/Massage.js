import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Massage({ openMessage, closeMessage }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={openMessage}
        autoHideDuration={3000}
        onClose={closeMessage}
      >
        <Alert onClose={closeMessage} severity="success" sx={{ width: "100%" }}>
          Node Added SuccessFully
        </Alert>
      </Snackbar>
    </Stack>
  );
}