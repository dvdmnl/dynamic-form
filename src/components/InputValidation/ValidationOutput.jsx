import React from 'react'



const ValidationOutput = ({
    term = '',
                              regexOptions
                          }) => {
    const checkIfValid = (pattern) => {
        const regex = new RegExp(pattern);
        console.log(regex.test(term));
        return regex.test(term)
    }
    return(
        <div>{
            regexOptions.map((regexOption, index) => {
                const isValid = checkIfValid(regexOption.pattern)
                return <div key={index}>{`${regexOption.label} -- ${isValid}`}</div>
            })
        }</div>
    )


}

export default ValidationOutput