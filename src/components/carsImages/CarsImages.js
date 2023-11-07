import React from 'react';
import '../../css/CarsImages.css';

const CarImages = () => {
    return (
        <div className="cars-photos">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="types">
                            <img className="img-circle" src={require("../../assets/images/2017-Volkswagen-Golf-110TSI-Highline-R-Line-hatchback-yellow-press-image-why-a-hatchback-is-the-smartest-car-you-can-buy-1200x800p.webp")} alt="Hatchback" width="200px" height="200px" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/2020-vw-viloran-china-1574445298.jpeg")} alt="MPV" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/01-2018-Honda-Accord-Exterior-BB-KBB.jpg")} alt="Sedan" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img src={require("../../assets/images/9e6388178075e47847ce5f64f5691763.jpg")} alt="Van" width="200px" height="200px" /></div>

                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/high-res-08A3977-FH-4x2-semi-trailer-long-haul-on-road.jpg")} alt="Truck" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/image.jpg")} alt="SUV" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img src={require("../../assets/images/bmw-2-series-convertible.jpg")} alt="Convertible" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/5b7d8b5f959f34fd0a8b5381.jpg")} alt="Electric" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/Microlino-Concept-Car-03.jpg")} alt="Micro Car" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img src={require("../../assets/images/2-800-oemexteriorfront1300-85411.jpg")} alt="Coupe" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img className="img-circle" src={require("../../assets/images/mini-f54-news-teaser-4-3.jpg.asset.1555365844772.jpg")} alt="Minivan" width="200px" height="200px" /></div>
                    </div>
                    <div className="col-lg-3 col-sm-6"><div className="types">
                        <img src={require("../../assets/images/Volkswagen-CrossPolo_2011_800x600_wallpaper_01.jpg")} alt="Wagon" width="200px" height="200px" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarImages;