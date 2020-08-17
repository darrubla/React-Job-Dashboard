import React from "react";

import Tags from "./Tags.";
import "../assets/styles/components/JobCard.scss";

function JobCard(props) {
  const { logo, company, new: boolean, featured, position, postedAt, contract, location, languages } = props;
  //console.log(props.new);

  function featureState() {
    console.log(featured);
    if (featured) {
      return (
        <React.Fragment>
          <p className="card__jobInformation-featured">{"Feauture"}</p>
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

  /* function featureState() {
    console.log(featured);
    if (!featured) {
      return null;
    } else {
      return "Featured";
      //return null;
    }
  }

  function newState() {
    if (!props.new) {
      return null;
    } else {
      //return null;
      return "New";
    }
  }
 */
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
        {/*   {languages.map((tag) => {
          console.log("esto es un tag", tag);
          return <Tags {...tag} />;
        })} */}
        <Tags tag={"Hola"} />
        <Tags tag={"Hola"} />
        <Tags tag={"Hola"} />
      </div>
    </article>
  );
}

export default JobCard;
