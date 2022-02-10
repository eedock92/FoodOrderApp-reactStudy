
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id : "e1",
    title : "커피",
    amount : "2500",
    date : new Date(2022, 0, 5)
  },
  {
    id : "e2",
    title : "쭈꾸미",
    amount : "11000",
    date : new Date(2022, 0, 6)
  },
  {
    id : "e3",
    title : "돈까스",
    amount : "9000",
    date : new Date(2022, 0, 7)
  },
  {
    id : "e4",
    title : "만두",
    amount : "3000",
    date : new Date(2021, 11, 7)
  },

];



const App = () => {
 
  // const para = document.createElement('p');
  // para.textContent = '이것도 보인다';
  // document.getElementById('root').append(para);

  
  const [expenses ,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

  } 



  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );
 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
