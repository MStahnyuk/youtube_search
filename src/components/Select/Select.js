import React from 'react';
import Option from './Option/Option';
import './Select.css';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            select_classes: 'select'
        }
    }

    onClickHandler = (elem) => {


        this.setState({
            isActive: !this.state.isActive,
            //select_classes: 'select active'
        })

        let select_classes = '';
        if(!this.state.isActive) {
            select_classes = 'select active'
            this.setState ({
                select_classes: select_classes
            })
        } else {
            select_classes = 'select'

        }
        this.setState({
            select_classes: select_classes
        })
    }

    render() {
        return (
            <div className={this.state.select_classes} value={this.props.value} onClick={this.onClickHandler}>
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