// import './Banner.css';


// const Banner = () => {
//         return (
//             <div className="banner">
//                 <div className='content md:mx-auto m-40 bg-white mx-2 md:w-3/6 lg:w-2/6 p-10 rounded-lg'>
//                     <h1 className='font-extrabold text-3xl lg:text-4xl text-black text-center'>Shop with <br /> Storecode</h1>
//                     <div className="input-container mx-auto mt-20">
//                         <input type="text" placeholder="Enter Product Code" className="text-black" />
//                         <div className="input-line w-24"></div>
//                         <button className='uppercase px-16 py-3 mt-5 text-white font-semibold rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Search</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     export default Banner;

import { useState } from 'react';
import './Banner.css'

const Banner = () => {
    const [productCode, setProductCode] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://storecode-server.vercel.app/search?text=${productCode}`);
            const data = await response.json();
            setSearchResult(data);

            // Check if the search was successful and has a product link
            if (data.productLink) {
                // Open the product link in a new tab
                window.open(data.productLink, '_blank');
            } else {
                // Handle the case where the product code is not found
                setError('Product code not found');
            }
        } catch (error) {
            console.error('Error searching for product:', error);
            setError('An error occurred while searching for the product. Please try again later.');
        }
    };

    return (
        <div className="banner">
            <div className='content md:mx-auto m-40 bg-white mx-2 md:w-3/6 lg:w-2/6 p-10 rounded-lg'>
                <h1 className='font-extrabold text-3xl lg:text-4xl text-black text-center'>Shop with <br /> Storecode</h1>
                <div className="input-container mx-auto mt-20">
                    <input
                        type="text"
                        placeholder="Enter Product Code"
                        className="text-black"
                        value={productCode}
                        onChange={(e) => setProductCode(e.target.value)}
                    />
                    <div className="input-line w-24"></div>
                    <button
                        className='uppercase px-16 py-3 mt-5 text-white font-semibold rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Banner;



