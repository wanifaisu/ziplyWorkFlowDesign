import { Box } from "@mui/material";
import Header from "./components/Header";
import Ziplytree from "./pages/Ziplytree";

function App() {
  return (
    <div>
      <Header />
      <Box sx={{ mt: 4 }}>
        {" "}
        <Ziplytree />
      </Box>
    </div>
  );
}

export default App;
