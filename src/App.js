import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(index) {
        this.setState({
            selected: this.state.selected.concat(index)
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.selected.length}</p>
                <div className="store-container">
                    <h1>All Comics</h1>
                    <List
                        result={Comics().data.results}
                        onSelect={this.handleSelection}
                    />
                </div>
                <div className="owned-container">
                    <h1>My Comics</h1>
                    <List result={Comics().data.results} />
                </div>
            </div>
        );
    }
}

export default App;
