import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';

class App extends Component {
    render() {
        return <List result={Comics().data.results} />;
    }
}

export default App;
