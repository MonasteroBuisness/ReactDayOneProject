import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compontents/Header';
import OrderIdInput from './compontents/OrderIdInput';
import TransactionList from './compontents/TransactionList';

function App() {
  return (
    <>
      <Header/>
      <OrderIdInput/>
      <TransactionList/>
    </>
  );
}

export default App;
