import React from 'react';

import Header from './Header.jsx';
import Hero from './Hero.jsx';

export default class Main extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Hero />
            </React.Fragment>
        );
    }
}