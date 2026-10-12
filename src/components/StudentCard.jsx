import { useState } from "react";

function StudentCard(props) {
  const [viewCount, setViewCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="card h-100 shadow-sm">

      {/* Student image placeholder */}
      <div className="bg-light text-center">
        <img
          src="/student-placeholder.png"
          alt="Student placeholder"
          className="img-fluid"
          style={{
            width: "100%",
            height: "160px",
            objectFit: "contain",
          }}
        />
      </div>


      <div className="card-body">

        <h5 className="card-title">{props.name}</h5>

        <p className="card-text">
          <strong>Roll Number:</strong> {props.rollNo}
        </p>

        <p className="card-text">
          <strong>Department:</strong> {props.department}
        </p>

        {showDetails && (
          <p className="card-text">
            <strong>Email:</strong> {props.email}
          </p>
        )}

        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-primary flex-grow-1"
            onClick={() => setViewCount(viewCount + 1)}
          >
            View Profile ({viewCount})
          </button>

          <button
            className="btn btn-info"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide" : "Show"}
          </button>

          <button
            className="btn btn-danger"
            onClick={() => props.onDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
