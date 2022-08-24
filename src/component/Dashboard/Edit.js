import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ students, selectedStudent, setStudents, setEditing }) => {
  const id = selectedStudent.id;
  const [firstName, setFirstName] = useState(selectedStudent.firstName);
  const [lastName, setLastName] = useState(selectedStudent.lastName);
  const [email, setEmail] = useState(selectedStudent.email);
  const [fees, setFees] = useState(selectedStudent.fees);
  const [date, setDate] = useState(selectedStudent.date);

  const Update = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !fees || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      firstName,
      lastName,
      email,
      fees,
      date,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    localStorage.setItem('students_data', JSON.stringify(students));
    setStudents(students);
    setEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${students.firstName} ${students.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div class="row" style={{ justifyContent: "center" }}>
      <div class="col-sm-6 mt-5">
        <form onSubmit={Update}>
          <h1>Edit Student</h1>
          <div class="mb-3">
            <label class="form-label">First Name</label>
            <input
              type="girstname"
              class="form-control"
              id="firstname"
              autoComplete='off'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />

            <label class="form-label">Last Name</label>
            <input
              type="lastname"
              class="form-control"
              id="lastname"
              autoComplete='off'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />

            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              autoComplete='off'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label class="form-label">Fees</label>
            <input
              type="number"
              class="form-control"
              id="fees"
              autoComplete='off'
              value={fees}
              onChange={e => setFees(e.target.value)}
            />

            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              autoComplete='off'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <button style={{ marginTop: '1px' }} className='gap-3' type="submit" class="btn btn-primary">Update</button>
          <button style={{ marginLeft: '12px' }} type="button" class="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>

        </form>
      </div>
    </div>
  )
}

export default Edit