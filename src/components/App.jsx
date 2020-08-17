import React, { useState } from "react";
/* import { BrowserRouter, Route, Switch } from "react-router-dom"; */
import Layout from "./Layout";
import JobCardContainer from "./JobCardContainer";
import JobCard from "./JobCard";
import logo from "../assets/images/photosnap.svg";
import dataInfo from "../data.json";

function App() {
  const [data, setData] = useState([]);

  function printdata() {
    console.log(dataInfo);
  }

  function handleClick() {
    setData(dataInfo);
  }
  return (
    <React.Fragment>
      <Layout>
        <JobCardContainer>
          {data.map((job) => {
            console.log("esto es el id", job.id);
            return <JobCard {...job} key={job.id} />;
          })}

          {/*     <JobCard
            logo={logo}
            company={"Photoshop"}
            isNew={"New"}
            featured={"Featured"}
            position={"Senior Frontend Developer"}
            postedAt={"1d ago"}
            contract={"Full Time"}
            location={"USA only"}
            alt={"Company logo"}
            languages={"Frontend"}
          /> */}

          {console.log("Bug", <JobCard />)}
          <button onClick={handleClick}>Click</button>
        </JobCardContainer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
