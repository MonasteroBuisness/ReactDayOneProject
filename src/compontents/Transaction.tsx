type TransactionProps = {id : number, date : number, country : string, currency : string, amount : number}

// const transactionList: Array<Transaction> = []

// const addTransaction = (transaction : Transaction) => {
//     transactionList.push(transaction);
// }

const Transaction = (props : TransactionProps) : JSX.Element => {
    return(<li>{props.id} | {props.date} | {props.country} | {props.currency} | {props.amount}</li>)
}

export default Transaction;