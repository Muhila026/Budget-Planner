import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FooterMenu from './components/menu';
import Overview from './components/overview';
import AddForm from './components/addform';
import ExpensesList from './components/expenseslist';
import Settings from './components/setting';
import { homeStyles } from './style/homestyle';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('10000');
  const [showBudgetInput, setShowBudgetInput] = useState(false);
  const [showFormSection, setShowFormSection] = useState(true);
  const [showExpensesSection, setShowExpensesSection] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const addExpense = () => {
    if (!description.trim() || !amount.trim()) {
      Alert.alert('Error', 'Please enter both description and amount');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      description: description.trim(),
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };

    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = parseFloat(budget) - totalExpenses;

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    
    // Auto-expand/collapse sections based on tab
    if (tabId === 'add') {
      setShowFormSection(true);
      setShowExpensesSection(false);
    } else if (tabId === 'expenses') {
      setShowFormSection(false);
      setShowExpensesSection(true);
    } else if (tabId === 'overview') {
      setShowFormSection(true);
      setShowExpensesSection(true);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Overview 
            budget={budget}
            setBudget={setBudget}
            showBudgetInput={showBudgetInput}
            setShowBudgetInput={setShowBudgetInput}
            totalExpenses={totalExpenses}
            remainingBudget={remainingBudget}
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            addExpense={addExpense}
            expenses={expenses}
            deleteExpense={deleteExpense}
            showFormSection={showFormSection}
            setShowFormSection={setShowFormSection}
            showExpensesSection={showExpensesSection}
            setShowExpensesSection={setShowExpensesSection}
          />
        );
      
      case 'add':
        return (
          <AddForm 
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            addExpense={addExpense}
            showFormSection={showFormSection}
            setShowFormSection={setShowFormSection}
          />
        );
      
      case 'expenses':
        return (
          <ExpensesList 
            expenses={expenses}
            deleteExpense={deleteExpense}
            showExpensesSection={showExpensesSection}
            setShowExpensesSection={setShowExpensesSection}
          />
        );
      
      case 'settings':
        return <Settings setExpenses={setExpenses} budget={budget} setBudget={setBudget} />;
      
      default:
        return null;
    }
  };

  return (
    <View style={homeStyles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.headerTitle}>Budget Planner</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={homeStyles.mainContent}>
        {renderContent()}
      </ScrollView>

      {/* Footer Menu */}
      <FooterMenu activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
}
