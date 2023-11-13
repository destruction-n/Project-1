import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { projectSelectors } from 'src/store/selectors/selctors';

const PrivateRoute = ({ children }: any) => {
    const { username } = useSelector(projectSelectors.getUserInfo);

    return username ? children : <Navigate to='/main' />
};

export default PrivateRoute;