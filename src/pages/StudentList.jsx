import React, { useContext, useState } from 'react';
import { StudentContext } from '../StudentContext';

const StudentList = () => {
 
  const { students, editStudent, deleteStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleEditClick = (student) => {
    setIsEditing(true);
    setCurrentStudent(student);
  };

  const handleDelete = (studentId) => {
    deleteStudent(studentId);
  };

  const handleUpdate = () => {
    editStudent(currentStudent);
    setIsEditing(false);
    setCurrentStudent(null);
  };

  const handleInputChange = (e) => {
    setCurrentStudent({ ...currentStudent, [e.target.name]: e.target.value });
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">{student.phone}</td>
              <td className="border px-4 py-2">{student.classname}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditClick(student)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={currentStudent.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={currentStudent.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-2">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={currentStudent.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="classname" className="block font-medium mb-2">
                ClassName:
              </label>
              <input
                type="text"
                id="classname"
                name="classname"
                value={currentStudent.classname}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentList;
