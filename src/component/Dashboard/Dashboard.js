import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Add from './Add'
import Edit from './Edit'
import Header from './Header'
import List from './List'
import { studentData } from '../data/index.js'

const Dashboard = ({ setIsAuthenticated }) => {
  const [students, setStudents] = useState(studentData);
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('students_data'));
    if (data !== null && Object.keys(data).length !== 0) setStudents(data);
  }, []);


  const handleEdit = id => {
    const [student] = students.filter(student => student.id === id);
    setSelectedStudent(student);
    setEditing(true)
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    })
    const studentCopy = students.filter(student => student.id !== id);
    localStorage.setItem('student_data', JSON.stringify(studentCopy));
    setStudents(studentCopy);
  }

  return (
    <div>
      {!adding && !editing && (
        <>
          <Header
            setAdding={setAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <List
            students={students}
            Edit={handleEdit}
            Delete={handleDelete}
          />
        </>
      )}
      {adding && (
        <Add
          students={students}
          setStudents={setStudents}
          setAdding={setAdding}
        />
      )}
      {editing && (
        <Edit
          students={students}
          selectedStudent={selectedStudent}
          setStudents={setStudents}
          setEditing={setEditing}
        />
      )}
    </div>
  )
}

export default Dashboard