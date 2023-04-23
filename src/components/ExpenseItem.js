import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props)
{ return  <div className='expense-item'>
    <div>Expense Items</div>
    <ExpenseDate date={props.date}></ExpenseDate>
    <ExpenseDetails title={props.title} amount={props.children} id={"id:"+props.id}/>
     </div>



}
export default ExpenseItem