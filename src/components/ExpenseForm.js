import './ExpenseForm.css'

function ExpenseForm()
{   
    let a=[];
    let i=-1;
    const place=(event)=>{
        event.preventDefault();
    console.log(event.target.value)
    console.log(event.target)
    i++;
    a[i]=event.target.value;
    
}
function sub(e)
{  e.preventDefault()
    console.log(a);
}


    return <div>
        <form  className='exp'>
    <label>title: </label><input type="text"  onChange={place} ></input>
    <label> date: </label><input type="date" onChange={place}></input>
    <label> expense value: </label>
    <input type="number" onChange={place} ></input>
    <button onClick={sub}>Add expense </button>
    <br/>
   </form>
    </div>

}
export default ExpenseForm;