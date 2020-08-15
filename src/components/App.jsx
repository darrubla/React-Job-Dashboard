import React from "react";
/* import { BrowserRouter, Route, Switch } from "react-router-dom"; */
import Layout from "./Layout";
import JobCardContainer from "./JobCardContainer";
import JobCard from "./JobCard";
import logo from "../assets/images/photosnap.svg";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <JobCardContainer>
          <JobCard
            logo={logo}
            company={"Photoshop"}
            isNew={"New"}
            featured={"Featured"}
            jobPosition={"Senior Frontend Developer"}
            time={"1d ago"}
            jobType={"Full Time"}
            from={"USA only"}
            alt={"Company logo"}
            tag={"Frontend"}
          />
        </JobCardContainer>
      </Layout>
    </React.Fragment>
  );
};

export default App;
