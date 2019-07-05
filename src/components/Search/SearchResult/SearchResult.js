import React from 'react';
import SearchResultItem from './SearchResultItem/SearchResultItem';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: '1'
        }
    }

    // getVotes = async (videoId) =>{
    //     const api_url = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M`);
    //     const api_statistic = await api_url.json();
    //     //return api_statistic.
    //     console.log("likeCount:", );
    //     const statistics = api_statistic.items[0].statistics.likeCount;
    //     return (api_statistic.items[0].statistics.likeCount);
    // }

    getVotes = async (videoId) => {
            const api_url = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M`);
            const api_statistic = await api_url.json();
            const statistics = await api_statistic.items[0].statistics.likeCount;
        return '111';
    }

    renderResultVideos = () => {
        const result_videos = this.props.result_videos;
        const string_search = this.props.string_search;
        console.log("result_videos", result_videos);
        if (string_search !== '')  {
            console.log("result_videos.data_votes", result_videos);
            console.log("result_videos.data_votes", result_videos.data_votes);
            return result_videos.map((video, index) => {
                    return (
                            <SearchResultItem lang_votes={this.props.lang_votes} key={index} video={video}  />
                    );
                }
            );
        } else {
            return null;
        }

    }

    render() {
        console.log("myRes", this.props.result_videos);
        return (
            <div className="search_result">
                {this.renderResultVideos()}
            </div>
        );
    }
}

export default SearchResult;