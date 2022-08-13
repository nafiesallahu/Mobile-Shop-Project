import { useEffect, useState } from "react";
import axios from "axios";
// import io from "socket.io-client";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GoThumbsup } from "react-icons/go";
import { FaHome } from "react-icons/fa";
// import "./Details.css";

const Details = (props) => {
  const [mobile, setMobile] = useState("");
  const { id } = useParams();
  const [allMobiles, setAllMobiles] = useState([]);
  //   const [socket] = useState(() => io(":8000"));

  const navigate = useNavigate();
  console.log(id, "P");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/mobiles/${id}`)
      .then((res) => {
        console.log(res.data, "P");
        setMobile(res.data);
        console.log(res.data, "a");
      })
      .catch((err) => console.log("GET MOBILE BY ID ERROR", err));
  }, [id]);
  const handleDeleteMobile = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/mobiles/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting mobile");
        console.log(response);
        const filteredMobiles = allMobiles.filter((mobile) => {
          return mobile._id !== idFromBelow;
        });
        setAllMobiles(filteredMobiles);
        navigate("/");
      })
      .catch((err) => {
        console.log("error deleting mobile", err.response);
      });
  };
  //   const handleDelete = (id) => {
  //     console.log("DELETE", id);
  //     socket.emit("deletedMobile", id);
  //   };
  //   socket.on("petDeleted", (deletedId) => {
  //     setAllPets(allPets.filter((pet) => pet._id !== deletedId));
  //     navigate("/");
  //   });

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        {" "}
        <div className="col-8 auto">
          <div className="d-flex justify-content-between mt-2">
            <h4>Details: </h4>{" "}
          </div>
          <div className="full d-flex justify-content-center">
            <div className="right mt-3 mb-5">
              <img style={{ width: "250px" }} src={mobile.boxArt} alt="img" />
              <h4 className="mt-3"> {mobile.title}</h4>

              <p>Type: {mobile.type}</p>
              <p>Price: {mobile.price}</p>
              <p>Details: {mobile.details}</p>
              <Link to={`/edit/${mobile._id}`} className="btn btn-success mx-2">
                Edit
              </Link>
              <Link
                to={`/delete/${mobile._id}`}
                onClick={() => handleDeleteMobile(mobile._id)}
                className="btn btn-danger mx-2"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Details;
