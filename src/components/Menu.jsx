import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div>
               <section className="navigation__section">
                    <div className="navigation__container">
                    <div className="close__btn" aria-label="Close Menu">X</div>
                        <section className="nav__left">
                            <nav>
                                <ul>
                                    <li>Home</li>
                                    <li>Gallery</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        </section>
                        <section className="nav__right">
                            
                        </section>
                    </div>
               </section>
            </div>
        );
    }
}