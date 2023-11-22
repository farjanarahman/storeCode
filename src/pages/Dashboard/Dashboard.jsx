import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const generateRandomCode = (name) => {
    // Ensure the name is defined and at least 3 characters long
    if (name && name.length >= 3) {
      // Slice the first three letters of the name and convert to uppercase
      const truncatedName = name.slice(0, 3).toUpperCase();

      // Generate a random string of three numbers
      const randomNumberString = Math.floor(Math.random() * 900) + 100;

      return truncatedName + randomNumberString;
    } else {
      // Handle the case where name is undefined or too short
      return "N/A"; // Or any default value you want
    }
  };

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    const length = useLoaderData();

    const [counter, setCounter] = useState(101); // Starting from 102

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    useEffect(() => {
        // fetch(`http://localhost:5000/dashboard/${user?.email}`)
        fetch(`http://localhost:5000/allproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [user]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/allproducts/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Delete Response:', data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = products.filter(product => product?._id !== id);
                        setProducts(remaining);
                    }
                })
                .catch(error => {
                    console.error('Delete Fetch Error:', error);
                });
        }
    };

    const filteredProducts = products.filter(product => product?.email === user?.email);


    return (
        <div className="overflow-x-auto">
            <h2 className="text-center text-4xl py-5 font-bold">Track Your Impact: Insight at a Glance
            </h2>
            <h2 className="text-center text-3xl py-5 font-bold mb-4">Products: {filteredProducts.length}</h2>

            <table className="table table-compact table-zebra w-full">
                <thead className='bg-pink-300'>
                    <tr>
                        <th className=' text-lg font-medium text-black'>ID</th>
                        <th className=' text-lg font-medium text-black'>Product Name</th>
                        <th className=' text-lg font-medium text-black'>Email</th>
                        <th className=' text-lg font-medium text-black'>Product Code</th>
                        <th className=' text-lg font-medium text-black'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr className='bg-pink-100' key={index}>
                            <td>{counter + index}</td>
                            <td>{product?.name}</td>
                            <td>{product?.email}</td>
                            <td>{generateRandomCode(product?.name)}</td>
                            <td>
                                <button onClick={() => handleDelete(product?._id)} className="btn btn-error"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit" className="ms-5 btn mt-5 mx-auto text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 uppercase rounded-2xl">
            <Link to='/addProduct'>Add Product</Link>
          </button>
        </div>
    );
};

export default Dashboard;

