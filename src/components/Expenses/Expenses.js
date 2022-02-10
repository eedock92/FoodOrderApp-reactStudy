import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) =>{
  const [filteredYear,setFilteredYear] = useState('2022');


  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => 
    {
      return expense.date.getFullYear().toString() === filteredYear;
    }
    );
  


  
  return (
   <li>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} enChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>
    </Card>
   </li>

    

  )
}

export default Expenses;

