import React from 'react';

class Delete extends React.Component {
    render() {
        return (
            <div className={'delete'}  video-id={this.props.video_id} onClick={this.props.onClick}>{this.props.langParams.delete}</div>
        );
    }
}

export default Delete;