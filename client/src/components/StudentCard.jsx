import { Link } from 'react-router-dom';

const StudentCard = ({ student }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">
            <strong>Roll No:</strong> {student.rollNo} <br />
            <strong>Class:</strong> {student.class}
          </p>
          <Link to="/students" className="btn btn-sm btn-primary">
            View All Students
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
