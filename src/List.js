import React, { Component } from 'react';
import ListItem from './ListItem';
//import './List.css';

class List extends Component {
    render() {
        return <ListItem comicData={this.props.result[0]} />;
    }
}

export default List;
