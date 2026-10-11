
function StudentCard(props) {
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

        <div className="d-flex gap-2">
          <button className="btn btn-primary flex-grow-1">
            View Profile
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
