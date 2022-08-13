import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NewMobile.css";

const NewMobile = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/mobiles", {
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
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <div className="card2">
      <form className="formstyle" onSubmit={handleSubmit}>
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
            <option value="IPad">iPad</option>
            <option value="Mac">Mac</option>
            <option value="Accessories">Accessories</option>
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
      </form>
    </div>
  );
};

export default NewMobile;
