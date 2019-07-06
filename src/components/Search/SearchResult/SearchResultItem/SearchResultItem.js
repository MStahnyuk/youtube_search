import React from 'react';

class SearchResultItem extends React.Component {

    isVotes = votes => {
        if(votes) return <div><span>{votes}: </span>{this.props.lang_votes}</div>
    }
    render() {
        const video = this.props.video;
        const video_id = video.id.videoId;
        const video_title = video.snippet.title;
        const video_img_src = video.snippet.thumbnails.default.url;
        const video_img_alt = video.snippet.thumbnails.default.description;
        const video_votes = video.votes;
        return (
            <div className={'search_result_item'} style={{marginTop: "10px", background: "#DBD9D9",  border: "1px solid #fff", width: "500px"}} video-id={video_id} video-title={video_title} video-img={video_img_src} video-votes={video_votes} onClick={this.props.onClick}>
                <div>
                    <img src={video_img_src} alt={video_img_alt} style={{float: "left"}}/>
                    <h4>{video_title}</h4>
                    {this.isVotes(video_votes)}
                </div>
            </div>
        )
    }
}

export default SearchResultItem;