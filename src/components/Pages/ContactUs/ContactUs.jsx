import React from 'react';
import { useNavigate } from 'react-router';
import imageError from '../../../../public/asset/not found.webp'

const ContactUs = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={imageError}
                        alt="Shoes"
                        className="rounded-xl w-2/3" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className="card-title text-pink-600 text-5xl font-bold">404 - Page Not Found</h1>
                    <p className='text-2xl my-3'>Oops! The page you’re looking for doesn’t exist.</p>
                    <div className="card-actions" >
                        <button onClick={()=> navigate('/')} className="btn btn-primary">Go Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;