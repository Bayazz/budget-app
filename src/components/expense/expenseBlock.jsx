import React, { Component } from "react";

import Pagination from "./pagination";
import SubmitForm from "./submitForm";
import Table from "./table";

class ExpenseBlock extends Component {
  state = {
    pageSize: 4,
    currentPage: 1
  };

  onPageChange = page => {
    this.setState({ currentPage: page });
  };
  handlePaginate = expenseList => {
    const { pageSize } = this.state;

    let paginatedList = [];
    let pageExpenses = [];
    let countExpenses = 1;

    for (let i = 0; i < expenseList.length; i++) {
      pageExpenses.push(expenseList[i]);

      if (
        countExpenses % pageSize === 0 ||
        countExpenses === expenseList.length
      ) {
        paginatedList.push(pageExpenses);
        pageExpenses = [];
      }
      countExpenses++;
    }

    return paginatedList;
  };

  render() {
    const {
      expenseList,
      handleEdit,
      handleDelete,
      submitExpenseList
    } = this.props;
    const { pageSize, currentPage } = this.state;

    const paginateExpenseList = this.handlePaginate(expenseList);
    const showExpenses = paginateExpenseList[currentPage - 1];

    return (
      <React.Fragment>
        <Table
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          expenseList={showExpenses}
        />

        <Pagination
          pageSize={pageSize}
          itemsCount={expenseList.length}
          currentPage={currentPage}
          onPageChange={this.onPageChange}
        />

        <SubmitForm
          submitExpenseList={submitExpenseList}
          expenseList={expenseList}
        />
      </React.Fragment>
    );
  }
}

export default ExpenseBlock;
