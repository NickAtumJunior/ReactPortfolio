import "./App.css";
import { Grid, Tooltip } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function App() {
  const linkStyle = {
    margin: "1%",
    color: "white",
    fontSize: "1em",
    textDecoration: "none",
  };

  const style = {
    backgroundColor: "rgb(45, 72, 63)",
  };
  return (
    <Grid container>
      <BrowserRouter>
        <AppBar position="sticky">
          <Toolbar variant="dense" style={style}>
            <Tooltip title="Home">
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </Tooltip>
            <Tooltip title="About">
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </Tooltip>
            <Tooltip title="Services">
              <Link to="/services" style={linkStyle}>
                Services
              </Link>
            </Tooltip>
            <Tooltip title="Contact">
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
