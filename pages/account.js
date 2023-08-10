import Router from 'next/router';
import React, { useEffect } from 'react'

const Account = () => {

    useEffect(() => {

        // Check authentication status
        const token = localStorage.getItem('token');
    
        if (token==null) {
            // Redirect to home page if authenticated
            Router.push('/')
        }
    }, []);
    
    return (
        <div>account</div>
    )  
}

export default Account