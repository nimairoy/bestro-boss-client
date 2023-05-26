import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTabPanel = ({ items }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                items.map(item => <FoodCard
                    key={item.id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabPanel;