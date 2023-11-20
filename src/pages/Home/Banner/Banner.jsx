import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className='content md:mx-auto m-40 bg-white mx-2 md:w-3/6 lg:w-2/6 p-10 rounded-lg'>
                <h1 className='font-extrabold text-3xl lg:text-4xl text-black text-center'>Shop with <br /> Storecode</h1>
                <div className="input-container mx-auto mt-20">
                    <input type="text" placeholder="Enter Product Code" className="text-black" />
                    <div className="input-line w-24"></div>
                    <button className='uppercase px-16 py-3 mt-5 text-white font-semibold rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
