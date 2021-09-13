import React, {useEffect, useState} from 'react'


const CheckboxGroup = ({
                           label, defaultVal, required, model,fieldChanged,
                           options
                       }) => {
    const [checkedState, setCheckedState] = useState(
        new Array(options.length).fill(false)
    );

    const handleOnChange = (position, option) => {
        const updatedCheckedState = checkedState.map((item, index) => {
                return index === position ? !item : item
            }
        );
        setCheckedState(updatedCheckedState);
    };

    useEffect(() => {
        const checkedArr = [];
        checkedState.map((item, index) => {
            item && checkedArr.push(options[index].value)
        })
        console.log(checkedArr);
        fieldChanged(model, checkedArr)
    }, [checkedState]);


    return (
        <ul>{options.map((option, index) => {
            return (
                <li key={index}>
                    <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={option.label}
                        value={option.label}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index, option)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{option.label}</label>
                </li>);
        })}</ul>
    )

}

export default CheckboxGroup