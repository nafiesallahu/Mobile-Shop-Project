import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditMobile = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  // ComponentDidMount (react life cycle methods)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/mobiles/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setType(res.data.type);
        setBoxArt(res.data.boxArt);
        setPrice(res.data.price);
        setDetails(res.data.details);
      })
      .catch((err) => console.log("GET MOBILE BY ID ERROR", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/mobiles/${id}`, {
        title,
        type,
        boxArt,
        price,
        details
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log("POST ERROR", err));
  };

  return (
    <div className="card2">
      <form className="formstyle" onSubmit={handleSubmit}>
        {/* <div class="form-row col-md-12 "> */}
        <div class="form-group col-md-10">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div class="form-group col-md-10">
          <label>Type</label>
          <select
            className="form-control"
            value={type}
            name="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option>Please select </option>
            <option value="Iphone">iPhone</option>
            <option value="Samsung">Samsung</option>
          </select>
          {errors.type && (
            <span className="text-danger">{errors.type.message}</span>
          )}
        </div>
        <div class="form-group col-md-10">
          <label>Box Art</label>
          <input
            className="form-control"
            type="text"
            value={boxArt}
            onChange={(e) => setBoxArt(e.target.value)}
          />
          {errors.boxArt && (
            <span className="text-danger">{errors.boxArt.message}</span>
          )}
        </div>
        <div class="form-group col-md-10">
          <label>Price</label>
          <input
            className="form-control"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div class="form-group col-md-10">
          <label>Details</label>
          <input
            type="text"
            value={details}
            className="form-control"
            placeholder="Please add details"
            onChange={(e) => setDetails(e.target.value)}
          />
          {errors.details && (
            <span className="text-danger">{errors.details.message}</span>
          )}
        </div>

        <button class="btn btn-success">Save</button>
        {/* </div> */}
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label>Title</label>
    //   <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    //   <label>Genre</label>
    //   <select value={genre} name="genre" onChange={(e) => setGenre(e.target.value)}>
    //     <option>Select a Genre</option>
    //     <option value="Comedy">Comedy</option>
    //     <option value="Drama">Drama</option>
    //     <option value="Horror">Horror</option>
    //     <option value="Sci-Fi">Sci-Fi</option>
    //     <option value="Fantasy">Fantasy</option>
    //     <option value="Action">Action</option>
    //     <option value="Family">Family</option>
    //     <option value="Animated">Animated</option>
    //     <option value="Documentary">Documentary</option>
    //     <option value="Romance">Romance</option>
    //     <option value="Silent Movie">Silent Movie</option>
    //     <option value="Thriller">Thriller</option>
    //     <option value="Crime Noir">Crime Noir</option>
    //     <option value="French Cinema">French Cinema</option>
    //   </select>
    //   <label>Box Art</label>
    //   <input type="text" value={boxArt} onChange={(e) => setBoxArt(e.target.value)} />
    //   <label>Duration</label>
    //   <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
    //   <label>Rating</label>
    //   <select value={rating} name="rating" onChange={(e) => setRating(e.target.value)}>
    //     <option>Select a Rating</option>
    //     <option value="G">G</option>
    //     <option value="PG">PG</option>
    //     <option value="PG-13">PG-13</option>
    //     <option value="R">R</option>
    //     <option value="NC-17">NC-17</option>
    //   </select>
    //   <label>Actors</label>
    //   <input
    //     type="text"
    //     value={actors}
    //     placeholder="enter actors with commas"
    //     onChange={(e) => setActors(e.target.value)}
    //   />
    //   <label> Kid Friendly</label>
    //   <input
    //     type="checkbox"
    //     checked={isKidFriendly}
    //     onChange={(e) => setIsKidFriendly(e.target.checked)}
    //   />
    //   <label> Release Year</label>
    //   <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />

    //   <button>Update Movie</button>
    // </form>
  );
};

export default EditMobile;
