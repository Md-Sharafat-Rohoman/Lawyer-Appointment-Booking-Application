import React from 'react';
import SingleDataDetails from '../SingleDataDetails/SingleDataDetails';
import { Link } from 'react-router';

const SingleData = ({ singlData }) => {
    const { id, image, status, experience, name, qualification, specialist, reg_no } = singlData;
    // console.log(singlData)

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border border-gray-300 p-3">
                <figure>
                    <img className='w-[200px] h-[200px] rounded-xl'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h4 className=' text-[12px] bg-[#dcf5e2] text-green-400 px-4 py-1 rounded-xl'>{status}</h4>
                        <h4 className=' text-[12px] bg-[#E8F0FC] text-sky-400-400 px-4 py-1 rounded-xl'>{experience}</h4>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>{qualification}</p>
                    <p className='text-gray-400'>Ⓡ License No : {reg_no}</p>
                    <Link to={`/SingleDataDetails/${id}`}>
                        <div className="card-actions justify-end">
                            <button className="btn text-sky-400 border border-sky-300 w-full">VieW Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleData;