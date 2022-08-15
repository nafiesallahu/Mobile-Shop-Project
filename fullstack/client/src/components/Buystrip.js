import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import box from "../images/box.PNG";
import "./Buystrip.css";

const Buystrip = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <h3>Special carrier deals at Apple</h3>
            <h2>
              Save up to $700 on iPhone 13 and iPhone 13 Pro after trade‑in.5
            </h2>
            <p>
              You can pay over time when you choose to check out with Apple Card
              Monthly Installments.*
            </p>
            <img src={box} alt="img" />
            <h6>
              Our Specialists can help you shop — online or in store. Connect
              with an iPhone Specialist
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buystrip;
