import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { expensesListStyles } from '../style/expensesliststyle';

const ExpensesList = ({ 
  expenses, 
  deleteExpense, 
  showExpensesSection, 
  setShowExpensesSection 
}) => {
  return (
    <View style={expensesListStyles.expensesSection}>
      <TouchableOpacity 
        style={expensesListStyles.sectionHeader}
        onPress={() => setShowExpensesSection(!showExpensesSection)}
      >
        <Text style={expensesListStyles.sectionTitle}>Expenses ({expenses.length})</Text>
        <Text style={expensesListStyles.toggleButton}>
          {showExpensesSection ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {showExpensesSection && (
        <ScrollView style={expensesListStyles.expensesList}>
          {expenses.length === 0 ? (
            <Text style={expensesListStyles.noExpenses}>No expenses yet</Text>
          ) : (
            expenses.map((expense) => (
              <View key={expense.id} style={expensesListStyles.expenseItem}>
                <View style={expensesListStyles.expenseInfo}>
                  <Text style={expensesListStyles.expenseDescription}>{expense.description}</Text>
                  <Text style={expensesListStyles.expenseDate}>{expense.date}</Text>
                </View>
                <View style={expensesListStyles.expenseActions}>
                  <Text style={expensesListStyles.expenseAmount}>LKR {expense.amount.toFixed(2)}</Text>
                  <TouchableOpacity
                    style={expensesListStyles.deleteButton}
                    onPress={() => deleteExpense(expense.id)}
                  >
                    <Text style={expensesListStyles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ExpensesList;
