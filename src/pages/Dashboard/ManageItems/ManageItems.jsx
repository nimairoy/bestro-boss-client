import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div className='w-3/4 max-h-screen'>
            <SectionTitle subHeading={'Hurry Up!'} heading={'Manage All Items'}></SectionTitle>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>{index + 1}</th>
                                <td><img className='w-20' src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td> ${item.price}</td>
                                <td><AiFillEdit className='text-4xl p-2 rounded bg-yellow-400 text-yellow-800 cursor-pointer'></AiFillEdit></td>
                                <td><AiFillDelete onClick={() => handleDelete(item)} className='text-4xl p-2 rounded bg-red-400 text-red-800 cursor-pointer'></AiFillDelete></td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default ManageItems;