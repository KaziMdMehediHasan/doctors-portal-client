import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import DentalCare from "../DentalCare/DentalCare";
import Doctors from "../Doctors/Doctors";
import Patients from "../Patients/Patients";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppointmentBanner></AppointmentBanner>
      <Doctors></Doctors>
      <Patients></Patients>
    </div>
  );
};

export default Home;
