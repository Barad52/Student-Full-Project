import { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';
import StudentCard from '../components/StudentCard';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      const latest = res.data.slice(-3).reverse(); // Show last 3 added students
      setStudents(latest);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Welcome to Student Management System</h2>
      <div className="row">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
