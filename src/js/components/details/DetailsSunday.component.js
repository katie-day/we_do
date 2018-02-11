import React from 'react';
import rangi from '../../../images/rangi.jpg';

const DetailsSunday = () => {
    return (
        <div
            className="section u-text-center t-navy t-navy--bg"
            id="the-sunday-details"
        >
            <div className="gutters">
                <h2 className="u-current-text-color">
                    you’re invited to sunday happy hour
                </h2>
                <p className="u-current-text-color u-mb-xl">
                    Enjoy catching up with family from near and far.
                </p>
                <div className="width-1/2@medium u-auto">
                    <div className="info-block">
                        <div className="info-block__image">
                            <img
                                src={rangi}
                                alt="Kumeu Valley Estate"
                                width="214"
                                height="214"
                            />
                        </div>
                        <h4 className="u-current-text-color">When and where</h4>
                        <p className="u-current-text-color">
                            Sunday 13 May 2018
                            <br />
                            2PM onwards
                        </p>
                        <p className="u-text-bold u-current-text-color">
                            Venue to be confirmed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSunday;
