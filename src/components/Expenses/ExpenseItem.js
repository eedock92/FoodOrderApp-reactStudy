// import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) => {

//    const [title, setTitle] = useState(props.title);
   
  
//    const ClickHandler = () => {
//        setTitle('변경!!');
//        console.log(title);
      
//    }
    
    return (
     
        <Card className="expense-item">
          <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
            {/* <button onClick= {ClickHandler} >클릭</button> */}
        </Card>
       
    );
}

export default ExpenseItem;