import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';

class App extends Component {
    render() {
        return (
            <div>
                <List result={Comics().data.results} />
                <List result={Comics().data.results} />
            </div>
        );
    }
}

export default App;
