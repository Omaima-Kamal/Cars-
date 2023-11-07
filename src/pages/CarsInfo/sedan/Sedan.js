import React from 'react';
import '../../../css/Sedan.css'
import Container from 'react-bootstrap/Container';

const Sedan = () => {
    return (
        <div>
            <div className="sedan-photo">
                <h1>Best Sedan</h1>
            </div>
            <Container>
                <div className="sedan-car">
                    <div className="kia-rio">
                        <h1>2020 Kia Rio</h1>
                        <p className="col-md-6">
                            All Kia Rio trims include a 7.0-inch infotainment touchscreen that bundles Apple CarPlay, Android Auto, and Bluetooth connectivity.
                            A 3.5-inch gauge cluster information display is included. A front USB port and auxiliary input jack are standard,
                            and a rear USB charge port is included on S models. Optional is an enhanced infotainment system that runs on the same 7.0-inch touchscreen, but adds vehicle data and telematics features, voice controls,
                            and SiriusXM satellite radio. All models have a six-speaker audio system.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/sedan/2020-kia-rio-s-sedan-angular-front.png")} alt="2020 Kia Rio" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Good crash safety performance</li>
                                <li>Improved fuel economy</li>
                                <li>Doesn't feel cheap</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Miniscule cargo capacity</li>
                                <li>Cramped second row</li>
                                <li>Lacks power and torque</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="nissan-versa">
                        <h1>2020 Nissan Versa</h1>
                        <p className="col-md-6">
                            All 2020 Nissan Versa models come with a 7.0-inch touchscreen featuring a rearview camera.
                            SV and SR trims build on that with Apple CarPlay and Android Auto as standard. On the SV and SR trims,
                            a reconfigurable 7.0-inch gauge cluster display replaces the analog tachometer.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/sedan/model1.png")} alt="2023 Volkswagen Touran" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Lots of standard equipment</li>
                                <li>Great fuel economy</li>
                                <li>Big trunk</li>
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
                <div className="mitsubishi-mirage">
                    <h1>2020 Mitsubishi Mirage</h1>
                    <p className="col-md-6">
                        Entry-level Mirage ES models feature a 7.0-inch infotainment screen. All other trims get a smaller 6.5-inch screen, but Apple CarPlay and Android Auto,
                        CD and MP3 audio compatibility, and voice recognition functionality come loaded on that system All trims have a front-row USB port, Bluetooth connectivity,
                        and a four-speaker audio system standard; a premium audio system is available.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/2020-mitsubishi-mirage-g4-se-sedan-angular-front.png")} alt="2020 Mitsubishi Mirage" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Very good fuel economy</li>
                            <li>Strong warranty support</li>
                            <li>Low starting price</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Least-powerful new car on sale in 2020</li>
                            <li>Devoid of driving enjoyment</li>
                            <li>Noisy, rough ride quality</li>
                        </ul>
                    </div>
                </div>

                <div className="honda-civic">
                    <h1>2020 Honda Civic</h1>
                    <p className="col-md-6">
                        With the exception of the LX,
                        which features a 4-speaker audio system controlled via a 5.0-inch screen, all Civic models come with a 7.0-inch touchscreen infotainment system, HondaLink smartphone connectivity, and Apple CarPlay/Android Auto capability. Every Civic comes standard with a single USB port, while EX models and above add a second USB port rated at 1.5 amps for smartphone charging.
                        Touring and Sport Touring models receive a satellite navigation system and a 10-speaker, 450-watt audio system.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/2020-honda-civic-lx-sedan-angular-front.png")} alt="2020 Honda Civic" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Best-in class driving dynamics</li>
                            <li>Variety of trim levels, bodystyles, and powertrains</li>
                            <li>Standard active safety features on all trims</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Infotainment system is slow and unintuitive</li>
                            <li>Exterior styling is a bit busy</li>
                            <li>Odd dashboard design and materials</li>
                        </ul>
                    </div>
                </div>

                <div className="hyundai-elantra-2020">
                    <h1>2020 Hyundai Elantra</h1>
                    <p className="col-md-6">
                        The 2020 Hyundai Elantra comes standard with a 5.0-inch touchscreen infotainment system with six speakers and Apple CarPlay/Android Auto connectivity.
                        Elantra SEL sedan models and above feature a 7.0-inch touchscreen infotainment system with SiriusXM and HD radio,
                        while Elantra GT models include an 8.0-inch touchscreen system. Satellite navigation is available on models equipped with the 8.0-inch touchscreen system.
                        Standard and optional on Sport/GT N-Line is an Infinity audio system with seven speakers.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/2020-hyundai-elantra-limited-sedan-angular-front.png")} alt="2020 Hyundai Elantra" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Crisp, communicative steering</li>
                            <li>Abundant active safety features</li>
                            <li>Hatchback models are spacious and sporty</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Front-end styling on sedan is questionable and exaggerated</li>
                            <li>Well-designed interior let down by shiny materials</li>
                            <li>Lack of powertrain refinement on some engines</li>
                        </ul>
                    </div>
                </div>
                <div className="toyota-corolla">
                    <h1>2020 Toyota Corolla</h1>
                    <p className="col-md-6">
                        The 2020 Corolla features an 8.0-inch touchscreen infotainment system with Apple CarPlay/Android Auto connectivity and Amazon Alexa compatibility,
                        2 USB ports, advanced voice recognition and Bluetooth music streaming, WiFi hotspot, and SiriusXM radio.

                        Corolla SE, XSE, and XLE models offer an optional JBL audio system with nine speakers,
                        HD radio, and integrated satellite navigation.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/20-Toyota-Corolla-Ice-Cap-3-4.png")} alt="2020 Toyota Corolla" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Hatchback brings welcome style and improved handling</li>
                            <li>Apple CarPlay/Android Auto finally available</li>
                            <li>Upgraded engine provides decent power</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>XSE trim is a poor value play</li>
                            <li>Interior materials aren't best in class</li>
                            <li>Loud, underpowered base engine</li>
                        </ul>
                    </div>
                </div>
                <div className="nissan-sentra-2020">
                    <h1>2020 Nissan Sentra</h1>
                    <p className="col-md-6">
                        Higher trim levels of the Sentra have an 8.0-inch touchscreen infotainment system with Apple CarPlay and Android Auto compatibility,
                        plus a 7.0-inch digital gauge cluster. A four-speaker audio system is standard, but an eight-speaker Bose setup is available.
                        Nissan's Active Body Control utilizes the braking system to subtly minimize body movement fore-and-aft and adaptive cruise control is available on nicer trims.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/2020-nissan-sentra-sv-sedan-angular-front.png")} alt="2020 Nissan Sentrar" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Stylish mini-Maxima exterior design</li>
                            <li>Smooth ride</li>
                            <li>Undercuts rivals in price and content</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Doesn't handle as well as a Civic or Jetta</li>
                            <li>No available turbocharged engine</li>
                            <li>No hybrid option</li>
                        </ul>
                    </div>
                </div>
                <div className="kia-forte-sedan">
                    <h1>2020 Kia Forte</h1>
                    <p className="col-md-6">
                        All Kia Forte models feature an 8.0-inch infotainment touchscreen that includes Apple CarPlay, Android Auto,
                        an auxiliary input jack, and Bluetooth streaming audio. Every trim has a 3.5-inch black-and-white information display in the gauge cluster,
                        which can be optionally upgraded to a 4.2-inch color unit. Higher-end models gain satellite radio and smartphone app connectivity for monitoring vehicle maintenance and other functions.
                        Entry-level trims include one front-row USB port, and higher-end trims have two, unless optional wireless device charging is selected. The basic audio system is composed of four speakers,
                        while higher-end models have a six-speaker setup; an eight-speaker premium system is optional.
                        Remote keyless entry is standard on all models.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/13863_st0640_116.png")} alt="2020 Kia Forte" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Excellent crash safety scores</li>
                            <li>Sharp exterior and interior design</li>
                            <li>Sporty turbocharged GT model</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Unpleasant CVT on most trims</li>
                            <li>Rides rough over minor road imperfections</li>
                        </ul>
                    </div>
                </div>
                <div className="car">
                    <div className="mazda-mazda3">
                        <h1>2020 Mazda Mazda3</h1>
                        <p className="col-md-6">
                            Every Mazda3 model gets an 8.8-inch infotainment display that's controlled by a rotary dial behind the shifter.
                            There are two USB ports, and Apple CarPlay and Android Auto are included on all models except the entry-level sedan;
                            smartphone connectivity comes on all hatchback models. Every model also has a 7.0-inch LCD display in the gauge cluster that's reconfigurable to show speed,
                            vehicle data, or driver-assist system status. Higher-end models receive a head-up display.
                            An eight-speaker audio system is standard but can be upgraded to a premium 12-speaker Bose arrangement.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/sedan/2020-mazda-mazda-3-preferred-package-4wd-sedan-angular-front.png")} alt="2020 Mazda Mazda3" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Elegant exterior styling</li>
                                <li>Class-above interior styling and appointments</li>
                                <li>Practical hatchback body style</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Less fun than earlier generations</li>
                                <li>Large blind spots, especially on hatchback</li>
                                <li>Competitors offer more interior and cargo volume</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hyundai-sonata-sedan">
                    <h1>2020 Hyundai Sonata</h1>
                    <p className="col-md-6">
                        The 2020 Sonata can be equipped with standout technology features. Base models get an 8.0-inch infotainment touchscreen that includes Apple CarPlay and Android Auto.
                        In higher trims, the screen grows to 10.3 inches and gains navigation. An available 12.3-inch digital display replaces the instrument gauges, and uses cameras to show what's in the blind spots when the turn signals are activated. It can be further supplemented by a head-up display. Wireless device charging in the front row is available, as is a USB charge port for rear passengers. All models but the base get keyless entry and push-button start,
                        but the top trim takes it further by replacing the key with a smartphone app.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/sedan/2020-Hyundai-Sonata-hero.png")} alt="2020 Hyundai Sonata" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Bold, head-turning design</li>
                            <li>Standard safety and driver-assist features</li>
                            <li>10 year/100,000-mile powertrain warranty</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Somewhat underpowered engines</li>
                            <li>Spacious front seats, but snug rear seats</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Sedan;
