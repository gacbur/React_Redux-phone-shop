import { useState, useEffect } from 'react'


export const useForm = (opinionInitialValues, Validation) => {

    const [values, setValues] = useState(opinionInitialValues)
    const [errors, setErrors] = useState({})

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formCorrect, setFormCorrect] = useState(false)

    useEffect(() => {
        if (formSubmitted) {
            const noErrors = Object.keys(errors).length === 0
            if (noErrors) {
                setFormCorrect(true)
                setFormSubmitted(false)
            }
            else {
                setFormCorrect(false)
                setFormSubmitted(false)
            }
        }
    }, [formSubmitted, errors])

    const handleChangeValues = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const validationResult = Validation(values)
        setErrors(validationResult)

        setFormSubmitted(true)
    }

    return {
        handleChangeValues,
        values,
        handleSubmitForm,
        formCorrect,
        errors,
    }
}

