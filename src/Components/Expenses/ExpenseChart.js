import ShowChart from "../Chart/ShowChart";
import { chartDataPoints } from "../utils/metadata";

const ExpenseChart=(props)=>{
   
    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth()
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
     return(
        <ShowChart dataPoints={chartDataPoints}/>
     )
}
export default ExpenseChart