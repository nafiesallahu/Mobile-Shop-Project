import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import iphone from "../images/iphone.jpg";
import i13 from "../images/i13.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import "./Home.css";

const Home = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/mobiles")
      .then((res) => {
        console.log(res.data);
        setMobiles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="home-img">
        <img src={iphone} alt="img" />
      </div>
      <p id="new">NEWEST IPHONE</p>
      <div className="the-button">
        <a class="btn btn-primary" href="/newmobile" role="button">
          Add <AiOutlinePlus />
        </a>
      </div>
      <div className="card-deck">
        {mobiles.map((mobile) => (
          <div className="card">
            <img src={mobile.boxArt} alt="img" />
            <div className="card-body">
              <h5 className="card-title">{mobile.title}</h5>
              <p className="card-text">{mobile.price}</p>
              <button type="button" class="btn btn-info">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
