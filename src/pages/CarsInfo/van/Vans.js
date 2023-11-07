import React from 'react';
import '../../../css/Vans.css'
import Container from 'react-bootstrap/Container';

const Vans = () => {
    return (
        <div>
            <div className="vans-photo">
                <h1>Best Vans</h1>
            </div>
            <Container>
                <div className="vans-car">
                    <div className="honda-Odyssey">
                        <h1>2021 Audi A5</h1>
                        <p className="col-md-6">
                            Although LX models make do with a 5.0-inch infotainment display,
                            EX trims and above include an 8.0-inch touchscreen with Apple CarPlay and Android Auto compatibility and satellite radio support.
                            Top-spec models offer a 10.2-inch rear entertainment system as well.
                            Most Odysseys utilize a seven-speaker audio system with a subwoofer,
                            but the high-end Odyssey Elite includes an 11-speaker premium setup.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/vans/2021-honda-odyssey-lx-minivan-angular-front.png")} alt="2021 Honda Odyssey" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Smooth 10-speed automatic</li>
                                <li>Thoughtful feature content</li>
                                <li>Revised styling</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Non-stowable second row</li>
                                <li>No hybrid or AWD option</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="toyota-sienna">
                        <h1>2021 Toyota Sienna</h1>
                        <p className="col-md-6">All 2021 Siennas will equip a 9.0-inch touchscreen infotainment system that includes Apple CarPlay, Android Auto, and Amazon Alexa compatibility. Satellite radio and Wi-Fi hot spot capability are also included. The base audio system is a six-speaker unit, XLE models get an eight-speaker system,
                            and Limited and Platinum Siennas include 12-speaker JBL premium audio with integrated navigation. Platinum models also add a 360-degree camera system and a 10.0-inch head-up display.</p>
                        <img src={require("../../../assets/images/typeOfCars/vans/2021-toyota-sienna-le-hybrid-minivan-angular-front.png")} alt="2021 Toyota Sienna" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Standard hybrid powertrain makes it extremely efficient</li>
                                <li>Available AWD</li>
                                <li>Spacious interior</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Unsettling ride quality</li>
                                <li>Wacky bullet-train styling</li>
                                <li>Outdated infotainment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="kia-carnival">
                    <h1>2022 Kia Carnival</h1>
                    <p className="col-md-6">
                        Taking a page from the Mercedes playbook, the Carnival offers two digital displays integrated into what appears to be one large unit. A 12.3-inch display in front of the driver serves as an instrument cluster, and a center display of the same size handles infotainment functions.
                        This setup is optional, though, as the standard touchscreen display is an 8.0-inch unit. The Carnival also comes standard with wireless Apple CarPlay and Android Auto.
                        Kia offers up to nine USB ports throughout the three rows of seating, as well as two 11-volt power inverters.
                        Drivers can keep an eye on their kids in the back seats with a rear passenger-view camera, and communicate with them through an intercom system. These two handy features are standard on all but the base trim.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/15166_st0640_116.png")} alt="2022 Kia Carnival" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Great ride/handling balance</li>
                            <li>Huge infotainment screen on most trims</li>
                            <li>Most cargo space in the segment</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>No hybrid option</li>
                            <li>Annoying touch buttons</li>
                            <li>Second-row captain's chairs limit practicality</li>
                        </ul>
                    </div>
                </div>

                <div className="chrysler-pacifica">
                    <h1>2021 Chrysler Pacifica</h1>
                    <p className="col-md-6">
                        Every Pacifica is fitted with a 10.1-inch touchscreen infotainment system that includes support for wireless Android Auto and Apple CarPlay,
                        Amazon Alexa, and satellite radio.
                        The base Pacifica has six-speaker audio, the Limited has a 13-speaker Alpine premium system,
                        and the Pinnacle boasts 19-speaker Harman Kardon audio with a subwoofer.
                        Limited and Pinnacle models also include integrated navigation.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/model1.png")} alt="2021 Chrysler Pacifica" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Thoughtful feature content</li>
                            <li>Surprisingly agile</li>
                            <li>Available AWD</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>No AWD or Stow 'n Go seat on plug-in hybrid</li>
                            <li>Pricey higher trims</li>
                        </ul>
                    </div>
                </div>

                <div className="ford-transit">
                    <h1>2020 Ford Transit</h1>
                    <p className="col-md-6">
                        The standard infotainment display in the Transit measures 4.0 inches,
                        and an 8.0-inch touchscreen is optionally available. Both include Apple CarPlay,
                        Android Auto, and 4G LTE Wi-Fi hotspot compatibility. All variants feature a 4.2-inch information screen in the gauge cluster.
                        In the passenger van, USB ports are provided in every row.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/2020-ford-transit-350-xlt-low-roof-passenger-van-angular-front.png")} alt="2020 Ford Transit" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Massive capability and versatility</li>
                            <li>Good driving manners for such a large vehicle</li>
                            <li>2020 refresh intends to improve ease of use</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Limited legroom in some configurations</li>
                        </ul>
                    </div>
                </div>
                <div className="gmc-savana">
                    <h1>2020 GMC Savana</h1>
                    <p className="col-md-6">
                        Every Savana variant has a simple gauge cluster display, which shows information like speed,
                        fuel economy, driving range, or warning messages. The rearview mirror contains a small color display,
                        which shows the view from the backup camera. All models include an AM/FM radio; an available head unit upgrade adds a CD player and Bluetooth connectivity.
                        All models have Wi-Fi hotspot compatibility, plus 12-volt and 120-volt outlets, but a single USB port is optional.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/2020-gmc-savana-3500-ls-ext-passenger-van-angular-front.png")} alt="2020 GMC Savana" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Huge interior cargo capacity</li>
                            <li>Passenger van seats 12 or 15</li>
                            <li>Gas, diesel, and CNG engine options</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Basic and utilitarian</li>
                            <li>Old-fashioned and unrefined</li>
                            <li>Few tech or comfort features</li>
                        </ul>
                    </div>
                </div>
                <div className="mercedes-benz-sprinter">
                    <h1>2020 Mercedes-Benz Sprinter</h1>
                    <p className="col-md-6">
                        Basic Sprinter models are not equipped with an infotainment touchscreen; the backup camera image shows in a small display in the rearview mirror.
                        Touchscreens, either 7.0- or 10.3-inch, running the MBUX infotainment system, with Apple CarPlay and Android Auto, are available. GPS navigation and Wi-Fi hotspot compatibility are also on the options list.
                        All models have a USB type-C port in the front row, with additional type-C ports and a wireless device charging pad fitted depending on options and specification.
                        The standard Mercedes PRO Connect app provides business owners and fleet managers with vehicle data and information tracking abilities.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/2020-mercedes-benz-sprinter-tourer-316-l2h2-passenger-van-angular-front.png")} alt="2020 Mercedes-Benz Sprinter" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Huge size means huge versatility</li>
                            <li>Optional four-wheel drive</li>
                            <li>Available MBUX infotainment</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Base model lacks tech</li>
                            <li>No V-8 engine option</li>
                        </ul>
                    </div>
                </div>
                <div className="ram-proMaster">
                    <h1>2020 Ram ProMaster</h1>
                    <p className="col-md-6">
                        This being a commercial model, tech is pretty limited. There's a 5.0-inch touchscreen infotainment system that includes Bluetooth and SiriusXM satellite radio capability,
                        but no Apple CarPlay or Android Auto support. There is, however, a USB port, voice command,
                        and Siri Eyes Free functionality. The system can also be ordered with integrated navigation.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/vans/2020-Ram-ProMaster-EX-400908861-25.png")} alt="2020 Ram ProMaster" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Thoughtful design</li>
                            <li>Competitive pricing</li>
                            <li>Massive cargo capacity</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>New features arrive for the 2021 model year</li>
                            <li>Awkward (some might say ugly) bodywork</li>
                        </ul>
                    </div>
                </div>
                <div className="car">
                    <div className="chevrolet-express">
                        <h1>2020 Chevrolet Express</h1>
                        <p className="col-md-6">
                            The Chevrolet Express is a full-size commercial van that enters the 2020 model year unchanged. In Cargo specification, the rear area behind the first row is empty.
                            Go for the Passenger arrangement for seating up to 15 passengers. Introduced in 1995, the Express received a refresh in 2003.
                            It's a utilitarian and straightforward vehicle built to carry lots of equipment or passengers.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/vans/2020-Chevrolet-Express_Cargo_Van-white-full_color-driver_side_front_quarter.png")} alt="2020 Chevrolet Express" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Massive cargo capacity</li>
                                <li>Seats up to 15 occupants</li>
                                <li>Three engine options</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Utilitarian and unrefined</li>
                                <li>Devoid of niceties</li>
                                <li>Lacks newer tech features</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mercedes-benz-sprinter-2021">
                    <h1>2021 Mercedes-Benz Sprinter</h1>
                    <p className="col-md-6">
                        The Sprinter can be ordered in two-seat Cargo, two-seat Cab Chassis/Cutaway, five-seat Crew, and 12-15-seat Passenger configurations.
                        Every configuration offers 144- and 170-inch wheelbase options, and Cargo variants provide an additional extended-length 170-inch option. Sprinter Cargo, Crew, and Passenger vans are available in standard- and high-roof body styles. As you can imagine, cargo volume varies by style. On the low end, short-wheelbase passenger models have 78.6 cubic feet of space. Take out most of those seats, and a Crew model will get you up to 261.3 cubic feet with the short wheelbase and 370.8 with a long wheelbase.
                    </p>                    <img src={require("../../../assets/images/typeOfCars/vans/14489_st1280_046.png")} alt="2021 Mercedes-Benz Sprinter" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Available four-wheel drive</li>
                            <li>Nearly endless configurations</li>
                            <li>Optional modern safety tech</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Can be pricey</li>
                            <li>Slower than EcoBoost Transit </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Vans;
