import React from 'react';

class Option extends React.Component {
    render() {
        return (
            <div className={'option'} data-value={this.props.option} onClick={this.props.onClick}>
                {this.props.option}
            </div>
        )
    }
}

export default Option;