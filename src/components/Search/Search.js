import React from 'react';

import SearchInput from './SearchInput/SearchInput';
import SearchResult from './SearchResult/SearchResult';

class Search extends React.Component {
    render() {
        return (
            <div className={'search'}>
                <SearchInput placeholder={this.props.langParams.placeholder} onChange={this.props.onChange}/>
                <SearchResult lang_votes={this.props.langParams.votes} result_videos={this.props.result_videos} string_search={this.props.string_search} onClick={this.props.onClick}/>
            </div>
        )
    }
}

export default Search;