import React from "react";
import LottieAnimation from "./components/Lottie";
import coding from "./animations/coding.json";
import confusedPerson from "./animations/confused-person.json";
import eLearning from "./animations/e-learning.json";
import jobWork from "./animations/job-work.json";

import { Grid } from "@material-ui/core";

export const Animation = () => {
  return (
    <Grid container >
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <LottieAnimation lotti={confusedPerson} height={250} width={250} />
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <LottieAnimation lotti={eLearning} height={250} width={250} />
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <LottieAnimation lotti={jobWork} height={250} width={250} />
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <LottieAnimation lotti={coding} height={250} width={250} />
      </Grid>
    </Grid>
  );
};
