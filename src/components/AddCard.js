import React, { Component } from 'react';
import axios from 'axios';

export default class AddCard extends Component {
    state = { title: "", text: "" };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ title: "", text: "" });
    };

    clickFunnyExcerpt = event => {
        event.preventDefault();
        axios.get('https://api.icndb.com/jokes/random')
            .then(
                (response) => { this.setState({ title: 'Norris Joke ' + response.data.value.id, text: response.data.value.joke }) },
               	(error) => { console.log(error) }
            );
    };

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col-11">
                        <div className="collapse" id="collapseAddExcerpt">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-5">
                                        <input value={this.state.title} onChange={event => this.setState({ title: event.target.value })} className="form-control" type="text" placeholder="Title/Url" required />
                                    </div>
                                    <div className="col-5">
                                        <textarea value={this.state.text} onChange={event => this.setState({ text: event.target.value })} className="form-control" rows="1" type="text" placeholder="Title/Url" />
                                    </div>
                                    <div className="col-2">
                                        <button type="submit" className="btn btn-outline-dark mb-2">Add excerpt</button>
                                        <button onClick={this.clickFunnyExcerpt} className="btn btn-outline-dark mb-2 ml-1"><i className="far fa-smile-wink"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="float-right">
                            <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseAddExcerpt" aria-expanded="false" aria-controls="collapseAddExcerpt">
                                <i className="far fa-edit"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
