import { Alert, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  const [removed, setRemoved] = useState(false);

  const { token } = useAuth();
  // console.log(token);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    console.log(email);
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  const handleRemoveAdmin = (e) => {
    const user = { email };

    fetch("http://localhost:5000/users/normal", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setRemoved(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>

      {/* remove from admin */}
      <form onSubmit={handleRemoveAdmin}>
        <TextField
          sx={{ width: "50%" }}
          label="email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Remove Admin
        </Button>
      </form>
      {/* end of remove from admin */}
      {success && (
        <Alert variant="filled" severity="success">
          Admin added successfully!
        </Alert>
      )}
      {removed && (
        <Alert variant="filled" severity="success">
          Removed from Admin successfully!
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
