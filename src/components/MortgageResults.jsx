import React from "react";

import Empty from "../svg/Empty";

export default function MortgageResults ( { submittedData }  ) {




    const mortgageResultsDisplay = () => {

        

        if(!submittedData){
            return(
                <div id="mortgage-results">
                    <Empty/>
                    <h1 className="text-preset-2">Results shown here</h1>
                    <p className="text-preset-4">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
                </div>
            )
        }
        else{

            const { term, interest, amount, mortgageType } = submittedData

            const numAmount = Number(amount)
            const monthlyInterest = interest/(100*12)
            const numMonthlyPayments = term * 12
    
            const mortgageTMonthlyRepayment = mortgageType==="repayment"?
                (numAmount * monthlyInterest * ((1 + monthlyInterest)**numMonthlyPayments) / (((1+monthlyInterest)**numMonthlyPayments) - 1))
                :(numAmount*monthlyInterest)
            const mortgageMonthlyString = Number(mortgageTMonthlyRepayment.toFixed(2)).toLocaleString()
    
            console.log(typeof(numAmount))

            const mortgageTotal = mortgageType==="repayment"?
                Number((mortgageTMonthlyRepayment*12*term).toFixed(2)).toLocaleString()
                :Number((mortgageTMonthlyRepayment*12*term + numAmount).toFixed(2)).toLocaleString()
        


            return(
                <div id="mortgage-results" className="show-results">
                    <h1 className="text-preset-2">Your results</h1>
                    <p className="text-preset-4">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                    <div className="repayment-result">
                        <h2 className="text-preset-4">Your monthly repayments</h2>
                        <p className="text-preset-1">£ {mortgageMonthlyString}</p>
                        <hr/>
                        <p className="text-preset-4">Total you'll repay over the term</p>
                        <p className="text-preset-2">£ {mortgageTotal}</p>
                    </div>
                </div>
            )
        }
    }


    return mortgageResultsDisplay()
}