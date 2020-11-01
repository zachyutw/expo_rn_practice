import React from 'react';
import { useSelector } from 'react-redux';

const withAuthenticated = (Component: any) => (props: any) => {
    const isAuthenticated = useSelector(() => true);
    return isAuthenticated ? <Component {...props} /> : null;
};

export default withAuthenticated;
