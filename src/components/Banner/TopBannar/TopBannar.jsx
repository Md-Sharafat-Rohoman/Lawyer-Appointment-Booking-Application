import React, { useState } from 'react';
import SingleData from '../SingleData/SingleData';

const TopBannar = ({ data }) => {

    const [showAll, setShowAll] = useState(false);

    const initialCardCount = 6;
    const cardsToShow = showAll ? data : data.slice(0, initialCardCount);

    const handleLoadMore = () => {
        setShowAll(!showAll);
    }

    // console.log(data)
    return (
        <div>
            <div className='my-20 w-2/3 text-center mx-auto'>
                <h1 className='text-3xl font-bold'>Our Best Lawyers</h1>
                <p className='py-5 text-[14px] text-gray-600'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    cardsToShow.map(singlData => <SingleData key={singlData.id} singlData={singlData}></SingleData>)
                }
            </div>
            <div className='text-center my-10'>
                <button onClick={handleLoadMore} className="btn btn-active text-white bg-green-600 px-10">
                    {
                        showAll ? 'Close' : 'Show All'
                    }
                </button>
            </div>
        </div>
    );
};

export default TopBannar;