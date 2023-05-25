import React from 'react';

const MenuCard = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className='flex space-x-4 mb-16'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-24' src={image} alt="" />
            <div>
                <h3 className="text-2xl">{name} ---------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-warning text-2xl'>${price}</p>
        </div>
    );
};

export default MenuCard;