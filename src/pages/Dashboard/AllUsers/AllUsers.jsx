import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaUserShield } from 'react-icons/fa'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="overflow-x-auto w-3/4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' : <FaUserShield onClick={() => handleMakeAdmin(user._id)} className='text-4xl p-2 rounded bg-yellow-400 text-yellow-800 cursor-pointer'></FaUserShield>}</td>
                            <td><AiFillDelete onClick={() => handleDelete(user._id)} className='text-4xl p-2 rounded bg-red-400 text-red-800 cursor-pointer'></AiFillDelete></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;