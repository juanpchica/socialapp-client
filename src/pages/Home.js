import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import { Scream } from "../components/Scream";

export const Home = () => {
  const [screams, setScreams] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getScreams = async () => {
    const { data } = await axios.get(`/screams`);

    //Set screams and show them
    setScreams(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getScreams();
  }, []);

  let recentScreamsMarkup;

  if (screams && !isLoading) {
    recentScreamsMarkup = screams.map((scream, index) => {
      return <Scream key={index} scream={scream}></Scream>;
    });
  } else {
    recentScreamsMarkup = <p>Loading more scream....</p>;
  }

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={8}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item xs={12} sm={4}>
        Profile
      </Grid>
    </Grid>
  );
};
