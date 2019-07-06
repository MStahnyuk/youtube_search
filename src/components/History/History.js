import React from 'react';
import Delete from './Delete/Delete';
import './History.css';

class History extends React.Component {

    isViews = views => {
        if(views) return <div>{this.props.langParams.views + ': '}<span>{views}</span></div>
    }

    renderItems = () => {
        const videos = this.props.history_videos;
        if(videos !== '') {
            return videos.map((video, index) => {
                    return (
                       <div key={index+1} className="item">
                            <div className={'history_item'} video-id={video.id} onClick={this.props.onClickActive}>
                                <div className="img_wrap">
                                    <img src={video.img} alt=''/>
                                </div>
                                <div className="details">
                                    <h4>{video.title}</h4>
                                    {this.isViews(video.views)}
                                </div>
                             </div>
                            <Delete video_id={video.id} onClick={this.props.onClickDelete} langParams={this.props.langParams} />
                        </div>
                    );
                }
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="sidebar">
                <h2>{this.props.langParams.history_title}</h2>
                <div className="items" >
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default History;