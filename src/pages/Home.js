import React from "react";
import Grid from "@material-ui/core/Grid";

export const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        Scream list
      </Grid>
      <Grid item xs={12} sm={4}>
        Profile
      </Grid>
    </Grid>
  );
};
