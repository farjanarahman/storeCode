import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {

    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover py-10">
            <div className='max-w-7xl mx-auto'>
                <section className='p-10 bg-white rounded'>
                    <h1 className="text-4xl text-center font-bold text-black ">Contact Us</h1>
                    <p className="text-gray-500 pt-10 text-center">We're thrilled that you want to connect with us.At Storecode, your thoughts, questions, and feedback are the driving force behind our commitment to excellence. We're here to listen, assist, and engage with you. Choose your preferred way to reach out:
                    </p>
                    <div className='mt-10 w-[90%] mx-auto grid lg:grid-cols-3 gap-3 justify-items-center container'>
                        <div className='text-justify border-2 px-16 border-pink-500 text-black py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 hover:text-white duration-300 rounded '>
                            <span className='text-5xl pb-2'>
                                <AiOutlineMail className='icon' />
                            </span>
                            <h1 className='font-bold text-xl py-2'>Email</h1>
                            <p className='mb-2'><span className='font-semibold'>Support team: <br /> </span>support@storecode.in</p>
                            <p className='mb-2'><span className='font-semibold'>Influencer Support team: <br /> </span>influencers@storecode.in</p>
                            <p><span className='font-semibold'>Brand collaborations: <br /> </span> business@storecode.in</p>
                        </div>
                        <div className='text-justify border-2 px-16 border-pink-500 text-black py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 hover:text-white duration-300 rounded '>
                            <span className='text-5xl pb-2'>
                                <MdOutlineLocationOn className='icon' />
                            </span>
                            <h1 className='font-bold text-xl py-2'>Address</h1>
                            <p className='mb-2'>Storecode Headquarters <br />
                                Kharadi <br />
                                Pune, India
                            </p>
                        </div>
                        <div className='text-justify border-2 px-16 border-pink-500 text-black py-5 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 hover:text-white duration-300 rounded '>
                            <span className='text-5xl pb-2'>
                                <MdAccessTime className='icon' />
                            </span>
                            <h1 className='font-bold text-xl py-2'>Working Hours</h1>
                            <p className='mb-2'><span className='font-semibold'>Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                            <p className='mb-2'><span className='font-semibold'>Saturday:</span> 10:00 AM - 4:00 PM</p>
                            <p><span className='font-semibold'>Sunday:</span> Closed</p>
                        </div>


                    </div>
                    <div className='flex md:flex-row flex-col my-20 items-center justify-around px-10'>
                        <div className="mb-5 md:mb-0">
                            <h2 className="text-2xl text-center font-bold text-black mb-5">Follow Us:</h2>
                            <div className="grid grid-flow-col gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61552618342420" target="_blank" rel="noopener noreferrer">
                                    <div className=" bg-slate-500 hover:bg-blue-700 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                                        <FaFacebookF className="text-2xl text-white" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/storecode_in/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-slate-500 hover:bg-pink-600 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                                        <FaInstagram className="text-2xl text-white" />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/storecode/about/" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-slate-500 hover:bg-blue-500 rounded-full p-2 hover:scale-125 transition-transform duration-500 ease-in-out">
                                        <FaLinkedinIn className="text-2xl text-white" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="ms-10">
                            <form className="space-y-4 bg-pink-100 rounded-lg px-16 py-8">
                                <div className="form-control">
                                    <label htmlFor="name" className="label text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="input input-bordered"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="email" className="label text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input input-bordered"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="message" className="label text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="input input-bordered pt-2 pb-5"
                                        placeholder="Message"
                                        cols="30"
                                        rows="10"
                                        required
                                    ></textarea>  {/* Closing tag for textarea */}
                                </div>
                        <button type="submit" className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
                            Submit
                        </button>
                        <br />
                    </form>
            </div>
        </div>

                </section >
            </div >
        </div >

    );
};

export default ContactUs;