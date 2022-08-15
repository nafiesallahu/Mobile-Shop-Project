import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Question = () => {
  return (
    <div className="container py-4">
      <h5
        className="text-center "
        style={{ fontSize: "30px", marginBottom: "35px" }}
      >
        Frequently Asked Questions
      </h5>

      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Which iPhone is right for you?</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Why do we use it?</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Where does it come from?</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>
  );
};

export default Question;
