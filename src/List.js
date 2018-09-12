import React, { Component } from 'react';
import ListItem from './ListItem';
//import './List.css';

class List extends Component {
    render() {
        return (
            <div>
                {this.props.result.map((comic, index) => (
                    <ListItem
                        key={index}
                        comicData={comic}
                        onSelect={this.props.onSelect}
                    />
                ))}
            </div>
        );
    }
}

export default List;
