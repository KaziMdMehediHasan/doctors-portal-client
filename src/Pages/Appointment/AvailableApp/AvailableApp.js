import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import { Alert, Container, Typography } from "@mui/material";
import Booking from "../Appointment/Booking/Booking";

const AvailableApp = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const bookings = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
      price: 50
    },
    {
      id: 1,
      name: "Cosmetic Dentistry",
      time: "08.00 AM - 09.00 AM",
      space: 8,
      price: 50
    },
    {
      id: 1,
      name: "Teeth Cleaning",
      time: "08.00 AM - 09.00 AM",
      space: 9,
      price: 50
    },
    {
      id: 1,
      name: "Cavity Protection",
      time: "08.00 AM - 09.00 AM",
      space: 11,
      price: 50
    },
    {
      id: 1,
      name: "Teeth Filling",
      time: "08.00 AM - 09.00 AM",
      space: 7,
      price: 50
    },
    {
      id: 1,
      name: "Root Canal",
      time: "08.00 AM - 09.00 AM",
      space: 12,
      price: 50
    },
  ];
  return (
    <Container>
      <Typography variant="h5" sx={{ color: "info.main", mb: 2 }}>
        This is AvailableApp {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert variant="filled" severity="success">
          Booked Successfully!
        </Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            setBookingSuccess={setBookingSuccess}
            booking={booking}
            date={date}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableApp;
