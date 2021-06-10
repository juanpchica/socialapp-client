import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export const Home = () => {
  const [screams, setScreams] = useState([]);

  const getScreams = async () => {
    const response = await axios.get("/screams");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getScreams();
  }, []);

  let screamsMarkup;
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={8}>
        Scream list
      </Grid>
      <Grid item xs={12} sm={4}>
        Profile
      </Grid>
    </Grid>
  );
};
