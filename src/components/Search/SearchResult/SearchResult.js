import React from 'react';
import SearchResultItem from './SearchResultItem/SearchResultItem';

class SearchResult extends React.Component {
    renderResultVideos = () => {
        const result_videos = this.props.result_videos;
        const string_search = this.props.string_search;
        if (string_search !== '')  {
            return result_videos.map((video, index) => {
                    return (
                            <SearchResultItem lang_votes={this.props.lang_votes} key={index} video={video} onClick={this.props.onClick} />
                    );
                }
            );
        } else {
            return null;
        }

    }

    render() {
        return (
            <div className="search_result">
                {this.renderResultVideos()}
            </div>
        );
    }
}

export default SearchResult;