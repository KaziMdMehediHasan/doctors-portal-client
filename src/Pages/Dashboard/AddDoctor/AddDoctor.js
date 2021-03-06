
import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {

  const [name, setName]= useState('');
  const [email,setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit=e=>{
    e.preventDefault();
    if(!image){

      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('http://localhost:5000/doctors', {
          method: 'POST',
          body: formData
      })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              setSuccess('Doctor Added Successfully!');
              console.log('Doctor Added Successfully!')
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
  }

  return (
    <div>
      <h2>Add a Doctor</h2>
      <form onSubmit={handleSubmit}>
      <TextField
      sx={{width: '50%'}} 
       label="Name" 
       required
       onChange={e=> setName(e.target.value)}
       variant="standard" />
       <br/>
      <TextField
      sx={{width: '50%'}} 
       label="Email" 
       required
       onChange={e=> setEmail(e.target.value)}
       type="email"
       variant="standard" />
       <br/>
          <Input
           accept="image/*" 
           onChange={e=> setImage(e.target.files[0])}
           type="file" />
          
          <br/>
          <Button variant="contained" type="submit">
            Add Doctor
          </Button>
      </form>
      {
        success && <p style={{color: 'green'}}>{success}</p>
      }
    </div>
  );
};

export default AddDoctor;
