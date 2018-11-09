import React, { Component } from 'react';


export default class Card extends Component {
    clickDelete = () => {        
        this.props.deleteCard(this.props.id);
    };

    render() {
        let isLink = this.props.title.startsWith("http");
        let cardtitle = isLink ? <
            h5 className="card-title"><a href={this.props.title}>{this.props.title}</a></h5> 
            : <h5 className="card-title">{this.props.title}</h5>;        

        return (
            <div className="card text-center p-3">
                <div className="hover-btn">
                    <button onClick={this.clickDelete} type="button" className="close" data-dismiss="alert">
                        <i class="far fa-trash-alt fa-xxs"></i>
                    </button>
                </div>
                <div className="card-body">
                    {cardtitle}
                    <p className="card-text">{this.props.text}</p>
                </div>                                
            </div>
        );
    }
}