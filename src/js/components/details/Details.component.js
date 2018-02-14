import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import { isFacebookApp } from '../../utils';
import when from '../../../images/when.jpg';
import where from '../../../images/where.jpg';

const Details = () => {
    const items = [{ apple: 'Apple' }, { google: 'Google' }];

    const event = {
        title: 'Dale and Katie’s wedding',
        description:
            'We are getting married and would love you to celebrate with us!',
        location: 'Kumeu Valley Estate, Old North Road, Waimauku, New Zealand',
        startTime: '2018-05-12T15:00:00+12:00',
        endTime: '2018-05-12T23:00:00+12:00',
    };
    const isFacebook = isFacebookApp();
    return (
        <div className="section u-text-center" id="the-details">
            <div className="gutters">
                <h2>The details</h2>
                <div className="grid-flex grid--col-spacing grid--row-spacing">
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__image">
                                <img
                                    src={when}
                                    alt="Sunset"
                                    width="214"
                                    height="214"
                                />
                            </div>
                            <h4>When</h4>
                            <p>
                                <span className="u-text-bold">3PM — 11PM</span>
                                <br />
                                Saturday 12 May 2018
                            </p>
                            {!isFacebook && (
                                <div className="btn-group u-mb">
                                    <AddToCalendar
                                        event={event}
                                        buttonLabel="Add to your calendar"
                                        listItems={items}
                                    />
                                </div>
                            )}
                            <p className="u-muted u-text-s">
                                Bubbles and beer from 3:00PM <br />Ceremony
                                beginning at 3:30PM
                            </p>
                        </div>
                    </div>
                    <div className="width-1/2@medium">
                        <div className="info-block">
                            <div className="info-block__image">
                                <img
                                    src={where}
                                    alt="Kumeu Valley Estate"
                                    width="214"
                                    height="214"
                                />
                            </div>
                            <h4>Where</h4>
                            <p>
                                Kumeu, Auckland
                                <br />at&nbsp;
                                <span className="u-text-bold">
                                    Kumeu Valley Estate
                                </span>
                            </p>
                            <p>
                                <a
                                    href="https://www.google.co.nz/maps/place/Kumeu+Valley+Estate/@-36.74204,174.5089526,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d13e2a8bebcf9:0x78e8ec38867eff09!8m2!3d-36.74204!4d174.5111413"
                                    className="btn"
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

export default Details;
