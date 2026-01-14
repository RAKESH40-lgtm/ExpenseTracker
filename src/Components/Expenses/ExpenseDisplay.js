import './ExpensesItem.css'
import ExpensesFilter from './ExpenseFilter'
// import Card from '../UI/Card'
import { useState } from 'react'
import ExpenseList from './ExpensesList'
import ExpenseChart from './ExpenseChart'
function ExpenseDisplay(props) {
    const [filteredDate, setFilteredDate] = useState('')
    const filterDateHandler = (recieveddate) => {
        setFilteredDate(recieveddate)
    }
    const filteredExpense = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredDate
    })
    // let checkedExpense=<p>No item found</p>
    // if(filteredExpense.length>0){
    //    checkedExpense= filteredExpense.map((expense) => {
    //         return (
    //             <ExpenseItem 
    //             key={expense.id}
    //             title={expense.title} 
    //             date={expense.date} 
    //             amount={expense.amount} />
    //         )
    //     })
    // }//to make lean approach
    return (
        <div>
            <div className="expenses">
                <ExpensesFilter onGettingFilter={filterDateHandler}
                />
                {/* {filteredExpense.length===0?(<p>No item found</p>):
                (filteredExpense.map((expense) => {
                        return (
                            <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            date={expense.date} 
                            amount={expense.amount} />
                        )
                    }))
                } */}
                {/* {filteredExpense.length === 0 && (<p>No item found</p>)}
                {filteredExpense.length > 0 && filteredExpense.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            date={expense.date}
                            amount={expense.amount} />
                    )
                })} */}
               {/* {checkedExpense} */}
               <ExpenseChart expenses={filteredExpense}/>
               <ExpenseList expenseItem={filteredExpense}/>
            </div>
        </div>
    )
}
export default ExpenseDisplay