// import React, { useState } from 'react';

// const Partnership = () => {
//   const [showButton, setShowButton] = useState(true);

//   const handleClick = () => {
//     setShowButton(false);
//   };

//   return (
//     <div className=" max-w-5xl mx-auto">
//       <h2 className="text-3xl font-bold text-center my-10">The Exclusive Partnership Program</h2>
//       <div className='border-2 border-red-500 rounded-md p-5'>
//         <p className='mt-3 text-center text-lg'>
//           Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a
//           fantastic advantage – your very own personal store on our website. This store is powered by your influence and
//           recommendations. Here's the twist: We encourage you not to reveal the exact websites from which you purchase
//           the products you promote in your new videos henceforth. Instead, keep it a secret under the code you share.
//         </p>
//         {showButton && (
//           <button
//             className='btn border-solid border-red-400 text-red-400 bg-white hover:text-white hover:bg-red-400 mx-auto block mt-4'
//             onClick={handleClick}
//           >
//             Read More
//           </button>
//         )}
//         {!showButton && (
//           <div>
//             <p className='text-center text-lg'>
//               Why? Because disclosing sites directly can create unnecessary competition and, in many cases, lead to users
//               buying directly from those mentioned sites, bypassing all your hard work. By sharing your unique code, your
//               followers are directed to the product on your recommended site. As we embark on our collaboration with major
//               brands, your influencer status will transform into a powerful partnership program, offering you the
//               opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning
//               potential. This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly
//               with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the
//               most of this exclusive partnership program with Storecode!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Partnership;

import { useState } from 'react';
import './Partnership.css'

const Partnership = () => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(!showButton);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">The Exclusive Partnership Program</h2>
      <div className='border-2 border-red-500 rounded-md p-5'>
        <p className='mt-3 text-center text-lg'>
          Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a
          fantastic advantage – your very own personal store on our website. This store is powered by your influence and
          recommendations. Here's the twist: We encourage you not to reveal the exact websites from which you purchase
          the products you promote in your new videos henceforth. Instead, keep it a secret under the code you share.
        </p>
        {showButton ? (
          <button
          className='btn border-solid border-red-400 bg-white text-ec1a71 hover:text-white hover:bg-#ec1a71 mx-auto block mt-4'
            onClick={handleClick}
          >
            Read More
          </button>
        ) : (
          <div>
            <p className='text-center text-lg'>
              Why? Because disclosing sites directly can create unnecessary competition and, in many cases, lead to users
              buying directly from those mentioned sites, bypassing all your hard work. By sharing your unique code, your
              followers are directed to the product on your recommended site. As we embark on our collaboration with major
              brands, your influencer status will transform into a powerful partnership program, offering you the
              opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning
              potential. This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly
              with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the
              most of this exclusive partnership program with Storecode!
            </p>
            <button
              className='btn border bg-white text-ec1a71 hover:text-white mx-auto block mt-4'
              onClick={handleClick}
            >
              Read Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partnership;
