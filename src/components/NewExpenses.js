import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css';


function NewExpenses(props)
{ 
const collect =(fetcheddata) =>{
  const data={
    ...fetcheddata
  }
  props.New_Expense(data);
}

  
    return   (
    <div className='new-expense'>
   <ExpenseForm send={collect}></ExpenseForm>
   
   
   
    </div>
    );
}
export default NewExpenses;