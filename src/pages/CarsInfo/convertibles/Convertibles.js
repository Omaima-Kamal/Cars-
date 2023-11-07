import React from 'react';
import '../../../css/Convertibles.css'

const Convertibles = () => {
    return (
        <div>
            <div className="convertibles-photo">
                <h1>Best Convertibles</h1>
            </div>
            <div className="convertibles-container">
                <div className="convertibles-car">
                    <div className="audi-a5">
                        <h1>2020 Audi A5</h1>
                        <p className="col-md-6">The Audi A5 lineup is made for people who want a blend of style, functionality, and fun. It can be had in three variations: a coupe, a convertible, or a four-door hatchback. It’s turbocharged engine and standard all-wheel-drive make it an exciting ride. Even though the A5 line has been around since 2008, the second generation began with the 2018 model year and added the new Sportback variant. The Audi A5 is a 4-seater vehicle that comes in 3 trim levels. The most popular style is the Premium Plus Cabriolet, which starts at $50,895 and comes with a 2.0L I4 Turbo engine and All Wheel Drive. This A5 is estimated to deliver 23 MPG in the city and 31 MPG on the highway.</p>
                        <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Audi-A5-Cabriolet-101-model_1920.jpg")} alt="2020 Audi-A5" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Comes packed with luxury and technology</li>
                                <li>User-friendly infotainment</li>
                                <li>Great fuel economy</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Tight rear seat</li>
                                <li>Some rivals bring more performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="bmw-4">
                        <h1>2020 BMW 4 Series</h1>
                        <p className="col-md-6">The BMW 4 Series is a compact luxury coupe offering an ultimate BMW driving experience yet maintaining comfort and functionality for daily driving. Offered in coupe, gran coupe, and convertible versions, the 4 Series is available in a wide range of build combinations ready to suit your needs. The BMW 4 Series is a 4-seater vehicle that comes in 2 trim levels. The most popular style is the 430i Convertible RWD, which starts at $54,095 and comes with a 2.0L I4 Turbo engine and Rear Wheel Drive. This 4 Series is estimated to deliver 23 MPG in the city and 34 MPG on the highway.</p>
                        <img src={require("../../../assets/images/typeOfCars/convertibles/2020-BMW-4_Series.jpg")} alt="2020 BMW 4 Series" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Fast acceleration</li>
                                <li>Comfortable interior</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Cramped cargo space</li>
                                <li>Rivals offer more standard tech</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="chevrolet-corvette">
                    <h1>2020 Chevrolet Corvette</h1>
                    <p className="col-md-6">For years, the Chevrolet Corvette has been an enduring icon, and it’s been redesigned for the 2020 model year. This mid-engine sports car boasts exhilarating acceleration and excellent handling, and it offers a satisfying range of optional equipment. The Corvette’s sleek styling and relatively reasonable price make it a compelling choice for car shoppers who are on the hunt for stylish, high-performance transportation. The Chevrolet Corvette is a 2-seater vehicle that comes in 1 trim levels. The most popular style is the Stingray 2LT Convertible, which starts at $67,495 and comes with a 6.2L V8 engine and Rear Wheel Drive. This Corvette is estimated to deliver 15 MPG in the city and 27 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Chevrolet-Corvette-white-full_color-driver_side_front_quarter.png")} alt="2020 Chevrolet Corvette" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Much improved from the last generation</li>
                            <li>Lots of driving customization</li>
                            <li>A performance value</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>No more manual transmission</li>
                        </ul>
                    </div>
                </div>

                <div className="bmw-z4">
                    <h1>2020 BMW Z4</h1>
                    <p className="col-md-6">The BMW Z4 has long embraced the roadster configuration, offering a uniquely-BMW take on the classic design. BMW redesigned the third-generation Z4 from the ground up to provide sportiness and attitude for driving purists. Featuring a luxurious interior combined with the traditional front-engine, rear-wheel-drive roadster layout, the Z4 offers a unique driving experience sure to delight anyone with a chance to drive or ride. The BMW Z4 is a 2-seater vehicle that comes in 2 trim levels. The most popular style is the sDrive30i, which starts at $50,695 and comes with a 2.0L I4 Turbo engine and Rear Wheel Drive. This Z4 is estimated to deliver 24 MPG in the city and 31 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-BMW-Z4.jpg")} alt="2020 BMW Z4" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Strong acceleration and braking</li>
                            <li>Spacious and refined interior</li>
                            <li>Robust standard features list</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Some comparable models have more nimble steering</li>
                            <li>No manual transmission available</li>
                        </ul>
                    </div>
                </div>

                <div className="audi-s5">
                    <h1>2020 Audi S5</h1>
                    <p className="col-md-6">The Audi S5 lineup is known for its sleek design, innovative technology, and sporty driving experience. It comes in three different body styles: a coupe, a convertible, and a four-door hatchback. Based upon the capable Audi A5, the S5 adds a twin-turbo V6 and S Sport suspension for greater performance. The Audi S5 entered its second generation with the 2018 model. The Audi S5 is a 4-seater vehicle that comes in 3 trim levels. The most popular style is the Premium Cabriolet, which starts at $61,195 and comes with a 3.0L V6 Turbo engine and All Wheel Drive. This S5 is estimated to deliver 19 MPG in the city and 26 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Audi-S5-white-full_color-driver_side_front_quarter.png")} alt="2020 Audi S5" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Performance-driven design inside and out</li>
                            <li>Standard massaging seats</li>
                            <li>User-friendly infotainment</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Tight rear-seat</li>
                            <li>No rear-wheel-drive option</li>
                        </ul>
                    </div>
                </div>
                <div className="bmw-8">
                    <h1>2020 BMW 8 Series</h1>
                    <p className="col-md-6">The BMW 8 Series is a full-size grand touring coupe, created for people who want a stylish and luxurious performance car. Named after the original 8 Series that was produced from 1989 to 1999, the all-new version debuted for the 2019 model year. The BMW 8 Series is a 4-seater vehicle that comes in 2 trim levels. The most popular style is the 840i Convertible RWD, which starts at $98,395 and comes with a 3.0L I6 Turbo engine and Rear Wheel Drive. This 8 Series is estimated to deliver 22 MPG in the city and 29 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-BMW-8_Series.jpg")} alt="2020 BMW 8 Series" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Luxurious interior</li>
                            <li>Smooth ride</li>
                            <li>Powerful twin-turbo V8 engine</li>
                            <li>All-wheel drive traction</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>High pricetag</li>
                            <li>Large proportions</li>
                            <li>Heavy curb weight</li>
                        </ul>
                    </div>
                </div>
                <div className="mazda-mx-5">
                    <h1>2020 Mazda MX-5 Miata</h1>
                    <p className="col-md-6">The Mazda MX-5 Miata is a two-seat convertible built to offer a pure and exciting driving experience. First unveiled in 1989, the Miata’s nimble chassis and low base price quickly won fans around the world. The fourth-generation was released with the 2016 model year and continues to evolve with a new powertrain introduced in 2019. The Mazda MX-5 Miata is a 2-seater vehicle that comes in 3 trim levels. The most popular style is the RF Grand Touring Manual, which starts at $35,370 and comes with a 2.0L I4 engine and Rear Wheel Drive. This MX-5 Miata is estimated to deliver 26 MPG in the city and 35 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Mazda-MX-5_Miata.jpg")} alt="2020 Mazda MX-5 Miata" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Sharp handling</li>
                            <li>Given an appreciated power bump</li>
                            <li>Pure unfiltered driving experience</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Not extremely practical</li>
                            <li>Only one powertrain offered</li>
                        </ul>
                    </div>
                </div>
                <div className="audi-a3">
                    <h1>2019 Audi A3</h1>
                    <p className="col-md-6">The Audi A3 is a compact sedan aimed at buyers who are looking for an upscale and more performance oriented commuter vehicle. Audi launched the A3 in 2006 as a hatchback. The second generation of the car launched in 2015, switching to the sedan format. The Audi A3 is a 4-seater vehicle that comes in 4 trim levels. The most popular style is the Prestige 40 Cabriolet FWD, which starts at $39,895 and comes with a 2.0L I4 Turbo engine and Front Wheel Drive. This A3 is estimated to deliver 26 MPG in the city and 35 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2019-Audi-A3.jpg")} alt="2019 Audi A3" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Fun to drive</li>
                            <li>Upscale interior</li>
                            <li>Available all-wheel drive</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Snug back seat and trunk</li>
                        </ul>
                    </div>
                </div>
                <div className="car">
                    <div className="chevrolet-camaro">
                        <h1>2020 Chevrolet Camaro</h1>
                        <p className="col-md-6">With its style and rewarding handling, the Chevrolet Camaro is one of the quintessential American muscle cars.
                            It comes with an engine lineup that delivers great acceleration, and its affordable pricing makes it accessible to a wide swath of car shoppers. This sports car seats four passengers and is sold as either a coupe or convertible. The Chevrolet Camaro comes in 4 trim levels. The most popular style is the SS with 2SS Convertible, which starts at $49,495 and comes with a 6.2L V8 engine and Rear Wheel Drive. This Camaro is estimated to deliver 20 MPG in the city and 30 MPG on the highway.</p>
                        <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Chevrolet-Camaro-gray-full_color-driver_side_front_quarter.png")} alt="2020 Chevrolet Camaro" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>A trim for everyone's needs</li>
                                <li>Great performance for the price</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Outside visibility could still be improved</li>
                                <li>Snug rear seating</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ford-mustang">
                    <h1>2020 Ford Mustang</h1>
                    <p className="col-md-6">The iconic Ford Mustang traces its roots back over fifty years of production. Upon its release, the Mustang brought style and power to the masses, continuing that mantra to this day. The sixth-generation 'Stang keeps its classic front-engine rear-wheel-drive setup, while the interior offers refinement unimaginable in sports cars of the past. For extreme speed, check out the Shelby trims. As a daily driver or track car, the Mustang fits the bill. The Ford Mustang is a 4-seater vehicle that comes in 8 trim levels. The most popular style is the GT Premium Convertible, which starts at $46,325 and comes with a 5.0L V8 engine and Rear Wheel Drive. This Mustang is estimated to deliver 20 MPG in the city and 28 MPG on the highway.</p>
                    <img src={require("../../../assets/images/typeOfCars/convertibles/2020-Ford-Mustang-silver-full_color-driver_side_front_quarter.png")} alt="2020 Ford Mustang" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Comfortable enough for commuting</li>
                            <li>Available V8 engine sounds excellent</li>
                            <li>Offers safety aids like forward-collision warning</li>
                            <li>Few cars still offer a manual transmission</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>The back seat is very snug</li>
                            <li>Rivals offer more polished infotainment systems</li>
                            <li>Dim interior lighting</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Convertibles;
