import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = item => {
        // console.log(item)        
        // console.log(user, user.email)
        if (user && user.email) {
            const cartInfo = { foodId: _id, name, image, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch() // call refetch to update the cart items number
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Successfully added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {

                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to login to add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}})
                }
            })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className='absolute right-8 rounded font-bold top-4 px-4 py-2 text-gray-300 bg-gray-900'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn mt-5 bg-slate-100 border-0 hover:text-gray-800 hover:border-b-gray-800 border-b-warning text-warning hover:bg-warning border-b-4 hover:border-b-4 duration-300">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;