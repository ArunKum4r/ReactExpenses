import React, { useState } from "react"

import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from "../NewExpenses/ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  let filteredByYear = []
  if (filteredYear === 'All') {
    filteredByYear = props.expenses
  } else {
    filteredByYear = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredByYear} />
        <ExpensesList expenses={filteredByYear} />
      </Card>
    </div>)
}

export default Expenses;