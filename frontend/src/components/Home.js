import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import logo from "../images/rocket_logo_full.png";
import { Box } from "@mui/material";

import bg from "../images/homebg.png";

//for testing grid visualization
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  let navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      sx={{
        marginTop: 0,
        backgroundImage: "url(" + bg + ")",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12} sx={{ marginTop: 40 }}>
        <Typography
          variant="h1"
          color="common.white"
          sx={{ fontWeight: "bold" }}
          align="center"
        >
          VelocityDraft
        </Typography>
        <Typography
          align="center"
          variant="h4"
          color="secondary.light"
          sx={{
            fontWeight: 400,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          College Application Essay Scheduler
        </Typography>
      </Grid>
      <Button
        variant="contained"
        sx={{
          color: "white",
          fontWeight: "medium",
          marginTop: 1,
          width: 550,
          height: 50,
          marginBottom: 49,
          fontSize: "20px",
        }}
        onClick={() => navigate("/calculator")}
      >
        Try it out! It's free!
      </Button>
    </Grid>

    // <Grid container spacing={0}
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   alignContent="center"
    //   sx={{ marginTop: 0, backgroundColor: "secondary.light" }}>
    //   <Grid item xs={12} sx={{ marginTop: 10 }}>
    //     <Typography variant="h2" color="primary.contrastText" sx={{ fontWeight: 'bold' }} align="center">
    //       VelocityDraft
    //     </Typography>
    //     <Typography align="center" variant="h6" color="secondary.dark" sx={{ fontWeight: 400, alignContent: "center", justifyContent: "center", alignItems: "center" }}>
    //       College Application Essay Scheduler
    //     </Typography>
    //   </Grid>
    //   <Button variant="contained" sx={{ color: 'white', fontWeight: 'medium', marginTop: 1, width: 350 }}>Try it out! It's free!</Button>

    // </Grid>
  );
}
