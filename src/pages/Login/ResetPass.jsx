// import React from 'react';

// const handleReset = () =>{
//     history("/reset_pass")
// }      

// const ResetPass = () => {
//     return (
//         <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
//             <div className="max-w-md mx-auto bg-white rounded-lg p-16 m-52">
//                 <h2 className="text-center text-4xl font-bold mb-5">Forgot Password</h2>
//                 <form className="space-y-4">
//                     <div className="form-control">
//                         <label htmlFor="name" className="label">
//                             Email
//                         </label>
//                         <input
//                             type="text"
//                             id="reset"
//                             className="input input-bordered"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <button
//                     onClick={handleReset} type="submit" className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
//                         Reset Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ResetPass;

import { useState } from 'react';

const ResetPass = () => {
    const [email, setEmail] = useState('');
    const [resetStatus, setResetStatus] = useState('');

    const handleReset = () => {
        // Simulate a password reset (not secure, for demonstration purposes only)
        // In a real-world scenario, this logic would be handled securely on the server side
        if (email.trim() === '') {
            setResetStatus('Please enter your email.');
        } else {
            setResetStatus('Password reset email sent successfully.');
        }
    };

    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
            <div className="max-w-md mx-auto bg-white rounded-lg p-16 m-52">
                <h2 className="text-center text-4xl font-bold mb-5">Forgot Password</h2>
                <form className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="reset" className="label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="reset"
                            className="input input-bordered"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="button" // Change to type="button" to prevent form submission
                        onClick={handleReset}
                        className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl"
                    >
                        Reset Password
                    </button>
                </form>
                {resetStatus && <p className="text-center mt-4">{resetStatus}</p>}
            </div>
        </div>
    );
};

export default ResetPass;
