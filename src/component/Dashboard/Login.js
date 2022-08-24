import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
    const adminEmail = 'rahul@email.com';
    const adminPassword = '123456';

    const [email, setEmail] = useState('rahul@email.com');
    const [password, setPassword] = useState('123456');

    const handleLogin = e => {
        e.preventDefault();

        if (email === adminEmail && password === adminPassword) {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    localStorage.setItem('is_authenticated', true);
                    setIsAuthenticated(true);

                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully logged in!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            });
        } else {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Incorrect email or password.',
                        showConfirmButton: true,
                    });
                },
            });
        }
    };

    return (
        <div class="row" style={{ justifyContent: "center" }}>
            <div class="col-sm-6 mt-5">
                <form onSubmit={handleLogin}>
                    <h1>Admin Login</h1>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                            class="form-control"
                            type="email"
                            id="email"
                            autoComplete='off'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input
                            class="form-control"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
