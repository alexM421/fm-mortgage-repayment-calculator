import React from "react";

import Calculator from "../svg/Calculator"
export default function MortgageCalculator ( { setSubmittedData } ) {

    const [formData, setFormData] = React.useState({
        amount: "",
        term: "",
        interest: "",
        mortgageType: "",
      })

    const [errors, setErrors] = React.useState(
        {
            amountErr: false,
            termErr: false,
            interestErr: false,
            mortgageTypeErr: false,
        }
    )


    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }
    

    const handleSubmit = (e) =>{

        const newErrors = {}

        e.preventDefault()
        const isOk = Object.values(formData).every( value => {
            return value
        })
        if(isOk){
            setErrors(        {
                amountErr: false,
                termErr: false,
                interestErr: false,
                mortgageTypeErr: false,
            })
            setSubmittedData(formData)
        }
        if(!isOk){
            for(let data in formData){
                if(!formData[data]){
                    newErrors[`${data}Err`] = true
                }
            }
            setErrors(prevErrors => ({ ...prevErrors, ...newErrors}))
        }
       
  
    }


    return(
        <form id="mortgage-calculator">
            <div className="title-clear">
                <h1 className="text-preset-2">Mortgage Calculator</h1>
                <button className="text-preset-4">Clear All</button>
            </div>
            <div className="fieldset-inputs">
                <fieldset className="text-preset-3">
                    <legend className="text-preset-4">Mortgage Amount</legend>
                    <div className={`input ${errors.amountErr? "error":""}`}>
                        <label>£</label>
                        <input 
                        type="number" 
                        className="text-preset-3"
                        name="amount"
                        onChange={handleChange}
                        value={formData.amount}
                        />
                    </div>
                    {errors.amountErr? <p className="errorElement text-preset-5">This field is required</p>:null}
                </fieldset>
                <div className="mortgage-term-interest text-preset-3">
                    <fieldset>
                        <legend className="text-preset-4">Mortgage Term</legend>
                        <div className={`input ${errors.termErr? "error":""}`}>
                            <input 
                            type="number" 
                            className="text-preset-3"
                            name="term"
                            onChange={handleChange}
                            value={formData.term}
                            />
                            <label>years</label>
                        </div>
                        {errors.termErr? <p className="errorElement text-preset-5">This field is required</p>:null}
                    </fieldset>
                    <fieldset>
                        <legend className="text-preset-4">Interest Rate</legend>
                        <div className={`input ${errors.interestErr? "error":""}`}>
                            <input 
                            type="number" 
                            className="text-preset-3"
                            name="interest"
                            onChange={handleChange}
                            value={formData.interest}
                            />
                            <label>%</label>
                        </div>
                        {errors.interestErr? <p className="errorElement text-preset-5">This field is required</p>:null}
                    </fieldset>
                </div>
                <fieldset className="text-preset-3">
                    <legend className="text-preset-4">Mortgage Type</legend>
                    <label className="radio-label">
                        <input 
                        type="radio" 
                        name="mortgageType"
                        value="repayment"
                        checked={formData.mortgageType === "repayment"}
                        onChange={handleChange}
                        />
                        <span className="custom-radio-btn"></span>
                        <p>Repayment</p>
                    </label>
                    <label className="radio-label">
                        <input 
                        type="radio" 
                        name="mortgageType"
                        value="interestOnly"
                        checked={formData.mortgageType === "interestOnly"}
                        onChange={handleChange}
                        />
                        <span className="custom-radio-btn"></span>
                        <p>Interest Only</p>
                    </label>
                    {errors.mortgageTypeErr? <p className="errorElement text-preset-5">This field is required</p>:null}
                </fieldset>
            </div>
            <button 
            className="calc-btn"
            name="validate"
            value="true"
            onClick={handleSubmit}>
                <Calculator/>
                <p className="text-preset-3">Calculate Repayments</p>
            </button>
        </form>
    )
}