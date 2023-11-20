import React from 'react';
import { CgProfile } from "react-icons/cg";


const Store = () => {
    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
            <div className="card w-96 bg-base-100 shadow-xl m-52 mx-auto p-5">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                        <CgProfile className=' text-6xl me-5' />
                        <p className='text-xl'>Products: 0</p>
                    </div>
                    <p className='text-center'>No products found</p>
                </div>
            </div>
        </div>
    );
};

export default Store;