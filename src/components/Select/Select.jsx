import React, {Fragment, useEffect, useState} from "react";
import {Main, DropDownHeader, DropDownListContainer, DropDownList, DropDownContainer, ListItem} from "./Select.style";

const Select = ({
                    label, defaultVal, required, model,
                    isOpen = false,
                    options = [],
                    placeholder = "Place Holder",
                    fieldChanged
                }) => {

    const [toggleOpen, setToggleOpen] = useState(isOpen)
    const [selectedOption, setSelectedOption] = React.useState({label:placeholder, value: null});
    const toggling = () => setToggleOpen(!toggleOpen);
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setToggleOpen(false);
    };

    useEffect(() => {
        fieldChanged(model, selectedOption);
    }, [selectedOption]);


    return (
        <Fragment>
            <Main>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>{selectedOption.label}</DropDownHeader>
                    {toggleOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map((option, index) => (
                                    <ListItem onClick={onOptionClicked(option)} key={index}>
                                        {option.label}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
            </Main>
        </Fragment>
    )

}

export default Select