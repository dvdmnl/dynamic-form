import React, {useEffect, useState} from "react";
import InputValidation from "../components/InputValidation/InputValidation";
import CheckboxGroup from "../components/CheckboxGroup/CheckboxGroup";
import Textarea from "../components/Textarea/Textarea";
import Select from "../components/Select/Select";


const Form = ({fields}) => {
    const [values, setValues] = useState({});
    useEffect(() => {
        console.log('Form Values', values)
    }, [values])



    const fieldChanged = (fieldId, value) => {
        const newField = {
            [`${fieldId}`] : value
        }

        const newValues = {...values, ...newField}
        setValues(newValues)

    };

    const onSubmit = e => {
        e.preventDefault();
        // todo - send data somewhere
    };

    console.log('formData', fields)

    return (
        <form onSubmit={onSubmit}>
            {fields.map((field, index) => {
                switch (field.type) {
                    case "text-box":
                        return (
                            <InputValidation key={index} {...field} fieldChanged={fieldChanged}/>
                        );
                    case "textarea":
                        return (
                            <Textarea key={index} {...field} fieldChanged={fieldChanged}/>
                        );
                    case "dropdown":
                        return (
                            <Select key={index} {...field} fieldChanged={fieldChanged}/>
                        );
                    case "multiple-checkboxes":
                        return (
                            <CheckboxGroup key={index} {...field} fieldChanged={fieldChanged}/>
                        );

                }
            })}
        </form>
    );
};

export default Form;