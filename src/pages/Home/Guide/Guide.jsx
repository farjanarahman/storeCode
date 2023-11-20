import { FaMoneyBillAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Guide = () => {
    return (
        <div className="flex items-center justify-center">
            <div>
                <h2 className="text-3xl font-bold text-center my-10">Guide Your Followers</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto items-center lg:grid-cols-3'>
                    <div className="card w-auto bg-base-100 shadow-xl">
                        <div className="card-body flex items-center justify-center">
                            <FaMoneyBillAlt style={{ color: '#ec1a71', fontSize: '4em' }} />
                            <h2 className="text-xl font-bold">Earn Rewards</h2>
                            <p className="text-center">Earn from every purchase made through your unique codes.

                            </p>
                        </div>
                    </div>
                    <div className="card w-auto bg-base-100 shadow-xl">
                        <div className="card-body flex items-center justify-center px-20">
                            <FaShoppingCart style={{ color: '#ec1a71', fontSize: '4em' }} />
                            <h2 className="text-xl font-bold">Your Personal Store
                            </h2>

                            <p className="text-center">Have a personal store powered by your influence.


                            </p>
                        </div>
                    </div>
                    <div className="card w-auto bg-base-100 shadow-xl">
                        <div className="card-body flex items-center justify-center px-20">
                            <FaLock style={{ color: '#ec1a71', fontSize: '4em' }} />
                            <h2 className="text-xl font-bold">Exclusive Codes

                            </h2>

                            <p className="text-center">Keep your recommended sites a secret under your unique code.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;