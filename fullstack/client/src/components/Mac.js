import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import mac from "../images/mac.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import "./Home.css";
const Mac = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/mobiles")
      .then((res) => {
        console.log(res.data, "res");
        setMobiles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="home-img">
        <img src={mac} alt="img" />
      </div>
      <p id="new">THE NEWEST PRODUCTS</p>
      <div className="the-button">
        <a className="btn btn-primary" href="/newmobile" role="button">
          Add <AiOutlinePlus />
        </a>
      </div>
      <div className="card-deck">
        {mobiles.map((mobile, index) => {
          if (mobile.type === "Mac") {
            return (
              <div className="card" key={mobile._id}>
                <img src={mobile.boxArt} alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{mobile.title}</h5>
                  <p className="card-text">{mobile.price}</p>
                  <Link
                    to={`/details/${mobile._id}`}
                    className="btn btn-info mx-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          } else {
            <h1>No Iphone avaible</h1>;
          }
        })}
      </div>
    </div>
  );
};

export default Mac;
