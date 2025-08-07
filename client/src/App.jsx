import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </>
  );
};

export default App;
