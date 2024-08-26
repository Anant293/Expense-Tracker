import React from 'react'
const isIncome=Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{textAlign:'center',}}>
        Add {isIncome?'Income ' :'Expense '}
        for {isIncome?'$1000 ' :'$250 '}
        in Category {isIncome?'Bussiness ' :'Travel '}
        for {isIncome?'Monday ' :'Sunday '}
    </div>
  )
}

export default InfoCard