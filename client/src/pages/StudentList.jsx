import { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        fetchStudents(); // Refresh list
      } catch (err) {
        console.error('Error deleting student:', err);
      }
    }
  };

  return (
    <div className="container">
      <h3>All Students</h3>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.class}</td>
                <td>
                  {/* Edit & Delete buttons */}
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => navigate(`/add-student?editId=${student._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;