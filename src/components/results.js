import React, { Component } from 'react';
import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPosts(query);
    }

    render() {
        return (
            <div>
                <Logo size={55}/>
                <SearchBar onSubmit = {(query) => this.handleSearchBarSubmit(query)}/>
                <ResultsPosts />
            </div>
        )
    }
}

export default connect(null, actions)(Results);