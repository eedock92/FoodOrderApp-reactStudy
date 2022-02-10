import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // }); 
    
    

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value)
    //    setUserInput({
    //        ...userInput,
    //        enteredTitle: event.target.value,
    //    });

       //react가 가장 최신 상태를 유지 하면서 변경된 부분 업데이트
    //    setUserInput((prevState) => {
    //        return { ...prevState, enteredTitle : event.target.value};
    //    })
    
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
  
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
       
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        console.log('1.경비추가 -> props를 사용하여 onSaveExpenseData에 expenseDate 담아 NewExpense로 토스  ')
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const cancleEvent = (event) =>{
        event.preventDefault();
        console.log("cancle")
        props.onCancle();
        
    }
  

    return (
        <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>제목</label>
            <input type="text" 
                   value={enteredTitle}
                   onChange={titleChangeHandler}
            />
        </div>
   
   
        <div className='new-expense__control'>
            <label>비용</label>
            <input type="number" min="1" step="1" 
                   value={enteredAmount}
                   onChange={amountChangeHandler}/>
        </div>
   
   
        <div className='new-expense__control'>
            <label>날짜</label>
            <input type="date" min="2021-01-01" step="2024-12-31" 
                   value={enteredDate}
                   onChange={dateChangeHandler}/>
        </div>
        </div>

        <div className='new-expense__actions'>
            <button type="submit">경비 추가</button>
            <button type="button" onClick={cancleEvent}>취소</button>
        </div>
</form>
            
    )
}

export default ExpenseForm
