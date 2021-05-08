// import React ,{useContext}from 'react'
// import { GlobalContext} from '../context/GlobalState';


// export const Balance = () => {
//     const {transaction} = useContext(GlobalContext);
//     const amounts = transaction.map(transaction =>  transaction.amount);

//     const total =  amounts.reduce((acc,item)=>(acc += item) ,0 ).toFixed(2);
//     return (
//         <div>
//             <h4>Your Balance</h4>
//             <h1 >${total}</h1>

//         </div>
        
//     )
// }

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}