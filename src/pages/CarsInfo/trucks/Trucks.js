import React from 'react';
import '../../../css/Trucks.css'
import Container from 'react-bootstrap/Container';

const Trucks = () => {
    return (
        <div>
            <div className="trucks-photo">
                <h1>Best Trucks</h1>
            </div>
            <Container>
                <div className="trucks-car">
                    <div className="ford-maverick-truck">
                        <h1>2022 Ford Maverick</h1>
                        <p className="col-md-6">
                            Every Maverick including the base model features an 8.0-inch touchscreen infotainment system that includes Apple CarPlay and Android Auto compatibility.
                            There's also a standard Wi-Fi hotspot that can connect up to 10 devices.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/trucks/2022-Ford-Maverick.png")} alt="2022 Ford Maverick" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Efficient hybrid, strong turbo-four options</li>
                                <li>Accessible starting price</li>
                                <li>Clever bed design</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Only one cab/bed combination</li>
                                <li>Not all driver-assist features are standard</li>
                                <li>Less payload capacity than Ranger</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="hyundai-santa-cruz-truck">
                        <h1>2022 Hyundai Santa Cruz</h1>
                        <p className="col-md-6">
                            As standard, the Santa Cruz is equipped with an 8.0-inch infotainment touchscreen that includes wireless Apple CarPlay and Android Auto.
                            A 10.3-inch touchscreen is available, but you have to plug in for those phone connectivity features. There's also a snazzy 10.0-inch digital gauge display on higher-end trims,
                            while more entry-level ones make do with a smaller display between analog gauges.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/trucks/2022-hyundai-santa-cruz-limited-4wd-crew-pick-up-angular-front.png")} alt="2022 Hyundai Santa Cruz" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Edgy, unique styling</li>
                                <li>Clever locking in-bed storage and tonneau cover</li>
                                <li>Smaller and easier to park than most midsize trucks</li>
                            </ul>

                            <h6>Cons</h6>
                            <ul>
                                <li>Lazy powertrain</li>
                                <li>Rear seats could be roomier</li>
                                <li>Disconnected steering</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="chevrolet-colorado-truck">
                    <h1>2022 Chevrolet Colorado</h1>
                    <p className="col-md-6">
                        Chevrolet's multimedia system features a 7.0-inch touchscreen with Apple CarPlay and Android Auto compatibility,a six-speaker audio system,
                        and a 3.5-inch instrument cluster display. LT models and up get a larger 8.0-inch touchscreen. Z71 and ZR2 models get a 4.2-inch instrument cluster display.
                        Built-in navigation and a Bose audio system are bundled together as an option on the LT and higher grades (LT models also add a 4.2-inch instrument cluster display).
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/TRANSPARENT_cc_2020CHT350051_01_1280_G9K.png")} alt="2022 Chevrolet Colorado" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Smooth ride</li>
                            <li>Attractive diesel option</li>
                            <li>There's a trim for every need</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Disappointing interior materials</li>
                            <li>Four-cylinder gas engine is nearly as thirsty as the V-6</li>
                            <li>Active safety features still limited</li>
                        </ul>
                    </div>
                </div>

                <div className="honda-ridgeline-truck">
                    <h1>2022 Honda Ridgeline</h1>
                    <p className="col-md-6">
                        In addition to a 4.2-inch digital instrument cluster, an 8.0-inch touchscreen is standard on all trims of the Honda Ridgeline.
                        This screen is compatible with both Apple CarPlay and Android Auto. The Ridgeline comes with a seven-speaker sound system,
                        but an eight-speaker system is standard on higher trims.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/2022-honda-ridgeline-sport-crew-4wd-pick-up-angular-front.png")} alt="2022 Honda Ridgeline" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>SUV-like road manners</li>
                            <li>Quick acceleration</li>
                            <li>Smart packaging</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Not many configurations</li>
                            <li>Not a true off-roader</li>
                            <li>Ride quality suffers when hauling</li>
                        </ul>
                    </div>
                </div>

                <div className="gmc-canyon-truck">
                    <h1>2022 GMC Canyon</h1>
                    <p className="col-md-6">
                        Every Canyon includes a touchscreen infotainment setup with Apple CarPlay and Android Auto.
                        Most trims feature a 7.0-inch display while an 8.0-inch system is standard on the Denali and available on the Canyon AT4.
                        Six speaker audio is standard but a seven-speaker Bose system is optional on all trims and standard on the Canyon Denali.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/15249_st0640_116.png")} alt="2022 GMC Canyon" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Solid V-6 engine</li>
                            <li>Capable towing performance</li>
                            <li>Good ride quality</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Mediocre interior quality</li>
                            <li>Eight-speed auto's reluctance to downshift</li>
                            <li>NHTSA safety ratings could be better</li>
                        </ul>
                    </div>
                </div>
                <div className="jeep-gladiator">
                    <h1>2022 Jeep Gladiator</h1>
                    <p className="col-md-6">
                        Standard infotainment gets an upgrade in the 2022 Gladiator. The base Sport trim now starts with a 7.0-inch touchscreen compatible with Apple CarPlay and Android Auto.
                        Overland trims (and above) come with an 8.4-inch system that includes navigation and premium sound.
                        The Gladiator's party trick is a forward-facing trail cam available on upper trims, which is useful for crawling along rocky tracks.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/50279_st0640_116.png")} alt="2022 Jeep Gladiator" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Looks like a Wrangler</li>
                            <li>Goes off-road like a Wrangler</li>
                            <li>More practical than a Wrangler</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Poor on-road dynamics</li>
                            <li>Cramped bed</li>
                            <li>Expensive for what you get</li>
                        </ul>
                    </div>
                </div>
                <div className="ford-ranger-truck">
                    <h1>2022 Ford Ranger</h1>
                    <p className="col-md-6">
                        The base XL trim starts with only a radio, Bluetooth, and a USB charging port. An 8.0-inch touchscreen with Ford's Sync software is available as an option, and it's standard on all other trims.

                        The system is slower than modern competitors, and the graphics could use an update. Apple CarPlay and Android Auto are included. Moving up the ladder also adds extra speakers,
                        and the top Lariat trim can have a Bang & Olufsen sound system.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/2022-Ford-Ranger-4.png")} alt="2022 Ford Ranger" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Strong towing capacity</li>
                            <li>Excellent powertrain</li>
                            <li>Feature-per-dollar value</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Unsettled ride</li>
                            <li>Outdated infotainment</li>
                            <li>Mediocre cabin space</li>
                        </ul>
                    </div>
                </div>
                <div className="toyota-tacoma-truck">
                    <h1>2022 Toyota Tacoma</h1>
                    <p className="col-md-6">
                        As the best-selling midsize pickup in the U.S. for more than 15 years running, the Toyota Tacoma is obviously doing something right.
                        Its sharp looks, reputation for reliability, and strong value proposition continue to lure in buyers. The Tacoma is not without its flaws, however, and there's more competition now than ever before.
                        For 2022, the midsize truck shakes things up with a revised Trail Edition.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/mlp-img-top-2022-tacoma-temp.png")} alt="2022 Toyota Tacoma" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Time-tested reputation</li>
                            <li>Legit off-road performance</li>
                            <li>Great value</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Poor cabin ergonomics</li>
                            <li>Archaic powertrains</li>
                            <li>Rear drum brakes</li>
                        </ul>
                    </div>
                </div>
                <div className="car">
                    <div className="nissan-frontier-truck">
                        <h1>2022 Nissan Frontier</h1>
                        <p className="col-md-6">
                            This may have been the area in need of most improvement, and Nissan delivers. Whereas the previous-generation Frontier offered zero smartphone-mirroring capabilities, Apple CarPlay and Android Auto are now standard on all models.
                            A standard 8.0-inch touchscreen infotainment system replaces the 7.0-inch setup in last year's model,
                            and an upgraded 9.0-inch touch display is available. There's a standard new 7.0-inch instrument cluster display, too.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/trucks/2022-nissan-frontier-pro-x-crew-truck-angular-front.png")} alt="2022 Nissan Frontier" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Modern interior tech</li>
                                <li>Available active safety features</li>
                                <li>Trail-ready PRO-4X trim</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>No diesel option</li>
                                <li>Unimpressive fuel economy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ford-F-150">
                    <h1>2022 Ford F-150</h1>
                    <p className="col-md-6">
                        The 2022 F-150 has gone mostly unchanged in terms of interior tech. That means a standard 8.0-inch infotainment touchscreen—large,
                        but not as large as the 12.0-inch unit fitted in higher-end models. Both screens run Ford's Sync 4 user interface, which has over-the-air update capability to gain new data and features. Wireless Apple CarPlay and Android Auto are also standard. In addition to the several standard USB ports, a wireless charging pad is available. Basic trims have a 4.0-inch gauge cluster information display, while 8.0- and 12.0-inch gauge displays are included higher up the trim walk.
                        The available Wi-Fi hotspot can support up to 10 devices at a time, and covers an area 50 feet around the vehicle.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/trucks/mlp-img-top-2022-f150-temp.png")} alt="2022 Ford F-150" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Lots of clever work-ready features</li>
                            <li>Raptor is ready to rip; Raptor R en route</li>
                            <li>Hybrid and electric variants</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Looks mostly the same as before</li>
                            <li>Competitors feel more luxurious</li>
                            <li>Poor brake response on hybrid model</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Trucks;
