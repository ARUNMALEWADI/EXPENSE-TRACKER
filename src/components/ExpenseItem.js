import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';
function ExpenseItem(props)
{ return  <Card className='expense-item'>
    <div>Expense Items</div>
    <ExpenseDate date={props.date}></ExpenseDate>
    <ExpenseDetails title={props.title} amount={props.children} id={"id:"+props.id}/>
     </Card>



}
export default ExpenseItem