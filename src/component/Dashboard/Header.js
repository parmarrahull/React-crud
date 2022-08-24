import React from 'react'

const Header = ({setAdding}) => {
    return (
        <header>
            <h1>Student Data</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button class="btn btn-warning" onClick={() => setAdding(true)}>Add Student</button>

      </div>
        </header>
    )
}

export default Header