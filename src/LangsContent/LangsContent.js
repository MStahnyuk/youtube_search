import React from 'react';
class LangsContent  extends React.Component {
    render() {
        return (
            <div className={'langsContent'}>
                <h1>Langs Page</h1>
                <button data-value="eng" onClick={this.props.localStorageChange}>END</button>
                <button data-value="ru" onClick={this.props.localStorageChange}>RU</button>
            </div>
        );
    }
}

export default LangsContent;