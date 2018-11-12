import React from 'react';

import Menu from './Menu.jsx';

export default class Header extends React.Component{
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleMenu() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(){
        return(
            <div className="wrapper">
                {!this.state.isHidden && <Menu />}
                <header id="header">
                    <section className="menu__section" tabIndex="0" onClick={this.toggleMenu.bind(this)}>
                        <div className="hamburger">
                            <span className="menu__bar"></span>
                            <span className="menu__bar"></span>
                            <span className="menu__bar"></span>
                        </div>
                        <div className="menu__label">
                            <p>Navigation</p>
                        </div>
                    </section>
                    <h1>Hi, I'm Joel.</h1>
                </header>
            </div>  
        );
    }
}