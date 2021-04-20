import React from "react";
import { Typography, Grid } from "@material-ui/core";

export const Heading = () => {
  return (
    <Grid container align="center" justify="center">
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <Typography variant="h3">NextStacks</Typography>
      </Grid>
      <Grid item md={12}  lg={12} sm={12} xs={12}>
        <Typography variant="body1">
          Best Plateform To learn Trending Technologies and Stand Out From the
          Crowd
        </Typography>
      </Grid>
    </Grid>
  );
};
