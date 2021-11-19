import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import treatment from "../../../images/treatment.png";

const verticalCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
};

const DentalCare = () => {
  return (
    <Container>
      <Grid sx={{ my: 5, py: 5 }} container spacing={2}>
        <Grid item sx={{ pl: 5 }} xs={12} md={6}>
          <img
            style={{ width: "400px", height: "520px" }}
            src={treatment}
            alt=""
          />
        </Grid>
        <Grid
          sx={{ ...verticalCenter, textAlign: "left", pr: 5 }}
          item
          xs={12}
          md={6}
        >
          <Grid>
            <Typography variant="h3" gutterBottom component="div">
              Execptional Dental Care, on Your Terms.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body2" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>
          <Button
            variant="contained"
            style={{ margin: "16px 0", backgroundColor: "#5CE7ED" }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
