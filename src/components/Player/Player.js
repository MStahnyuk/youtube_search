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
            <div className={'player_wrap'}>
                <h2>{this.props.langParams.player_title}</h2>
                <div className="player">
                    {this.isIframe(video_id)}
                </div>
            </div>

        )
    }
}

export default Player;