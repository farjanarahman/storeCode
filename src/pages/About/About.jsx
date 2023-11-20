import React from 'react';

const About = () => {
    return (
        <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover py-10">
            <div className='max-w-7xl mx-auto'>
                <div className="mx-auto text-black bg-white rounded-md p-10 border border-pink-500 mb-10">
                    <h2 className="text-center text-4xl font-bold mb-4 pb-5">About Storecode</h2>
                    <p className='first-letter:text-2xl text-lg first-letter:font-bold'>
                        Welcome to <span className='italic font-semibold'>Storecode</span>, where innovation meets inspiration! We're not just a website; we're a gateway to a world of limitless possibilities.
                    </p>
                    <p className='text-lg'>
                        At Storecode, we believe that every product tells a unique story. From the trendsetting fashion items that define your style to the cutting-edge tech gadgets that elevate your daily life, each product has a tale to tell. Our mission is to make these stories accessible, shareable, and unforgettable.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5'>
                    {/* Card 1 */}
                    <div className="card bg-base-100 shadow-xl border border-pink-500 p-6 rounded-md">
                        <h2 className="card-title text-pink-600 text-xl font-bold mb-4">Why Unique Codes?</h2>
                        <p>You might wonder, what's so special about unique codes? Well, everything! Our journey began with a simple question: "How can we bridge the gap between the products we love and the people who want them?" The answer was ingenious yet elegantly simple - unique codes. These codes are the keys that unlock a treasure trove of products, all at your fingertips.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-base-100 shadow-xl border border-pink-500 p-6 rounded-md">
                        <h2 className="card-title text-pink-600 text-xl font-bold mb-4">For Influencers and Creators</h2>
                        <p>If you're an influencer or content creator, Storecode is your playground for innovation. Our platform empowers you to effortlessly share your favorite products with your audience. With just a few clicks, you can transform ordinary product links into captivating, clickable experiences. Showcase your style, your passion, and your influence like never before.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-base-100 shadow-xl border border-pink-500 p-6 rounded-md">
                        <h2 className="card-title text-pink-600 text-xl font-bold mb-4">For Curious Shoppers</h2>
                        <p>Are you tired of tedious searches for that perfect item? Say goodbye to endless scrolling and hello to efficiency. Storecode lets you explore the products you love quickly and easily. Simply enter a unique code, and voilà! You're instantly connected to the world of possibilities waiting behind that code.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="card bg-base-100 shadow-xl border border-pink-500 p-6 rounded-md">
                        <h2 className="card-title text-pink-600 text-xl font-bold mb-4">Our Commitment to You</h2>
                        <p>At Storecode, we're not just a platform; we're a community united by a love for innovation and creativity. We're committed to delivering the best experience for both creators and shoppers. Our user-friendly interface, robust security measures, and dedication to continuous improvement ensure that your journey with us is smooth, secure, and sensational.</p>
                    </div>
                    {/* <div className="card bg-gradient-to-r from-pink-500 to-pink-400 shadow-xl border border-pink-500 p-6 rounded-md text-white">
                        <h2 className="card-title text-xl font-bold mb-4">Join the Storecode Community</h2>
                        <p>
                            At Storecode, we're not just a platform; we're a community united by a love for innovation and creativity. We're committed to delivering the best experience for both creators and shoppers. Our user-friendly interface, robust security measures, and dedication to continuous improvement ensure that your journey with us is smooth, secure, and sensational.
                        </p>
                    </div> */}
                </div>
                <div className="mx-auto text-black bg-white rounded-md p-10 border border-pink-500 mb-10">
                    <p className='text-lg'>
                        At Storecode, we're not just a platform; we're a community united by a love for innovation and creativity. We're committed to delivering the best experience for both creators and shoppers. Our user-friendly interface, robust security measures, and dedication to continuous improvement ensure that your journey with us is smooth, secure, and sensational. <br /> <br />

                        Join us on this exciting adventure as we redefine the way products are discovered, shared, and celebrated. Let's unlock the magic of unique codes together and make every product story unforgettable. <br /> <br />
                        Welcome to Storecode, where the world's most exciting products are just a code away! <br /> <br />

                        Ready to dive into the world of Storecode? <span className='uppercase text-xl'>Start exploring now!</span>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;



