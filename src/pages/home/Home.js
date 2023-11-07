import React from 'react'
import Carousel from '../../components/carousel/Carousel';
import CarsImages from '../../components/carsImages/CarsImages';
import CarsModels from '../../components/carsModels/CarsModels';
import ContactUs from '../../components/contactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Carousel />
            <CarsModels />
            <CarsImages />
            <ContactUs />
        </div>
    )
}

export default Home;