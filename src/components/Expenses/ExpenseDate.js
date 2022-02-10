import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month : '2-digit'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();

    return (
    <div className='expense-date'>
        <div className='expense-date__year'>{year}년</div>
        <div className='expense-date__month'>{month}월</div>  
        <div className='expense-date__day'>{day}일</div>
    </div>
    );
}

export default ExpenseDate;