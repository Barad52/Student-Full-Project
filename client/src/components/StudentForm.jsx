import { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [studentClass, setStudentClass] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setRollNo(initialData.rollNo || '');
      setStudentClass(initialData.class || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rollNo || !studentClass) return alert('All fields required');

    onSubmit({
      name,
      rollNo,
      class: studentClass,
    });

    // Clear form after submission
    setName('');
    setRollNo('');
    setStudentClass('');
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
      <h4>{initialData._id ? 'Edit Student' : 'Add Student'}</h4>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Roll No</label>
        <input
          type="number"
          className="form-control"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter roll number"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Class</label>
        <input
          type="text"
          className="form-control"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          placeholder="Enter class name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {initialData._id ? 'Update' : 'Add'} Student
      </button>
    </form>
  );
};

export default StudentForm;
