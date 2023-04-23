function ExpenseDetails(props)
{ var title=props.title;
  var amount=props.amount
  var id=props.id;

  return <div>
    <div>{title}</div>
    <div>{amount}</div>
    <div>{id}</div>
  </div>

}
export default  ExpenseDetails