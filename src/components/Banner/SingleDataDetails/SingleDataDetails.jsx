import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import MyBookings from '../../Pages/MyBookings/MyBookings';
import { addToStoreDuty } from '../../Utility/Utility';

const SingleDataDetails = () => {
    const navigate = useNavigate();


    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    console.log(id);
    console.log(data)

    const singleData = data.find(details => details.id === bookId);
    console.log(singleData)

    const { image, status, experience, name, qualification, specialist, reg_no, availability, consultation_fee } = singleData;


    const handleDutyDetails = (id) => {
        navigate(`/my-bookings/${id}`)
        addToStoreDuty(id)
    }



    return (
        <div>
            <div className='text-center bg-gray-200  py-5 rounded-lg'>
                <h1 className='text-2xl font-bold'>Lawyer’s Profile Details</h1>
                <p className='w-3/4 mx-auto '>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className="card card-side bg-base-100 shadow-sm border border-gray-300 p-3 my-3">
                <figure>
                    <img className='w-[200px] h-[200px] rounded-xl'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h4 className=' text-[12px] bg-[#dcf5e2] text-green-400 px-4 py-1 rounded-xl'>{experience}</h4>
                        <h4 className=' text-[12px] bg-[#E8F0FC] text-sky-400-400 px-4 py-1 rounded-xl'>{experience}</h4>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>Ⓡ License No : {reg_no}</p>
                    <div className=' flex justify-start'>

                        <div className='flex gap-5'>  Availability :
                            {
                                availability.map(available => <p>{available.available ? available.day : ''}</p>)
                            }
                        </div>
                    </div>
                    <p>Consultation Fee : <span className='text-green-600 font-bold'>TAKA {consultation_fee}</span> </p>
                    {/* <Link>
                        <div className="card-actions justify-end">
                            <button className="btn text-sky-400 border border-sky-300 w-full">VieW Details</button>
                        </div>
                    </Link> */}
                </div>
            </div>
            <div className='bg-gray-200 p-5 text-center'>
                <h1 className='text-4xl font-bold'>Book an Appointment</h1>
                <div className='flex justify-between my-3'>
                    <p>Availability</p>
                    <p className='p-2 bg-green-200 rounded-xl text-green-700'>Lawyer  Available Today</p>
                </div>
                <button onClick={() => handleDutyDetails(id)} className='btn bg-green-500 text-white font-extrabold w-full rounded-xl'>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default SingleDataDetails;