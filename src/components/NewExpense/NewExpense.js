import React, {useState} from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const saveEventHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log("2. 새로운 expenseData 와,"  + expenseData.id + "을 props를 이용해 onAddExpense에 expenseData app.js에 토스")
        props.onAddExpense(expenseData);
        setEditing(false)
    }

    const startEditingHandler = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick = {startEditingHandler}>추가하기</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveEventHandler} onCancle={stopEditingHandler}/>}  
        </div>
    )
}

export default NewExpense
