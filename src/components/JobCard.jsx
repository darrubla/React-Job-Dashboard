import React from "react";

import "../assets/styles/components/JobCard.scss";

const JobCard = ({ logo, company, isNew, featured, jobPosition, time, jobType, from, alt, tag }) => {
  return (
    <article className="card__container">
      <div className="card__container__jobInformation">
        <figure>
          <img src={logo} alt={alt} />
        </figure>
        <div className="card__jobInformation">
          <div className="card__jobInformation-top">
            <p>{company}</p>
            <p>{isNew}</p>
            <p>{featured}</p>
          </div>

          <h2>{jobPosition}</h2>
          <div className="card__jobInformation-bottom">
            <p>{time}</p>
            <span>.</span>
            <p>{jobType}</p>
            <span>.</span>
            <p>{from}</p>
            <span></span>
          </div>
        </div>
      </div>
      <div className="card__tags">
        <h3>{tag}</h3>
        <h3>{tag}</h3>
        <h3>{tag}</h3>
      </div>
    </article>
  );
};

export default JobCard;
