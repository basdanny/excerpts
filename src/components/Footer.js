import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="float-right">
                        <a href="#"><i className="fas fa-chevron-up"></i></a>
                    </div>
                    <div>© excerpts</div>
                </div>
            </footer>
        );
    }
};