import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className='absolute right-8 rounded font-bold top-4 px-4 py-2 text-gray-300 bg-gray-900'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className="btn mt-5 bg-slate-100 border-0 hover:text-gray-800 hover:border-b-gray-800 border-b-warning text-warning hover:bg-warning border-b-4 hover:border-b-4 duration-300">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;