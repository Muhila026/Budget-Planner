import { StyleSheet } from 'react-native';

export const overviewStyles = StyleSheet.create({
  budgetSection: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  budgetLabel: {
    fontSize: 16,
    color: '#666',
  },
  budgetAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  budgetInputSection: {
    marginBottom: 10,
  },
  budgetInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  budgetInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  saveBudgetButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  saveBudgetButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  budgetDisplayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editBudgetButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginLeft: 10,
  },
  editBudgetButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff9800',
  },
  remainingAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
