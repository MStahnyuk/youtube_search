import React from 'react';

class History extends React.Component {

    isVotes = votes => {
        if(votes) return <div><span>{votes}: </span>{this.props.langParams.votes}</div>
    }

    renderItems = () => {
        const videos = this.props.history_videos;
        if(videos !== '') {
            return videos.map((video, index) => {
                    return (
                        //<div key={index+1}>{index+1 + '. ' + video.title}</div>
                        <div key={index+1} className={'item'} video-id={video.id} style={{marginTop: "10px", background: "green",  border: "1px solid #fff", width: "500px"}} onClick={this.props.onClickActive}>
                            <img src={video.img} alt='' style={{float: "left"}}/>
                            <h4>{video.title}</h4>
                            {this.isVotes(video.votes)}
                            <div video-id={video.id} onClick={this.props.onClickDelete}>{this.props.langParams.delete}</div>
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
                <div className="items">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

export default History;