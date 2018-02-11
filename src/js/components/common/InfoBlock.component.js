import React from 'react';
import PropTypes from 'prop-types';

const InfoBlock = ({ image, heading, children, icon, altText }) => {
    return (
        <div className="info-block">
            {image !== '' ? (
                <div className="info-block__image">
                    <img src={image} alt={altText} width="214" height="214" />
                </div>
            ) : null}
            {icon !== '' ? (
                <div className="info-block__icon">
                    <img src={icon} alt={altText} width="85" />
                </div>
            ) : null}
            {icon !== '' ? <h5>{heading}</h5> : <h4>{heading}</h4>}

            {children}
        </div>
    );
};

InfoBlock.defaultProps = {
    image: '',
    icon: '',
    altText: '',
};

InfoBlock.propTypes = {
    image: PropTypes.string,
    icon: PropTypes.string,
    heading: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    altText: PropTypes.string,
};

export default InfoBlock;
