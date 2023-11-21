import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

import useTitle from '../../hooks/useTitle';

const AddProduct = () => {
  useTitle('Add Product')
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    fetch('http://localhost:5000/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)  //product
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // Show SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'The product has been successfully added!',
          confirmButtonText: 'OK'
        });
      })
      .catch(error => {
        console.error(error);
        // Show SweetAlert error message
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the product.',
          confirmButtonText: 'OK'
        });
      });
  };


  return (
    <div className="bg-[url('/public/Banner.jpg')] bg-no-repeat bg-cover p-10">
      <div className="m-24 py-10 px-5 max-w-md mx-auto bg-white rounded-md">
        <h2 className="text-center text-4xl py-5 font-bold mb-4">Share Your Latest Finds</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="pictureUrl" className="label">
              Picture URL
            </label>
            <input
              type="text"
              id="pictureUrl"
              className="input input-bordered"
              {...register("image")}
              placeholder="Enter the picture URL of the toy"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              Seller Email
            </label>
            <input
              type="email"
              id="email"
              value={user?.email || ''}
              className="input input-bordered"
              {...register("email")}
              placeholder="Enter the seller email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="productLink" className="label">
              Product Link
            </label>
            <input
              type="text"
              id="productLink"
              className="input input-bordered"
              {...register("link")}
              placeholder="Product Link"
              required
            />
          </div>

          <button type="submit" className="btn text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full uppercase rounded-3xl">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;