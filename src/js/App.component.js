import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/common/header/Header.component';
import Welcome from './components/welcome/Welcome.component';
import Details from './components/details/Details.component';
import DetailsSunday from './components/details/DetailsSunday.component';
import Travel from './components/travel/Travel.component';
import Accommodation from './components/accommodation/Accommodation.component';
import Registry from './components/registry/Registry.component';
import Extras from './components/extras/Extras.component';
import Footer from './components/common/footer/Footer.component';
import Rsvp from './components/rsvp/Rsvp.container';

class App extends Component {
    componentDidMount() {
        const { updateGuest, guest_id } = this.props;
        if (guest_id) {
            updateGuest();
        }
    }

    render() {
        const { guest } = this.props;
        return (
            <div>
                <Header guest={guest} />
                <Welcome guest={guest} />
                <Details />
                <Travel />
                {guest.type === 'family' && <DetailsSunday />}
                {!guest.rsvp && <Rsvp />}
                <Accommodation />
                <Registry />
                <Extras />
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    guest: PropTypes.object,
    guest_id: PropTypes.string,
};

App.defaultProps = {
    guest: {},
    guest_id: '',
};

export default App;
