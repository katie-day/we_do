import React from 'react';
import airbnb from '../../../images/airbnb.jpg';
import hotels from '../../../images/hotels.jpg';

const Accommodation = () => {
    return (
        <div className="section u-text-center" id="accommodation">
            <div className="gutters">
                <h2>Somewhere to stay</h2>
                <div className="line-length u-auto">
                    <p className="u-current-text-color u-mb-xl">
                        The Waimauku region is rather remote and there is
                        limited accommodation surrounding Kumeu Valley, we
                        recommend staying in Takapuna on the North Shore and
                        taking the bus – that way you get to enjoy the day to
                        the fullest.
                    </p>
                </div>
                <div className="grid-flex grid--col-spacing grid--row-spacing">
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__image">
                                <img
                                    src={airbnb}
                                    alt="Villa in Takapuna"
                                    width="214"
                                    height="214"
                                />
                            </div>
                            <h4>Airbnb</h4>
                            <p>
                                Takapuna and the surrounding suburbs have a huge
                                range of places to suit.
                            </p>
                            <p>
                                <a
                                    href="https://www.airbnb.co.nz/s/Takapuna--Auckland/homes?checkin=2018-05-11&checkout=2018-05-13&guests=2&adults=2&infants=0&children=0&place_id=ChIJ4UqFFdA5DW0RAAijQ2HvAAU&allow_override%5B%5D=&s_tag=ZGY6PiYf"
                                    className="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Search AirBnb
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__image">
                                <img
                                    src={hotels}
                                    alt="Spencer on Byron room"
                                    width="214"
                                    height="214"
                                />
                            </div>
                            <h4>Hotels & Motels</h4>
                            <p>in the heart of the Takapuna</p>
                            <p>
                                <a
                                    href="https://www.expedia.co.nz/Hotel-Search?rfrr=TG.LP.SrchWzd.Hotel&GOTO=HOTSEARCH&SearchType=Place&SearchArea=City&lang=1033&needUTF8Decode=true&H-hotelId=&storedCheckinField=&storedCheckoutField=&PlaceName=Takapuna%2C+Auckland%2C+New+Zealand&InDate=11%2F05%2F2018&OutDate=13%2F05%2F2018&NumRoom=1&NumAdult1=2&NumChild1=0&Rm1Child1Age=-1&Rm1Child2Age=-1&Rm1Child3Age=-1&Rm1Child4Age=-1&Rm1Child5Age=-1&Rm1Child6Age=-1"
                                    className="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Find a room
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accommodation;
