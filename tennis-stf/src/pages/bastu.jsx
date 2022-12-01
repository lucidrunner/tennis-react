import React from "react";
import "./styles/bastu.scss";

const Bastu = () => {
  //Note to self- this doesn't work
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);
  return (
    <section className="bastu">
      <section className="page-container">
        <p>This is the bastu page</p>
        {/* Dagens bokningar före bokningsformuläret här också */}
      </section>
    </section>
  );
};

export default Bastu;
