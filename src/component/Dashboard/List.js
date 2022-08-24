import React from 'react'

const List = ({students, Edit, Delete}) => {

    students.forEach((student, i) => {
        student.id = i + 1;
      });
    // console.log("list===>",students);
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Date</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.length > 0 ? (
                    students.map((student, i) => (
                        <tr key={student.id}>
                            <th>{i + 1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.fees}</td>
                            <td>{student.date}</td>
                            <td className="text-right">
                                <button
                                    onClick={() => Edit(student.id)}
                                    class="btn btn-success"
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="text-left">
                                <button
                                    onClick={() => Delete(student.id)}
                                    class="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No Students</td>
                    </tr>
                )}

            </tbody>
        </table>
    )
}

export default List