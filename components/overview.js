import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { overviewStyles } from '../style/overviewstyle';
import AddForm from './addform';
import ExpensesList from './expenseslist';

const Overview = ({ 
  budget, 
  setBudget, 
  showBudgetInput, 
  setShowBudgetInput, 
  totalExpenses, 
  remainingBudget,
  description,
  setDescription,
  amount,
  setAmount,
  addExpense,
  expenses,
  deleteExpense,
  showFormSection,
  setShowFormSection,
  showExpensesSection,
  setShowExpensesSection
}) => {
  return (
    <>
      {/* Budget Overview */}
      <View style={overviewStyles.budgetSection}>
        <Text style={overviewStyles.sectionTitle}>Budget Overview</Text>
        
        {/* Budget Input Section */}
        <View style={overviewStyles.budgetInputSection}>
          {showBudgetInput ? (
            <View style={overviewStyles.budgetInputContainer}>
              <TextInput
                style={overviewStyles.budgetInput}
                placeholder="Enter budget amount"
                value={budget}
                onChangeText={setBudget}
                keyboardType="numeric"
              />
              <TouchableOpacity 
                style={overviewStyles.saveBudgetButton}
                onPress={() => setShowBudgetInput(false)}
              >
                <Text style={overviewStyles.saveBudgetButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={overviewStyles.budgetRow}>
              <Text style={overviewStyles.budgetLabel}>Total Budget:</Text>
              <View style={overviewStyles.budgetDisplayContainer}>
                <Text style={overviewStyles.budgetAmount}>LKR {budget}</Text>
                <TouchableOpacity 
                  style={overviewStyles.editBudgetButton}
                  onPress={() => setShowBudgetInput(true)}
                >
                  <Text style={overviewStyles.editBudgetButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        
        <View style={overviewStyles.budgetRow}>
          <Text style={overviewStyles.budgetLabel}>Total Expenses:</Text>
          <Text style={overviewStyles.expenseAmount}>LKR {totalExpenses.toFixed(2)}</Text>
        </View>
        <View style={overviewStyles.budgetRow}>
          <Text style={overviewStyles.budgetLabel}>Remaining:</Text>
          <Text style={[overviewStyles.remainingAmount, { color: remainingBudget < 0 ? '#ff4444' : '#4CAF50' }]}>
            LKR {remainingBudget.toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Add Expense Form */}
      <AddForm 
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        addExpense={addExpense}
        showFormSection={showFormSection}
        setShowFormSection={setShowFormSection}
      />

      {/* Expenses List */}
      <ExpensesList 
        expenses={expenses}
        deleteExpense={deleteExpense}
        showExpensesSection={showExpensesSection}
        setShowExpensesSection={setShowExpensesSection}
      />
    </>
  );
};

export default Overview;
