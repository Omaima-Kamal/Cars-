import React from 'react';
import '../../../css/MPV.css'
import Container from 'react-bootstrap/Container';

const MPV = () => {
    return (
        <div>
            <div className="mpv-photo">
                <h1>Best MPV</h1>
            </div>
            <Container>
                <div className="mpv-car">
                    <div className="volkswagen-id-buzz">
                        <h1>2023 Volkswagen ID Buzz</h1>
                        <p className="col-md-6">
                            The VW ID Buzz very successfully brings the MPV up to date and into the future,
                            yet it still loveably tips its hat to the past. In other words, it's a modern electric car,
                            though one with some retro styling inspired by classic VW Type 2 campers. The ID Buzz is powered by the same punchy, 201bhp electric motor found in the other Volkswagen ID models, such as the VW ID 3 and VW ID 4 – it has the same 77kWh (usable capacity) battery pack as well. It's the most practical ID product and one of the most spacious and versatile electric cars you can buy. Plus,
                            it drives well and is cheaper than you might think if you're buying on finance.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/mpv/volkswagen-id.-buzz-concepts-by-prior-design.jpg")} alt="2023 Volkswagen ID Buzz" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Pleasant to drive with a comfortable ride</li>
                                <li>Hugely practical</li>
                                <li>Strong resale values</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Not available as a seven-seater - yet</li>
                                <li>Fiddly air-con controls and infotainment</li>
                                <li>Efficiency could be better</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car">
                    <div className="volkswagen-touran-2023">
                        <h1>2023 Volkswagen Touran</h1>
                        <p className="col-md-6">
                            Just because you're wearing your sensible trousers when buying a new MPV, it doesn’t mean you have to slum it.
                            Opt for a Volkswagen Touran and you’ll find the same level of plushness that you’d get in a Golf,
                            but with far greater practicality. All five of its rear seats feature Isofix child seat mounting points and enough space for adults.
                            The Touran drives better than the rival (now discontinued) 2018-2022 Citroën Grand C4 Spacetourer, too, and buyers should find comfort in it having been recently safety tested,
                            unlike most MPVs that have been around since 2015 (like the Touran has).
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/mpv/volkswagen-touran-2021-2024-1677039041.1338382.jpg")} alt="2023 Volkswagen Touran" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Superb space and practicality</li>
                                <li>Tempting PCP finance deals and big discounts</li>
                                <li>Great to drive by MPV standards</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Rivals offer more economical diesel or hybrid engines</li>
                                <li>Ford Galaxy has more third row space</li>
                                <li>Automatic gearbox can be hesitant</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="citroën-berlingo">
                    <h1>2023 Citroën Berlingo</h1>
                    <p className="col-md-6">
                        Okay, it's the same as the Peugeot Rifter and Vauxhall Combo Life underneath,
                        but the Citroën Berlingo’s keener pricing, better level of standard equipment and slightly plusher feel make it an even better buy.
                        Add in its hugely spacious interior and a soft ride – softer than the Touran’s,
                        in fact – and you’ll find the Berlingo a relaxing cruiser in which to cover miles. Some non-van-based MPVs are better to drive overall, but, put simply, cars don’t get much more practical than this for the money.
                        Oh, and there's an electric version as well – the Citroën e-Berlingo.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/maxresdefault.jpg")} alt="2023 Citroën Berlingo" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Great practicality</li>
                            <li>Flexible 1.2 Puretech 110 petrol engine</li>
                            <li>Excellent value</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Fiddly infotainment system</li>
                            <li>Some storage solutions are optional</li>
                            <li>Mainstream MPV rivals are better to drive</li>
                        </ul>
                    </div>
                </div>

                <div className="dacia-jogger">
                    <h1>2023 Dacia Jogger</h1>
                    <p className="col-md-6">
                        Offering lots of practicality for not a lot of money is nothing new, but few stick the landing and avoid harsh compromise like the Dacia Jogger.
                        It's cheaper to buy than a Toyota Yaris small car, yet it's a very accomplished seven-seater and one that's decent to drive and comes with a good amount of kit. For the best value, we think the 109bhp petrol engine (badged 110 TCe) is the one to go for – over the hybrid version. Its one-star safety rating (earned during safety testing by Euro NCAP) stops it from getting any higher than this mind you,
                        plus it hasn't really got the performance to cope with a car full of people and belongings.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/R-DAM_1414729_lightened.jpg")} alt="2023 Dacia Jogger" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Extremely well priced</li>
                            <li>Genuine seven-seat usability</li>
                            <li>Easy to drive</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Poor safety rating</li>
                            <li>Pricey higher trims</li>
                            <li>Middle row seats don’t slide back and forth</li>
                        </ul>
                    </div>
                </div>

                <div className="volkswagen-ultivan">
                    <h1>2023 Volkswagen Multivan</h1>
                    <p className="col-md-6">
                        While the smaller, electric ID Buzz is a more sophisticated package,
                        the VW Multivan is the more practical machine, plus it remains better to drive than many of its van-based MPV rivals.
                        It comes with an extensive range of engine options to suit all needs, too, including a plug-in hybrid (PHEV).
                        As we mentioned, you can get Standard and Long versions, with the latter offering seemingly infinite amounts of space – at quite a high price, though,
                        especially if you also want the PHEV engine option.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/Volkswagen_Multivan_Edition_2023.jpg")} alt="2023 Volkswagen Multivan" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Exceptionally good predicted residual values</li>
                            <li>Good value against van-based MPV rivals</li>
                            <li>Lots of safety tech</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Infotainment not the best</li>
                            <li>No rear air-con as standard</li>
                        </ul>
                    </div>
                </div>
                <div className="ford-galaxy">
                    <h1>2023 Ford Galaxy</h1>
                    <p className="col-md-6">
                        If you need to carry seven people and some luggage as well, the Ford Galaxy has long been the go-to MPV.
                        With its huge boot and spacious seven seats, it fulfils the same practical role as rivals such as the
                        (now discontinued) 2010-2022 Volkswagen Sharan, but is quieter and more composed on the road. The Galaxy is also one of the best-handling MPVs out there and has a comfortable ride.
                        Sure, it doesn't have the most luxurious interior you'll ever see, plus there are newer options on this list
                        – this generation of the model has been around since 2015 – but the Galaxy remains a sound choice.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/ford-galaxy_100507703_h.jpg")} alt="2023 Ford Galaxy" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Practical seating flexibility with heaps of boot space</li>
                            <li>Handles surprisingly well on the road</li>
                            <li>Quiet on the motorway</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Not that well equipped</li>
                            <li>Infotainment system is sluggish</li>
                            <li>Top trim pushes up the price</li>
                        </ul>
                    </div>
                </div>
                <div className="peugeot-rifter">
                    <h1>2023 Peugeot Rifter</h1>
                    <p className="col-md-6">
                        The Peugeot Rifter is essentially a Vauxhall Combo Life wearing Peugeot badges,
                        but it feels slightly classier inside and this pushes it one place higher on this list. Unlike the Combo Life, you don't have to have it as an electric car – although you can if you want (Peugeot e-Rifter). There's a good range of petrol and diesel engines to choose from,
                        with our favourite being the 128bhp diesel option (badged Blue HDi 130). Apart from that,
                        you have class-leading space and a surprisingly good driving experience here.
                        Just remember to opt for the XL version if you need seven seats.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/peugeot-rifter-m-e136ch-5pl-neuf-2023-annemasse.jpg")} alt="2023 Peugeot Rifterr" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>

                            <li>Tremendous space</li>
                            <li>Lots of practicality</li>
                            <li>Comfy ride</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Slightly more expensive than the Citroën Berlingo</li>
                            <li> Infotainment system is fiddly</li>
                            <li>Some cheap feeling interior trim</li>
                        </ul>
                    </div>
                </div>
                <div className="vauxhall-combo-life">
                    <h1>2023 Vauxhall Combo Life</h1>
                    <p className="col-md-6">
                        The Vauxhall Combo Life doesn't hide its van roots. It's unashamedly devoid of pizzazz,
                        but this helps keep its price down and its practicality up. It delivers more space per pound than just about any other new car.
                        Both five and seven-seat versions are available, sliding rear doors make it easy to get kids in and out in tight spaces,
                        and this is one of the most comfortable MPVs around.
                        The electric version's official range of 174 miles is decent for the class and price point, although it's not great overall.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/vauxhallcombolifegreylhs03-21.png")} alt="2023 Vauxhall Combo Life" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>
                            <li>Great practicality</li>
                            <li>Decent performance despite its size</li>
                            <li>Lots of standard safety kit</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Fiddly infotainment system</li>
                            <li>Low-rent interior</li>
                            <li>The range could be better</li>
                        </ul>
                    </div>
                </div>
                <div className="car">
                    <div className="ford-S-max">
                        <h1>2023 Ford S-Max</h1>
                        <p className="col-md-6">
                            If you're looking for an MPV that won't cost an arm and a leg to run, the economical Ford S-Max is well worth considering.
                            Like most of the best modern Fords, such as the Ford Focus, it's also one of the best-handling cars in its class, combining precise steering with excellent body control.
                            And while the interior isn't as classy as some rivals' – think VW Touran
                            – it's as practical as you'd expect from a family car of its size.
                            You will find more space inside the larger Ford Galaxy, mind you,
                            and that's reflected in its higher place on this list.
                        </p>
                        <img src={require("../../../assets/images/typeOfCars/mpv/ford-s-max-concept_100437890_l.jpg")} alt="2023 Ford S-Max" />
                        <div className="col-md-6">
                            <h6>Pros</h6>
                            <ul>
                                <li>Decent handling</li>
                                <li>Comfortable ride</li>
                                <li>Practical interior</li>
                            </ul>
                            <h6>Cons</h6>
                            <ul>
                                <li>Interior quality could be better</li>
                                <li>Some rivals are cheaper</li>
                                <li>Third-row seats best for children</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bmw-2-series-active-tourer">
                    <h1>2023 BMW 2 Series Active Tourer</h1>
                    <p className="col-md-6">
                        The first, 2014-2022 BMW 2 Series Active Tourer was a controversial car when it first went on sale. Not only was it BMW's first MPV, but it was the first BMW to feature front-wheel drive rather than the sportier rear-wheel drive setup that the brand has traditionally been associated with.
                        This second generation version of the BMW 2 Series Active Tourer caused less of a commotion upon its arrival. It has a robust, high-quality interior,
                        what's more it’s good to drive and offers impressive engines (including two plug-in hybrid options).
                        There are much more spacious MPVs out there, mind you, and you can't get it with seven seats.
                    </p>
                    <img src={require("../../../assets/images/typeOfCars/mpv/01.jpg")} alt="2023 BMW 2 Series Active Tourer" />
                    <div className="col-md-6">
                        <h6>Pros</h6>
                        <ul>

                            <li>Plenty of rear space</li>
                            <li>Good balance of ride and handling</li>
                            <li>Class-leading infotainment system</li>
                        </ul>
                        <h6>Cons</h6>
                        <ul>
                            <li>Firm ride for an MPV</li>
                            <li>Tyre roar on coarse surfaces</li>
                            <li>Expensive, especially top-end models</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default MPV;
