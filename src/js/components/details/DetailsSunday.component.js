import React from 'react';
import bar from '../../../images/bar.jpg';

const DetailsSunday = () => {
    return (
        <div
            className="section u-text-center t-navy t-navy--bg"
            id="the-sunday-details"
        >
            <div className="gutters">
                <h2 className="u-current-text-color">
                    you’re also invited to sunday happy hour
                </h2>
                <p className="u-current-text-color u-mb-xl">
                    Enjoy catching up with family from near and far.
                </p>
                <div className="width-1/2@medium u-auto">
                    <div className="info-block">
                        <div className="info-block__image">
                            <img
                                src={bar}
                                alt="Kumeu Valley Estate"
                                width="214"
                                height="214"
                            />
                        </div>
                        <h4 className="u-current-text-color">When and where</h4>
                        <p className="u-current-text-color">
                            Sunday 13 May 2018
                            <br />
                            1PM onwards
                        </p>
                        <p className="u-current-text-color">
                            <span className="u-text-bold">Hurstmere Road Brew Bar</span><br/>
                            136 Hurstmere Road, Takapuna (<a href="https://goo.gl/maps/MaqsBqU28Tu" className="u-link-color-white">see on google maps here</a>)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSunday;
