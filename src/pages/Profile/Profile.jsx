import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
            <div className="max-w-md mx-auto bg-white rounded-md p-5">
                <h2 className="text-center text-4xl font-bold mb-4">Account</h2>
                <CgProfile className='mt-10 mx-auto text-slate-500 text-8xl'/>
                <input type="file" className="mx-auto file-input file-input-ghost w-full max-w-xs" />
                <button type="submit" className="btn mt-5 text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
                        Upload
                    </button>
                <form className="space-y-4">
                    <div className="mt-5 form-control">
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
                            Mobile
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
                        <label htmlFor="link" className="label">
                            Instagram Link
                        </label>
                        <input
                            type="link"
                            id="link"
                            className="input input-bordered"
                            placeholder="Instagram ID link"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="link" className="label">
                            YouTube Channel Link
                        </label>
                        <input
                            type="link"
                            id="link"
                            className="input input-bordered"
                            placeholder="YouTube Channel Link"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
                        SignUp
                    </button>
                </form>

                <p className='text-center mt-5  mb-5'>Already have an account? <Link to='/login' className='text-blue-700 hover:text-pink-700 hover:underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Profile;