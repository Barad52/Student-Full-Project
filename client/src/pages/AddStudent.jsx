import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../services/studentService';

const AddStudent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    class: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.rollNo || !formData.class) {
      alert('All fields are required');
      return;
    }

    try {
      await addStudent(formData);
      alert('Student added successfully!');
      navigate('/students');
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input
            type="text"
            name="rollNo"
            className="form-control"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Enter roll number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Class</label>
          <input
            type="text"
            name="class"
            className="form-control"
            value={formData.class}
            onChange={handleChange}
            placeholder="Enter class (e.g., 10th A)"
          />
        </div>

        <button type="submit" className="btn btn-success">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
