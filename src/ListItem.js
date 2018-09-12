import React, { Component } from 'react';
//import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: false
        };
    }

    handleClick() {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.key);
        }
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        // this.props == the way JSX sends data down to components/
        // property on this component
        // on way data flow - parent -> child
        const metaData = this.props.comicData;
        // destructure and pull out the thumbnail data
        const { thumbnail, issueNumber, pageCount, dates, prices } = metaData;

        // JSX within the return
        return (
            <div
                className={`comic ${this.state.selected ? 'selected' : ''}`}
                onClick={this.handleClick}
            >
                <div className="comic-thumbnail-container">
                    <img
                        className="comic-thumbnail"
                        src={`${thumbnail.path}.${thumbnail.extension}`}
                    />
                </div>
                <div className="comic-data-container">
                    <h2>{metaData.title}</h2>
                    <p>Issue: {issueNumber}</p>
                    <p>Pages: {pageCount}</p>
                    <p>Date: {new Date(dates[0].date).toLocaleDateString()}</p>
                    <p>Price: ${prices[0].price}</p>
                </div>
            </div>
        );
    }
}

export default ListItem;
