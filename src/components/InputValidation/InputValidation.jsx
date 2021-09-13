import React, {useEffect, useState, useRef} from "react";
import {InputValidationContainer} from './InputValidation.style'
import {useDebounce} from "../../utils/hooks";
import ValidationOutput from "./ValidationOutput";

const InputValidation = ({label, defaultVal, required, model, validationRules, fieldChanged}) => {

    const [inputVal, setInputVal] = useState("")
    const [showValidation, setShowValidation] = useState(false)
    const inputRef = useRef('Enter Value...')
    const debouncedInputVal = useDebounce(inputVal, 500);

    useEffect(() => {
        if (debouncedInputVal) {
            setShowValidation(true)
            fieldChanged(model , debouncedInputVal)
        }
    }, [debouncedInputVal]);

    const inputChange = () => {
        const inputVal = inputRef.current.value
        setInputVal(inputVal)
    }

    return (
        <InputValidationContainer>
            <label>{label}</label>
            <input ref={inputRef} onChange={inputChange}/>
            {showValidation && <ValidationOutput regexOptions={validationRules} term={debouncedInputVal}/>}
        </InputValidationContainer>
    )
}


export default InputValidation