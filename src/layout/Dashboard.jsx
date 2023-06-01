import React from 'react';
import { AiFillCalendar, AiFillHome, AiFillShop, AiOutlineBars, AiOutlineShoppingCart, AiOutlineUsergroupAdd, AiOutlineWallet } from 'react-icons/ai';
import {FaBook, FaUtensils} from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/bistro.png'
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();
    // const isAdmin = true
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-yellow-500 p-4 w-80  text-base-content">
                    <div><img className='w-44 mx-auto mb-5' src={logo} alt="" /></div>
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin
                            ?
                            <>
                                <li><NavLink to='/dashboard/adminhome'><AiFillHome></AiFillHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><AiOutlineBars></AiOutlineBars> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/home'><AiFillHome></AiFillHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><AiFillCalendar></AiFillCalendar> Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><AiOutlineWallet></AiOutlineWallet> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><AiOutlineShoppingCart></AiOutlineShoppingCart> My Cart <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineBars></AiOutlineBars> Menu List</NavLink></li>
                    <li><NavLink to='/order/salad'><AiFillShop></AiFillShop> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;