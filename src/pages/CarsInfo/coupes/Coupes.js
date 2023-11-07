import React from 'react';
import '../../../css/Coupes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Coupes = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-audi-a5">
                                <h1>2020 Audi A5</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Audi-A5-white-full_color-driver_side_front_quarter.png")} alt="2020 Audi-A5" />
                                <p>The Audi A5 lineup is made for people who want a blend of style, functionality, and fun. It can be had in three variations: a coupe, a convertible, or a four-door hatchback. It’s turbocharged engine and standard all-wheel-drive make it an exciting ride. Even though the A5 line has been around since 2008, the second generation began with the 2018 model year and added the new Sportback variant. The Audi A5 is a 4-seater vehicle that comes in 3 trim levels. The most popular style is the Premium Plus Coupe, which starts at $43,895 and comes with a 2.0L I4 Turbo engine and All Wheel Drive. This A5 is estimated to deliver 24 MPG in the city and 32 MPG on the highway.</p>
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
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-bmw-4-series">
                                <h1>2020 BMW 4 Series</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-BMW-4_Series-silver-full_color-driver_side_front_quarter.png")} alt="2020 BMW 4 Series" />
                                <p>The BMW 4 Series is a compact luxury coupe offering an ultimate BMW driving experience yet maintaining comfort and functionality for daily driving. Offered in coupe, gran coupe, and convertible versions, the 4 Series is available in a wide range of build combinations ready to suit your needs. The BMW 4 Series is a 4-seater vehicle that comes in 2 trim levels. The most popular style is the 430i Coupe RWD, which starts at $45,945 and comes with a 2.0L I4 Turbo engine and Rear Wheel Drive. This 4 Series is estimated to deliver 22 MPG in the city and 30 MPG on the highway.</p>
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
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-lexus-lc">
                                <h1>2020 Lexus LC</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Lexus-LC-silver-full_color-driver_side_front_quarter.png")} alt="2020 Lexus LC" />
                                <p>Lexus is known for building luxury cars, not sports cars, but the Lexus LC is a high-end coupe that balances luxury with speed to compete with the best in its class. Cabin quality is superb, and Lexus imbues the LC with an array of technology to improve performance, comfort, and convenience. There are a few weak spots, like a tiny back seat, but overall the LC is one of the premier luxury coupes on the market. The Lexus LC is a 4-seater vehicle that comes in 2 trim levels. The most popular style is the LC 500, which starts at $93,975 and comes with a 5.0L V8 engine and Rear Wheel Drive. This LC is estimated to deliver 27 MPG in the city and 35 MPG on the highway.</p>
                                <h6>Pros</h6>
                                <ul>
                                    <li>Elegant and well-appointed interior</li>
                                    <li>Adaptive suspension puts the driver in control</li>
                                    <li>Hybrid delivers big fuel savings</li>
                                </ul>
                                <h6>Cons</h6>
                                <ul>
                                    <li>Not as fun to drive as some rivals</li>
                                    <li>Back seat is too snug for most adults</li>
                                    <li>Small trunk, even for this segment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-honda-civic">
                                <h1>2020 Honda Civic</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Honda-Civic-white-full_color-driver_side_front_quarter.png")} alt="2020 Honda Civic" />
                                <p>The Honda Civic is a compact coupe, sedan, and hatchback created for those who want something practical yet sporty to drive. Honda first introduced the popular small car as a 1973 model. The current tenth generation of the Civic launched with the 2016 model year. The Honda Civic is a 5-seater vehicle that comes in 8 trim levels. The most popular style is the LX Coupe CVT, which starts at $22,005 and comes with a 2.0L I4 engine and Front Wheel Drive. This Civic is estimated to deliver 31 MPG in the city and 40 MPG on the highway.</p>
                                <h6>Pros</h6>
                                <ul>
                                    <li>Sporty and fuel efficient engines</li>
                                    <li>Practical and refined interior</li>
                                    <li>Available in a range of body styles</li>
                                </ul>
                                <h6>Cons</h6>
                                <ul>
                                    <li>No all-wheel drive, hybrid options</li>
                                    <li>Some rivals have better fuel economy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-audi-s5">
                                <h1>2020 Audi S5</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Audi-S5-white-full_color-driver_side_front_quarter.png")} alt="2020 Audi S5" />
                                <p>The Audi S5 lineup is known for its sleek design, innovative technology, and sporty driving experience. It comes in three different body styles: a coupe, a convertible, and a four-door hatchback. Based upon the capable Audi A5, the S5 adds a twin-turbo V6 and S Sport suspension for greater performance. The Audi S5 entered its second generation with the 2018 model. The Audi S5 is a 4-seater vehicle that comes in 3 trim levels. The most popular style is the Premium Plus Coupe, which starts at $52,895 and comes with a 3.0L V6 Turbo engine and All Wheel Drive. This S5 is estimated to deliver 20 MPG in the city and 27 MPG on the highway.</p>
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
                    </div>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-chevrolet-corvette">
                                <h1>2020 Chevrolet Corvette</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Chevrolet-Corvette-white-full_color-driver_side_front_quarter.png")} alt="2020 Chevrolet Corvette" />
                                <p>For years, the Chevrolet Corvette has been an enduring icon, and it’s been redesigned for the 2020 model year. This mid-engine sports car boasts exhilarating acceleration and excellent handling, and it offers a satisfying range of optional equipment. The Corvette’s sleek styling and relatively reasonable price make it a compelling choice for car shoppers who are on the hunt for stylish, high-performance transportation. The Chevrolet Corvette is a 2-seater vehicle that comes in 1 trim levels. The most popular style is the Stingray 3LT Coupe, which starts at $59,995 and comes with a 6.2L V8 engine and Rear Wheel Drive. This Corvette is estimated to deliver 15 MPG in the city and 27 MPG on the highway.</p>
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
                    </div>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-bmw-8-series">
                                <h1>2020 BMW 8 Series</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-BMW-8_Series-gray-full_color-driver_side_front_quarter.png")} alt="2020 BMW 8 Series" />
                                <p>The BMW 8 Series is a full-size grand touring coupe, created for people who want a stylish and luxurious performance car. Named after the original 8 Series that was produced from 1989 to 1999, the all-new version debuted for the 2019 model year. The BMW 8 Series is a 4-seater vehicle that comes in 2 trim levels. The most popular style is the 840i Coupe RWD, which starts at $88,895 and comes with a 3.0L I6 Turbo engine and Rear Wheel Drive. This 8 Series is estimated to deliver 23 MPG in the city and 30 MPG on the highway.</p>
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
                    </div>
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-chevrolet-camaro">
                                <h1>2020 Chevrolet Camaro</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Chevrolet-Camaro-gray-full_color-driver_side_front_quarter.png")} alt="2020 Chevrolet Camaro" />
                                <p>With its style and rewarding handling, the Chevrolet Camaro is one of the quintessential American muscle cars. It comes with an engine lineup that delivers great acceleration, and its affordable pricing makes it accessible to a wide swath of car shoppers. This sports car seats four passengers and is sold as either a coupe or convertible. The Chevrolet Camaro comes in 4 trim levels. The most popular style is the LT with 1LT Coupe, which starts at $26,495 and comes with a 2.0L I4 Turbo engine and Rear Wheel Drive. This Camaro is estimated to deliver 20 MPG in the city and 30 MPG on the highway.</p>
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
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-ford-mustang">
                                <h1>2020 Ford Mustang</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-Ford-Mustang-silver-full_color-driver_side_front_quarter.png")} alt="2020 Ford Mustang" />
                                <p>The iconic Ford Mustang traces its roots back over fifty years of production. Upon its release, the Mustang brought style and power to the masses, continuing that mantra to this day. The sixth-generation 'Stang keeps its classic front-engine rear-wheel-drive setup, while the interior offers refinement unimaginable in sports cars of the past. For extreme speed, check out the Shelby trims. As a daily driver or track car, the Mustang fits the bill. The Ford Mustang is a 4-seater vehicle that comes in 8 trim levels. The most popular style is the EcoBoost Fastback, which starts at $27,865 and comes with a 2.3L I4 Turbo engine and Rear Wheel Drive. This Mustang is estimated to deliver 21 MPG in the city and 30 MPG on the highway.</p>
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
                    <div className="col-md-6">
                        <div className="coupe-car">
                            <div className="coupe-infiniti-q60">
                                <h1>2020 INFINITI Q60</h1>
                                <img src={require("../../../assets/images/typeOfCars/coupes/2020-INFINITI-Q60-silver-full_color-driver_side_front_quarter.png")} alt="2020 INFINITI Q60" />
                                <p>The Infiniti Q60 is a premium sports coupe with style and features which rival European counterparts for a lower starting price. Its one of the most stylish and luxurious cars in its segment, though some competitors have better acceleration. Those seeking extra speed can opt for the Red Sport 400 trim, which adds a bigger engine, adaptive dampers, and other performance upgrades. The INFINITI Q60 is a 4-seater vehicle that comes in 3 trim levels. The most popular style is the 3.0t LUXE RWD, which starts at $46,525 and comes with a 3.0L V6 Turbo engine and Rear Wheel Drive. This Q60 is estimated to deliver 20 MPG in the city and 27 MPG on the highway.</p>
                                <h6>Pros</h6>
                                <ul>
                                    <li>Stylish exterior</li>
                                    <li>Comfortable and refined</li>
                                    <li>Low starting price</li>
                                </ul>
                                <h6>Cons</h6>
                                <ul>
                                    <li>Some rivals offer more speed</li>
                                    <li>Limited rear seat space</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Coupes;