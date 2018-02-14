import React from 'react';
import bus from '../../../images/bus.png';
import car from '../../../images/car.png';

const Travel = () => {
    return (
        <div className="section u-text-center t-green t-green--bg" id="travel">
            <div className="gutters">
                <h2 className="u-current-text-color">Getting there</h2>
                <div className="line-length u-auto">
                    <p className="u-current-text-color u-mb-xl">
                        Kumeu Valley Estate is situated about 30 minutes from
                        Auckland City and about 45 minutes from Takapuna on the
                        North Shore.
                    </p>
                </div>
                <div className="grid-flex grid--col-spacing grid--row-spacing">
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__icon u-mb-s">
                                <img src={bus} alt="By bus icon" width="60" />
                            </div>
                            <h5 className="u-current-text-color">By bus</h5>
                            <p className="u-current-text-color">
                                We are putting on a complimentry bus service to
                                and from the wedding. The bus will depart from{' '}
                                <a
                                    href="https://goo.gl/maps/pfEwYhJgpqA2"
                                    className="u-current-text-color"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    the heart of Takapuna
                                </a>{' '}
                                and return at the end of the night. From here
                                there will be easy access to Uber and taxis to
                                take you the rest of the way. If you choose to
                                catch the bus, further information will be
                                provided.
                            </p>
                        </div>
                    </div>
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__icon u-mb-s">
                                <img src={car} alt="By car icon" width="60" />
                            </div>
                            <h5 className="u-current-text-color">By car</h5>
                            <p className="u-current-text-color">
                                Kumeu Valley Estate is located at 972 Old North
                                Road, Waimauku. Please note: due to the remote
                                location there is a limited taxi service to and
                                from the venue.
                            </p>
                            <p>
                                <a
                                    href="https://www.google.co.nz/maps/dir//Kumeu+Valley+Estate+972+Old+N+Rd,+Huapai,+Waimauku+0882/@-36.8019716,174.5756835,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6d0d13e2a8bebcf9:0x78e8ec38867eff09!2m2!1d174.5111413!2d-36.74204"
                                    className="btn btn--sea"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View in maps
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;
