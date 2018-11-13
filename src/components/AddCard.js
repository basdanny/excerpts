import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", text: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickFunnyExcerpt = this.clickFunnyExcerpt.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ title: "", text: "" });
    }

    clickFunnyExcerpt(event) {
        event.preventDefault();
        axios.get('https://api.icndb.com/jokes/random')
            .then(
                (response) => { this.setState({ title: 'Norris Joke ' + response.data.value.id, text: response.data.value.joke }); },
                (error) => { console.log(error); }
            );
    }

    handleInputChange(e) {        
        const {name, value} = e.target;
        this.setState({
          [name]: value
        });

        console.log(this.state);        
      }

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col-11">
                        <div className="collapse" id="collapseAddExcerpt">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-5">
                                        <input name="title" value={this.state.title} onChange={this.handleInputChange} className="form-control" type="text" placeholder="Title/Url" required />
                                    </div>
                                    <div className="col-5">
                                        <textarea name="text" value={this.state.text} onChange={this.handleInputChange} className="form-control" rows="1" type="text" placeholder="Title/Url" />
                                    </div>
                                    <div className="col-2">
                                        <button type="submit" className="btn btn-outline-dark mb-2">Add excerpt</button>
                                        <button onClick={this.clickFunnyExcerpt} className="btn btn-outline-dark mb-2 ml-1"><i className="far fa-smile-wink" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="float-right">
                            <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseAddExcerpt" aria-expanded="false" aria-controls="collapseAddExcerpt">
                                <i className="far fa-edit" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddCard.propTypes = {    
    title: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func
};
