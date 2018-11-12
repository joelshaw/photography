import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <section className="menu__section">
                    <div className="hamburger">
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                    </div>
                    <div className="menu__label">
                        <p>Navigation</p>
                    </div>
                </section>
            </div>
        );
    }
}