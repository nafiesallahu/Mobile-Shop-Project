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
      .catch((err) => console.log(err));
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
      .catch((err) => {
        setErrors(err.response.data.err.errors);
        console.log(err, "errori");
      });
  };

  return (
    <div className="card2">
      <form className="formstyle" onSubmit={handleSubmit}>
        <div className="form-group col-md-10">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title ? (
            <span className="text-danger">{errors.title.message}</span>
          ) : null}
        </div>
        <div className="form-group col-md-10">
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
          {errors.type ? (
            <span className="text-danger">{errors.type.message}</span>
          ) : null}
        </div>
        <div className="form-group col-md-10">
          <label>Box Art</label>
          <input
            className="form-control"
            type="text"
            value={boxArt}
            onChange={(e) => setBoxArt(e.target.value)}
          />
          {errors.boxArt ? (
            <span className="text-danger">{errors.boxArt.message}</span>
          ) : null}
        </div>
        <div className="form-group col-md-10">
          <label>Price</label>
          <input
            className="form-control"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price ? (
            <span className="text-danger">{errors.price.message}</span>
          ) : null}
        </div>
        <div className="form-group col-md-10">
          <label>Details</label>
          <input
            type="text"
            value={details}
            className="form-control"
            placeholder="Please add details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default EditMobile;
