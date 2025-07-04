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
import { homeStyles } from './style/homestyle';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('1000');
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
          <>
            {/* Budget Overview */}
            <Overview 
              budget={budget}
              setBudget={setBudget}
              showBudgetInput={showBudgetInput}
              setShowBudgetInput={setShowBudgetInput}
              totalExpenses={totalExpenses}
              remainingBudget={remainingBudget}
            />

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
      
      case 'add':
        return (
          <AddForm 
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            addExpense={addExpense}
            showFormSection={true}
            setShowFormSection={() => {}}
          />
        );
      
      case 'expenses':
        return (
          <ExpensesList 
            expenses={expenses}
            deleteExpense={deleteExpense}
            showExpensesSection={true}
            setShowExpensesSection={() => {}}
          />
        );
      
      case 'settings':
        return (
          <View style={homeStyles.settingsSection}>
            <Text style={homeStyles.sectionTitle}>Settings</Text>
            {/* <View style={homeStyles.settingItem}>
              <Text style={homeStyles.settingLabel}>Budget Management</Text>
              <TouchableOpacity 
                style={homeStyles.settingButton}
                onPress={() => setShowBudgetInput(true)}
              >
                <Text style={homeStyles.settingButtonText}>Edit Budget</Text>
              </TouchableOpacity>
            </View> */}
            <View style={homeStyles.settingItem}>
              <Text style={homeStyles.settingLabel}>Clear All Expenses</Text>
              <TouchableOpacity 
                style={[homeStyles.settingButton, homeStyles.dangerButton]}
                onPress={() => {
                  Alert.alert(
                    'Clear All Expenses',
                    'Are you sure you want to delete all expenses?',
                    [
                      { text: 'Cancel', style: 'cancel' },
                      { text: 'Clear', style: 'destructive', onPress: () => setExpenses([]) }
                    ]
                  );
                }}
              >
                <Text style={homeStyles.settingButtonText}>Clear All</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      
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
