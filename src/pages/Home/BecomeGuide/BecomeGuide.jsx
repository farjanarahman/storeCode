import { Link } from 'react-router-dom';
import './BecomeGuide.css'
const BecomeGuide = () => {
  return (
    <div className="text-center mt-10 background py-10">
      <h1 className="text-3xl font-bold mb-4 text-white">Become a Guide at StoreCode
</h1>
      <button className="btn hover:text-lg hover:underline"><Link to='/register'>Register</Link></button>
    </div>
  );
};

export default BecomeGuide;
