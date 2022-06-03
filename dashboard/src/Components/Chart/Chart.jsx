import { useState } from "react";

import "./Chart.css";
export const Chart = () => {
  return (
    <div className="chartContainer">
      <h3 className="chartTitle">Godine korisnika</h3>
      <div className="sideChart">
        <span>500</span>
        <span>400</span>
        <span>300</span>
        <span>200</span>
        <span>100</span>
        <span>0</span>
      </div>
      <div className="lowChart">
        <span className="label1">18-28</span>
        <span className="label2">28-38</span>
        <span className="label3">38-48</span>
        <span className="label4">48-58</span>
        <span className="label5">58-68</span>
        <span className="label6">68-78</span>
        <span className="label7">78+</span>
      </div>
      <div className="stripeLines">
        <div className="stripe1"></div>
        <div className="stripe2"></div>
        <div className="stripe3"></div>
        <div className="stripe4"></div>
        <div className="stripe5"></div>
        <div className="stripe6"></div>
      </div>
      <div className="columns">
        <div className="column1"></div>
        <div className="column2"></div>
        <div className="column3"></div>
        <div className="column4"></div>
        <div className="column5"></div>
        <div className="column6"></div>
        <div className="column7"></div>
      </div>
    </div>
  );
};
