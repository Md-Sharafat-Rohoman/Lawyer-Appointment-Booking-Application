import React from 'react';
import imageCover from '../../../../public/asset/banner-img-1.png'

const HeroSection = () => {
    return (
        <div className="card bg-base-100 image-full   shadow-sm">
            <figure className=''>
                <img className='w-full'
                    src={imageCover}
                    alt="Shoes" />
            </figure>
            <div className="card-body flex justify-center items-center w-2/3 mx-auto">
                <div className='text-center'>
                    <h1 className="card-title text-4xl ">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    <p className='text-[12px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;