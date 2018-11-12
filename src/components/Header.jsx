import React from 'react';

import Menu from './Menu.jsx';

export default class Header extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <header id="header">
                    <Menu />
                    <h1>Hi, I'm Joel.</h1>
                </header>
            </div>  
        );
    }
}