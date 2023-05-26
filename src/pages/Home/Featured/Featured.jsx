import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='pb-24 featured-item text-white'>
            <div className='text-center py-16'>
                <p className='text-warning italic text-xl'> ---- Check it out ----</p>
                <div className="divider after:bg-white before:bg-white w-96 mx-auto"></div>
                <h2 className="text-4xl uppercase">from our menu</h2>
                <div className="divider after:bg-white before:bg-white w-96 mx-auto"></div>
            </div>
            <div className='md:flex justify-center items-center px-24 space-x-4'>
                <div>
                    <img className='w-full' src={featuredImg} alt="" />
                </div>
                <div className='pl-4'>
                    <h3 className="text-2xl">December 20, 2023</h3>
                    <h3 className="text-2xl my-4 uppercase">Where can i get some?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit explicabo, quibusdam iste aperiam consequatur sit veniam minus dignissimos enim possimus dolore mollitia, fugiat aut iusto facere, magni dolorum minima quidem?</p>
                    <button className="btn mt-5 bg-transparent border-0 hover:bg-transparent border-b-slate-50 hover:border-b-warning hover:text-warning border-b-4 hover:border-b-4 duration-300">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;