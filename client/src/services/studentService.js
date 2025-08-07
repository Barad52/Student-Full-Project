import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const getStudents = async () => axios.get(API_URL);
export const addStudent = async (student) => axios.post(API_URL, student);
export const updateStudent = async (id, student) => axios.put(`${API_URL}/${id}`, student);
export const deleteStudent = async (id) => axios.delete(`${API_URL}/${id}`);
export const getStudentById = async (id) => axios.get(`${API_URL}/${id}`);