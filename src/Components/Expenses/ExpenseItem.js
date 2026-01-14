// import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem({id ,date , title , amount}) {
  
    return (
        <li key={id}>
        <div className='expense-item' >
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
        </div>
        </li>
    )
}
export default ExpenseItem