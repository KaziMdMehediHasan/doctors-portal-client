import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    // console.log(doctor);
    const {name, imageBuffer} = doctor;
    // console.log(image);
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img 
            style={{ width: '200px', height: '200px', 'object-fit': 'cover' }}
            src={`data:image/png;base64,${imageBuffer}`} alt=""/>
            <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;