import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Scream from "../components/Scream";
import Profile from "../components/Profile";

//Redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

const Home = ({ data: { loading: isLoading, screams }, getScreams }) => {
  useEffect(() => {
    getScreams();
  }, []);

  let recentScreamsMarkup;

  if (screams && !isLoading) {
    recentScreamsMarkup = screams.map((scream, index) => {
      return <Scream key={index} scream={scream} />;
    });
  } else {
    recentScreamsMarkup = <p>Loading more scream....</p>;
  }

  return (
    <Grid container spacing={8} style={{ marginTop: 10 }}>
      <Grid item xs={12} sm={8}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Profile />
      </Grid>
    </Grid>
  );
};

const mapPropsToState = (state) => {
  return {
    data: state.data,
  };
};

const mapPropsToActions = {
  getScreams,
};

export default connect(mapPropsToState, mapPropsToActions)(Home);
