import React from 'react';
import InfoCard from './InfoCard'
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <InfoCard img={clock} cardTitle="Openning Hours" bg="bg-secondary" />
            <InfoCard img={marker} cardTitle="Visit Our Location" bg="bg-accent" />
            <InfoCard img={phone} cardTitle="Contact us now" bg="bg-secondary" />

        </div>
    );
};

export default Info;