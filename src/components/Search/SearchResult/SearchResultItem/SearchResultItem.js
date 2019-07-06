import React from 'react';

class SearchResultItem extends React.Component {

    isVotes = votes => {
        if(votes) return <div>{this.props.lang_votes}: <span>{votes}</span></div>
    }
    render() {
        const video = this.props.video;
        const video_id = video.id.videoId;
        const video_title = video.snippet.title;
        const video_img_src = video.snippet.thumbnails.default.url;
        const video_img_alt = video.snippet.thumbnails.default.description;
        const video_votes = video.votes;
        const video_views = video.views;
        return (
            <div className={'search_result_item'} video-id={video_id} video-title={video_title} video-img={video_img_src} video-votes={video_votes} video-views={video_views} onClick={this.props.onClick}>

                <img src={video_img_src} alt={video_img_alt}/>

                <div className="details">
                    <h4>{video_title}</h4>
                    {this.isVotes(video_votes)}
                </div>
            </div>
        )
    }
}

export default SearchResultItem;