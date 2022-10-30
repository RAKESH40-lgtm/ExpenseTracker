import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpenseList=(props)=>{
    
    if(props.expenseItem.length===0){
       return <h2 className='expenses-list__fallback'>No expense found</h2>
    }
   return(
    <ul className='expense-list'>
       {props.expenseItem.map((expense) => {
            return (
                <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                date={expense.date} 
                amount={expense.amount} />
            )
        })}
    </ul>
   )
}
export default ExpenseList