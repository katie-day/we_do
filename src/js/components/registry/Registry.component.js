import React from 'react';

const Registry = () => {
    return (
        <div
            className="section u-text-center u-background-planes"
            id="registry"
        >
            <div className="gutters gutters-1/2@small">
                <div className="block-padded u-bg-color-white">
                    <h2>Gift registry</h2>
                    <div className="line-length u-auto u-mb-l">
                        <p>
                            We are very fortunate to have most of what we need.<br />
                            For those wishing to honour our special occasion
                            with a gift, a contribution towards our honeymoon
                            would be greatly appreciated. You will be helping us
                            to create awesome memories that will last forever.
                        </p>
                    </div>
                    <h5 className="u-current-text-color">
                        Honeymoon Experience
                    </h5>
                    <div className="grid-flex grid--col-spacing grid--row-spacing-s">
                        <div className="width-1/2@medium u-text-left">
                            <p>
                                We're off to Thailand! We are looking forward to
                                delicious food and drink, temples, beaches,
                                cooking classes and monkeys (well, not really
                                the monkeys).
                            </p>
                            <p>
                                We have set up a registry with House of Travel,
                                if you choose to do so, please use the account
                                provided.
                            </p>
                        </div>
                        <div className="width-1/2@medium u-text-left u-mb-xl">
                            <p className="u-current-text-color">
                                Account:{' '}
                                <span className="u-text-bold">
                                    06 0801 0461499 02
                                </span>
                                <br />
                                Please add the reference:{' '}
                                <span className="u-text-bold">
                                    MF25261
                                </span>
                                <br />
                                And email Annette at{' '}
                                <a href="mailto:annetteh@hot.co.nz">
                                    annetteh@hot.co.nz
                                </a>{' '}
                                to confirm your gift.
                            </p>
                        </div>
                        <div className="width-full">
                            <h5 className="u-current-text-color">Gifts</h5>
                            <div className="line-length u-auto">
                                <p className="u-current-text-color">
                                    If you would prefer to give a physical gift,
                                    we have set up a registry at Shut
                                    The Front Door. Please visit in store at{' '}
                                    <a
                                        href="https://www.shutthefrontdoor.co.nz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="u-current-text-color"
                                    >
                                        Shut The Front Door Takapuna
                                    </a>{' '}
                                    to view our registry or email me at <a href="mailto:katie.and.dale.stringer@gmail.com">katie.and.dale.stringer@gmail.com</a> and I will send you the list to shop online!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registry;
