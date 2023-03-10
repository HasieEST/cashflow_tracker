import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.expenseData.title)

    // const clickHandler = () => {
    //     setTitle('Updated')
    //     console.log(title)
    // }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.amount}</div>
            </div>
            {/*<button onClick={clickHandler}>Change Title</button>*/}
        </Card>
    )
}

export default ExpenseItem