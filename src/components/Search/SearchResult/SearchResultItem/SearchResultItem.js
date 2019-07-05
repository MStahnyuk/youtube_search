import React from 'react';

class SearchResultItem extends React.Component {

    isVotes = votes => {
        if(votes) return <div><span>{votes}: </span>{this.props.lang_votes}</div>
    }
    render() {
        const video = this.props.video;
        return (
            <div className={'search_result_item'} style={{marginTop: "10px", background: "#DBD9D9",  border: "1px solid #fff", width: "500px"}}>
                <a href={'https://www.youtube.com/watch?v=' + video.id.videoId}>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.thumbnails.default.description} style={{float: "left"}}/>
                    <h4>{video.snippet.title}</h4>
                    {this.isVotes(video.votes)}
                </a>
            </div>
        )
    }
}

export default SearchResultItem;