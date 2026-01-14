import { useState } from "react";

import { expenses } from "./Components/utils/metadata";
import ExpenseDisplay from "./Components/Expenses/ExpenseDisplay";
import CollectExpensesData from "./Components/NewExpenses/CollectExpensesData";


function App() {
  const [array,setArray]=useState(expenses)
  const addingExpenseHandler=(expense)=>{
    console.log("in App")
     setArray((prevState)=>{
       return[expense,...prevState]
     })
  }
  return (
    <div>
      <CollectExpensesData onAddingExpense={addingExpenseHandler}/>
      
      <ExpenseDisplay item={array}/>
    </div>
  )
}
export default App