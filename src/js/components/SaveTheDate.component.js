import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import AddToCalendar from 'react-add-to-calendar';


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
    console.log('props: ', props);
    const {
        position: {
        x = 0,
        y = 0
        } = {}
    } = props;

    const xOffset = x ? x * 0.03 : 0;
    const yOffset = y ? y * 0.03 : 0;

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
            backgroundPosition: `${xOffset}px ${yOffset}px`
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveTheDate;