import React from 'react';

const Select = props => {
    return (
        <div>
            <select value={props.value} onChange={props.onChange}>
                {props.options.map((option, index) => {
                    return (
                        <option value={option} key={option + index}>
                            {option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;