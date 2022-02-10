import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'


const ExpensesList = (props) => {

    if(props.items.length === 0){
        <h2 className='expenses-list__fallback'>리스트가 비어있습니다.</h2>
    }


    return <ul className='expenses-list'>
        {
        props.items.map(item =>
            <div key={item.id}>
                <ExpenseItem title = {item.title} amount={item.amount} date={item.date}/>
            </div>
        )
        }
    </ul>

     
      


}

export default ExpensesList
