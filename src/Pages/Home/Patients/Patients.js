import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SinglePatient from "../SinglePatient/SinglePatient";
import { Container } from "@mui/material";

const patients = [
  {
    id: 1,
    name: "Winson Harry",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum,numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!",
    location: "California",
    image: people1,
  },
  {
    id: 2,
    name: "Winson Harry",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum,numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!",
    location: "California",
    image: people2,
  },
  {
    id: 3,
    name: "Winson Harry",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum,numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!",
    location: "California",
    image: people3,
  },
];

const Patients = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {patients.map((patient) => (
            <SinglePatient key={patient.id} patient={patient}></SinglePatient>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Patients;
