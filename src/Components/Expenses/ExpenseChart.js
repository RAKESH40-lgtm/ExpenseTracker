import ShowChart from "../Chart/ShowChart";
import { chartDataPoints } from "../utils/metadata";

const ExpenseChart=({expenses})=>{
   
    for(const expense of expenses){
        const expenseMonth=expense.date.getMonth()
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
     return(
        <ShowChart dataPoints={chartDataPoints}/>
     )
}
export default ExpenseChart