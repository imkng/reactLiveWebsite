import React,{useState,useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
export const AddTransaction = () => {
    const [text ,setText] = useState('');
    const [amount ,setAmount] = useState(0);

    const {addTransaction} =  useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text ,
            amount : + amount
        }

        addTransaction(newTransaction)
    }
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-control">
                    <label htmlFor = "text">Text</label>
                    <input type = "text" value = {text} onChange = {(event)=>{
                    setText(event.target.value)
                    }} placeholder = "Enter text..." />
                </div>
                <div className = "form-control">
                    <label htmlFor = "amount"> Amount <br/>
                    (negative - expense, positive - expense)
                    </label>
                    <input type = "text" value = {amount} onChange = {(event)=>{
                    setAmount(event.target.value)
                    }} placeholder = "Enter amount.."/>
                </div>
                <button className = "btn">Add Transaction</button>
            </form>
        </div>
    )
}
