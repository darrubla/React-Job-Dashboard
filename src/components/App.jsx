import React, { useState } from "react";
/* import { BrowserRouter, Route, Switch } from "react-router-dom"; */
import Layout from "./Layout";
import JobCardContainer from "./JobCardContainer";
import JobCard from "./JobCard";
import logo from "../assets/images/photosnap.svg";
import dataInfo from "../data.json";

function App() {
  const [data, setData] = useState([]);

  function handleClick() {
    setData(dataInfo);
  }
  return (
    <React.Fragment>
      <Layout>
        <JobCardContainer>
          {data.map((job) => {
            return <JobCard {...job} key={job.id} />;
          })}
          <button onClick={handleClick}>Click</button>
        </JobCardContainer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
