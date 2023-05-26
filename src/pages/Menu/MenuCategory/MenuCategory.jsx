import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuCard from '../../../components/MenuCard/MenuCard';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>

            {
                title && <Cover
                    img={coverImg}
                    heading={title}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></Cover>
            }

            <div className='mb-16 mt-10'>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                    {
                        items.map(item => <MenuCard
                            key={item._id}
                            item={item}
                        ></MenuCard>)
                    }
                </div>
                <div className="text-center">
                    <Link to={`/order/${title}`} className="btn mt-5 bg-transparent border-0 hover:bg-transparent text-gray-800 border-b-gray-800 hover:border-b-warning hover:text-warning border-b-4 hover:border-b-4 duration-300">Order Your Favourite Food</Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;