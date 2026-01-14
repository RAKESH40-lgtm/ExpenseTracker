import './ExpensesItem.css'
import ExpensesFilter from './ExpenseFilter'
// import Card from '../UI/Card'
import { useState } from 'react'
import ExpenseList from './ExpensesList'
import ExpenseChart from './ExpenseChart'
function ExpenseDisplay({ item }) {

    const [filteredDate, setFilteredDate] = useState(new Date().getFullYear().toString())
    const filterDateHandler = (receivedDate) => {
        setFilteredDate(receivedDate)
    }
    const filteredExpense = item?.filter((expense) => {
        const date = expense.date instanceof Date ? expense.date : new Date(expense.date)
        return date.getFullYear().toString() === filteredDate
    })
    console.log(filteredExpense)
    return (
        <div>
            <div className="expenses">
                {/* <ExpensesFilter onGettingFilter={filterDateHandler} expenseData={item} /> */}
                <ExpenseChart expenses={item} />
                <ExpenseList expenseItem={item} />
            </div>
        </div>
    )
}
export default ExpenseDisplay