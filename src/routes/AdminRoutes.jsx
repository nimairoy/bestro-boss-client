import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            wrapperClass="blocks-wrapper"
        />
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;