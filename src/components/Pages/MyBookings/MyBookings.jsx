import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getDuty } from '../../Utility/Utility';

const MyBookings = () => {
    const [dutyList, setDutyList] = useState([]);


    const data = useLoaderData();
    console.log(data);

    useEffect(()=>{
        const storeDutyData= getDuty();
        console.log(storeDutyData);
        const convertedStoreDutyData = storeDutyData.map(id => parseInt(id));
        console.log(convertedStoreDutyData);

        const myDutyList = data.filter(duty => convertedStoreDutyData.includes(duty.id));
        console.log(myDutyList);

    },[]);


    return (
        <div>
            <h1>hello : {dutyList.length}</h1>



        </div>
    );
};

export default MyBookings;