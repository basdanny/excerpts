import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="float-right">
                        <a href="# "><i className="fas fa-chevron-up" /></a>
                    </div>
                    <div>© excerpts</div>
                </div>
            </footer>
        );
    }
}