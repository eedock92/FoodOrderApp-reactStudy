import {useState} from 'react'

const useCheckOut = (validateValue) => {
    const [formInputsValidity, setFormInputsValidity] = useState('')
    const [touchedValue, setTouchedValue] = useState(false)
    

    const Isvalid = validateValue(formInputsValidity)
    const errorCheck = !Isvalid && touchedValue

    const InputValueHandler = event => {
        setFormInputsValidity(event.target.value)
    }

    const InputChangeHandler = () => {
        setTouchedValue(true)
    }

    return {
        value : formInputsValidity,
        Isvalid,
        errorCheck,
        InputValueHandler,
        InputChangeHandler
 

    }
}

export default useCheckOut