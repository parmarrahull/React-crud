import React from 'react'
import Logout from './Logout'

const Header = ({ setAdding, setIsAuthenticated }) => {
    return (
        <header>
            <h1>Student Data</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button style={{ marginRight: '5px' }} class="btn btn-primary" onClick={() => setAdding(true)}>Add Student</button>
                <Logout setIsAuthenticated={setIsAuthenticated} />
            </div>
        </header>
    )
}

export default Header