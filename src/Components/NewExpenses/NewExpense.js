import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses=(props)=>{
  const [isShow,setShow]=useState(false)
  const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
          ...enteredExpenseData,id:Math.floor(Math.random()*1)
        }
        // console.log(expenseData)
        props.onAddingExpense(expenseData)
        setShow(false)
 }
 const startEditingHandler=()=>{
   setShow(true)
   }
  
 const stopEditingHandler=()=>{
      setShow(false)
 }
  return(
    <div className="new-expense">
      {/* here when onclicking button the button shouldn't show so we use !show here instead of removing it */}
      {!isShow && <button onClick={startEditingHandler}>Add Expense</button>}
       {isShow &&<ExpenseForm onSaveExpense={saveExpenseHandler} onClose={stopEditingHandler}/>}
     
    </div>
  )
}
export default NewExpenses