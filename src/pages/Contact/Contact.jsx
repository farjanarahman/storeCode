import React from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {

    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover py-10">
            <div className='max-w-7xl mx-auto'>
                <section className='p-10 bg-white rounded'>
                    <h1 className="text-4xl text-center font-bold text-black ">Contact Us</h1>
                    <p className="text-gray-500 pt-10 text-center">We're thrilled that you want to connect with us.At Storecode, your thoughts, questions, and feedback are the driving force behind our commitment to excellence. We're here to listen, assist, and engage with you. Choose your preferred way to reach out:
                    </p>
                    <div className='mt-10 w-[90%] mx-auto grid lg:grid-cols-3 gap-3 justify-items-center container'>
                        <div className='text-justify border-2 border-pink-500 text-black   px-24 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 hover:text-white duration-300 rounded '>
                            <span className='text-5xl pb-2'><AiOutlineMail className='text-pink-500'></AiOutlineMail></span>
                            <h1 className='font-bold text-xl py-2'>Email</h1>
                            <p><span className='font-semibold'>Support team: </span>support@storecode.in</p>
                            <p><span className='font-semibold'>Influencer Support team: </span>influencers@storecode.in</p>
                            <p><span className='font-semibold'>Brand collaborations: </span> business@storecode.in</p>
                            
                        </div>
                        <div className='text-justify border-2 border-yellow-200 text-orange-500   px-20 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 rounded ' >
                            <div>
                                <span className='text-5xl  pb-2 '><AiOutlineMail></AiOutlineMail></span>

                            </div>
                            <h1 className='font-bold py-2'>
                                Email
                            </h1>
                            <p className=''>demo@gmail.com</p>
                            <p className=''>demo2@gmail.com</p>
                        </div>
                        <div className='text-justify border-2 border-yellow-200 text-orange-500   px-20 py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 rounded  '>
                            <span className='text-5xl  pb-2'><FaLocationDot></FaLocationDot></span>

                            <h1 className='font-bold py-2'>Address</h1>
                            <p className=''>Dhaka, Bangladesh</p>
                        </div>
                    </div>

                </section>


            </div>
        </div>

    );
};

export default ContactUs;