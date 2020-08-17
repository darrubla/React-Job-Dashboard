import React, { useState } from "react";

import Tags from "./Tags";
import "../assets/styles/components/JobCard.scss";
import "../assets/styles/components/Tags.scss";

function JobCard(props) {
  const { logo, company, new: boolean, featured, position, postedAt, contract, location, languages } = props;

  /*  const [languagess, setLanguages] = useState([]); */

  console.log("Languages ", languages);

  let tag;

  if (languages) {
    tag = languages.map((item) => <Tags tag={item} />);
  }

  function featureState() {
    console.log(featured);
    if (featured) {
      return (
        <React.Fragment>
          <p className="card__jobInformation-featured">{"Feautured"}</p>
        </React.Fragment>
      );
    }
  }

  function newState() {
    if (props.new) {
      return (
        <React.Fragment>
          <p className="card__jobInformation-new">{"New"}</p>
        </React.Fragment>
      );
    }
  }

  return (
    <article className="card__container">
      <div className="card__container__jobInformation">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card__jobInformation">
          <div className="card__jobInformation-top">
            <p className="card__jobInformation-company">{company}</p>

            {newState()}
            {featureState()}
          </div>

          <h2>{position}</h2>
          <div className="card__jobInformation-bottom">
            <p>{postedAt}</p>
            <span>.</span>
            <p>{contract}</p>
            <span>.</span>
            <p>{location}</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className="card__tags">
        {tag}
        {/*  {languages.forEach((tag) => {
          return <Tags tag={tag} />;
        })} */}
        {/* {languages.map((tag) => {
          console.log("esto es un tag", <Tags />);
          return <Tags {...tag} key={tag} />;
        })} */}
        {/*   <Tags tag={"Hola"} />
        <Tags tag={"Hola"} />
        <Tags tag={"Hola"} /> */}
      </div>
    </article>
  );
}

export default JobCard;
