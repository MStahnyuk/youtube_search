import React from 'react';


class Player extends React.Component {
    isIframe = video_id => {
        if(video_id !== '') {
            return (
                <iframe title={video_id} id="player" type="text/html" width="640" height="360"
                        src={"http://www.youtube.com/embed/" + video_id }
                        frameBorder="0"></iframe>
            )
        }
    }

    render() {
        const video_id = this.props.video_id;
        return (
            <div className="player" style={{border: "1px solid black", margin: "20px"}}>
                {this.isIframe(video_id)}
            </div>
        )
    }
}

export default Player;