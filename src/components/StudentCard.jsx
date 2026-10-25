
import { useState } from 'react'

function StudentCard(props) {
  const [count, setCount] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  if (isDeleted) {
    return null
  }

  return (
    <div className="card h-100 shadow">
      <div className="bg-secondary-subtle text-secondary d-flex justify-content-center align-items-center"
        style={{ height: '150px' }}>
        <div className="text-center">
          <img
            src="/student-placeholder.png"
            alt="Student"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <p className="card-text mb-1">ID: {props.id}</p>
        <p className="card-text mb-1">Year: {props.year}</p>
        <p className="card-text mb-3">Semester: {props.semester}</p>

        <button
          className="btn btn-outline-primary btn-sm me-2 mb-2"
          onClick={() => setCount(count + 1)}
        >
          View Profile ({count})
        </button>

        <button
          className="btn btn-outline-danger btn-sm mb-2"
          onClick={() => setIsDeleted(true)}
        >
          Delete
        </button>

        <button
          className="btn btn-outline-secondary btn-sm me-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="mt-3">
            <p className="card-text">
              <strong>Program:</strong> {props.program}
            </p>
            <p className="card-text">
              <strong>GPA:</strong> {props.gpa}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCard
