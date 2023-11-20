import { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const RegisterForm = () => {

    useTitle('Register');
    const { createUser } = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const storename = form.storename.value
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, storename, email, password);
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser)
                })
                .catch(error => {
                    console.log(error);
                }) 
    }

    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
            <div className="max-w-md mx-auto bg-white rounded-md p-5">
                <h2 className="text-center text-4xl font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="storename" className="label">
                            Store Name
                        </label>
                        <input
                            type="text"
                            id="storename"
                            className="input input-bordered"
                            placeholder="Enter your Storename"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="number" className="label">
                            Number
                        </label>
                        <input
                            type="number"
                            id="number"
                            className="input input-bordered"
                            placeholder="Enter your number"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
                        SignUp
                    </button>
                </form>
 
                <p className='text-center mt-5  mb-5'>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;
