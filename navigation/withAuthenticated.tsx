import React from 'react';
import { useAppSelector } from '../redux/store';

const withAuthenticated = (Component: any) => (props: any) => {
    const isAuthenticated = useAppSelector(({ user }) => user.data.email);
    return isAuthenticated ? <Component {...props} /> : null;
};

export default withAuthenticated;
