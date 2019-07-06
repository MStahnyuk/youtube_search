import React from 'react';
import Option from './Option/Option';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    onClickHandler = (elem) => {
        if(!this.state.isActive) {
            elem.currentTarget.className = 'select active';
        } else {
            elem.currentTarget.className = 'select';
        }

        this.state = {
            isActive: !this.state.isActive
        }
    }

    getClass = () => {
        if (this.state.isActive) {
            return 'active';
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className={'select'} value={this.props.value} onClick={this.onClickHandler}>
                <div className={'option'} data-value={this.props.value}>{this.props.value}</div>
                <div className="options">
                    {this.props.options.map((option, index) => {
                        return (
                            <Option option={option} key={option + index} onClick={this.props.onChange}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Select;