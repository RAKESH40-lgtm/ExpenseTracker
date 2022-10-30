import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredtitle, setTitle] = useState('')
    const [enteredamount, setAmount] = useState('')
    const [entereddate, setDate] = useState('')
    // const[userData,setUserData]=useState({title:'',amount:'',date:''})
    const titleHandler = (e) => {
        setTitle(e.target.value)
        // setUserData({...userData,
        //     title:e.target.value
        // })
        // setUserData((prevData)=>{
        //     return {...prevData,title:e.target.value}
        // })
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
        // setUserData({...userData,
        //     amount:e.target.value
        // })
        // setUserData((prevData)=>{
        //     return {...prevData,amount:e.target.value}
        // })
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
        // setUserData({...userData,
        //     date:e.target.value
        // })
        //when dealing with previous state:this is used when we need create a object with a state as sing state
        // setUserData((prevData)=>{
        //     return {...prevData,date:e.target.value}
        // })
    }
    const submitHandler=(e)=>{
           e.preventDefault()
           
          const expenses={
            title:enteredtitle,
            amount:+enteredamount,
            date:new Date(entereddate)
        }
        
        props.onSaveExpense(expenses)//by this pointer function passing to parent we can pass data in Newexpense.js and by getting with on props 
        setTitle('')
        setAmount('')
        setDate('')
   }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleHandler} value={enteredtitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={enteredamount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-1" max="2022-12-31" onChange={dateHandler} value={entereddate} />
                </div>
            </div>
            <div className="ne_expense_actions">
                <button type="button" onClick={props.onClose}  >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm