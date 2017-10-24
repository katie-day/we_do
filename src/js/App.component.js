import React, { Component } from 'react';
// import SaveTheDate from './components/SaveTheDate.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Details />
        { guest.type === 'family' && (
          <SundayDetails />
        )}
        <Travel />
        <Accommodation />
        { guest.rsvp && (
            <Rsvp />
        )}
        <Registry />
        <Footer />
      </div>
    );
  }
}

export default App;
