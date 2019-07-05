import React from 'react';

class SearchInput extends React.Component {
    render() {
        return (
            <div className="search_input">
                <input placeholder={this.props.placeholder} onChange={this.props.onChange} type="text"/>
            </div>
        );
    }
}

export default SearchInput;