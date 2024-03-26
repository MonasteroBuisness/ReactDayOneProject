import Transaction from './Transaction'

const TransactionList = () : JSX.Element => {

    return(
        <>
        <ul>
            <Transaction id={1} date={2} country="USA" currency="USD" amount={10}></Transaction>
            <Transaction id={1} date={2} country="USA" currency="USD" amount={10}></Transaction>
            <Transaction id={1} date={2} country="USA" currency="USD" amount={10}></Transaction>
            <Transaction id={1} date={2} country="USA" currency="USD" amount={10}></Transaction>
        </ul>
        </>
    )
}

export default TransactionList;