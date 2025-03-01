import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const addStudent = (student: any) => axios.post(`${API_URL}/students`, student);
export const getStudent = (studentId: string) => axios.get(`${API_URL}/students/${studentId}`);
export const deleteStudent = (studentId: string) => axios.delete(`${API_URL}/students/${studentId}`);
