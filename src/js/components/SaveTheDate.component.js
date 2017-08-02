import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import AddToCalendar from 'react-add-to-calendar';
import { isFacebookApp } from '../utils'


const SaveTheDate = () => {
    return (
        <div className="main" role="main">
            {window.IsTouch ? (
                <Scene />
            ) : (
                <ReactCursorPosition>
                    <Scene />
                </ReactCursorPosition>
            )}
            
        </div>
    );
};

const Scene = (props) => {
    // console.log('props: ', props);
    const {
        position: {
        x = 0,
        y = 0
        } = {}
    } = props;

    const xOffset = x ? x * 0.02 : 0;
    const yOffset = y ? y * 0.02 : 0;

    const xOffsetBac = x ? x * 0.04 : 0;
    const yOffsetBac = y ? y * 0.04 : 0;

    let backgroundStyle = {
        transform: 'translate(0,0)',
    };

    let titleStyle = {
        backgroundPosition: 'center',
    };

    if (!window.IsTouch) {
        backgroundStyle = {
            transform: `translate3d(${xOffset}px, ${yOffset}px, 0)`,
        }
        
        titleStyle = {
            backgroundPosition: `${xOffsetBac}px ${yOffsetBac}px`
        }
    }

    const event = {
        title: 'Dale and Katie’s wedding' ,
        description: 'We are getting married and would love you to celebrate with us!',
        location: 'Kumeu Valley Estate, Old North Road, Waimauku, New Zealand',
        startTime: '2018-05-12T15:30:00+12:00',
        endTime: '2018-05-12T23:00:00+12:00'
    };

    const items = [
        { apple: 'Apple' },
        { google: 'Google' }
    ];

    const isFacebook = isFacebookApp();

    return (
        <div>
            <div className="background">
                <div className="background__scene" style={backgroundStyle}>
                    <div className="background__image"></div>
                </div>
            </div>
            <div className="section">
                <div className="section__inner">
                    <div className="title" style={titleStyle}>
                        <h1 className="title__text">Save our&nbsp;date</h1>
                    </div>
                    <div className="text-group">
                        <h3 className="text-body">Dale & Katie</h3>
                        <p className="text-body">Saturday 12 May 2018<br/>
                        Kumeu Valley Estate, Auckland.</p>
                    </div>
                    <div className="btn-group">
                        <AddToCalendar 
                            event={event} 
                            buttonLabel="Add to your calendar"
                            listItems={items}
                            />
                            {isFacebook && (
                                <div className="pb">
                                    <p className="small-text">Looks like you are using an in-app browser. To add our event to your calendar, open this website in safari or chrome!<br/>(Click the three dots in the bottom right)</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveTheDate;