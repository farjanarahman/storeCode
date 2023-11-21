import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    const length = useLoaderData()

    useEffect(() => {
        // fetch(`http://localhost:5000/dashboard/${user?.email}`)
        fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [user]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/dashboard/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = products.filter(product => product?._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-center text-4xl py-5 font-bold">Track Your Impact: Insight at a Glance
            </h2>
            <h2 className="text-center text-3xl py-5 font-bold mb-4">Products : {length.length}
</h2>
            <table className="table table-compact table-zebra w-full">
                <thead className='bg-pink-300'>
                    <tr>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr className='bg-blue-300' key={product?._id}>
                            <td>{product?.name}</td>
                            <td>{product?.email}</td>
                            
                            <td>
                                <button onClick={() => handleDelete(product?._id)} className="btn btn-error"><FaTrash /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
