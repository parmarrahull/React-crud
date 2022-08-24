import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Add = ({ students, setStudents, setAdding }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [fees, setFees] = useState('');
    const [date, setDate] = useState('');

    const handleAdd = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !fees || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }

        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            email,
            fees,
            date,
        };

        students.push(newStudent);
        localStorage.setItem('studentData', JSON.stringify(students));
        setStudents(students);
        setAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <>
            <div class="row" style={{ justifyContent: "center" }}>
                <div class="col-sm-6 mt-5">
                    <form onSubmit={handleAdd}>
                        <h1>Add Student</h1>
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

                        <button style={{ marginTop: '1px' }} type="submit" class="btn btn-primary">Submit</button>
                        <button style={{ marginLeft: '12px' }} type="button" class="btn btn-primary" onClick={() => setAdding(false)}>Cancel</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add;