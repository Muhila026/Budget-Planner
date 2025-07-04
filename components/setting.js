import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, Switch } from 'react-native';
import { settingStyles } from '../style/settingstyle';

const Settings = ({ setExpenses, budget, setBudget }) => {
  const [showBudgetInput, setShowBudgetInput] = useState(false);
  const [tempBudget, setTempBudget] = useState(budget);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState('LKR');

  const handleSaveBudget = () => {
    if (!tempBudget.trim() || isNaN(parseFloat(tempBudget))) {
      Alert.alert('Error', 'Please enter a valid budget amount');
      return;
    }
    setBudget(tempBudget);
    setShowBudgetInput(false);
    Alert.alert('Success', 'Budget updated successfully!');
  };

  const handleCancelBudget = () => {
    setTempBudget(budget);
    setShowBudgetInput(false);
  };

  const handleExportData = () => {
    Alert.alert('Export Data', 'Export feature coming soon!');
  };

  const handleImportData = () => {
    Alert.alert('Import Data', 'Import feature coming soon!');
  };

  return (
    <View style={settingStyles.container}>
      {/* Header */}
      {/* <View style={settingStyles.header}>
        <Text style={settingStyles.headerTitle}>Settings</Text>
        <Text style={settingStyles.headerSubtitle}>Customize your budget planner</Text>
      </View> */}

      {/* Budget Management */}
      <View style={settingStyles.section}>
        <Text style={settingStyles.sectionTitle}>💰 Budget Management</Text>
        <View style={settingStyles.settingCard}>
          <View style={settingStyles.settingRow}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Default Budget</Text>
              <Text style={settingStyles.settingDescription}>Set your monthly budget limit</Text>
            </View>
            {showBudgetInput ? (
              <View style={settingStyles.budgetInputContainer}>
                <TextInput
                  style={settingStyles.budgetInput}
                  placeholder="Enter amount"
                  value={tempBudget}
                  onChangeText={setTempBudget}
                  keyboardType="numeric"
                />
                <TouchableOpacity 
                  style={settingStyles.saveButton}
                  onPress={handleSaveBudget}
                >
                  <Text style={settingStyles.saveButtonText}>✓</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={settingStyles.cancelButton}
                  onPress={handleCancelBudget}
                >
                  <Text style={settingStyles.cancelButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity 
                style={settingStyles.editButton}
                onPress={() => setShowBudgetInput(true)}
              >
                <Text style={settingStyles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* App Preferences */}
      {/* <View style={settingStyles.section}>
        <Text style={settingStyles.sectionTitle}>⚙️ App Preferences</Text>
        
        <View style={settingStyles.settingCard}>
          <View style={settingStyles.settingRow}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Dark Mode</Text>
              <Text style={settingStyles.settingDescription}>Switch to dark theme</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#e0e0e0', true: '#2196F3' }}
              thumbColor={darkMode ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={settingStyles.settingCard}>
          <View style={settingStyles.settingRow}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Notifications</Text>
              <Text style={settingStyles.settingDescription}>Get budget alerts</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#e0e0e0', true: '#4CAF50' }}
              thumbColor={notifications ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        <View style={settingStyles.settingCard}>
          <View style={settingStyles.settingRow}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Currency</Text>
              <Text style={settingStyles.settingDescription}>Select your currency</Text>
            </View>
            <TouchableOpacity style={settingStyles.currencyButton}>
              <Text style={settingStyles.currencyButtonText}>{currency}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

      {/* Data Management */}
      <View style={settingStyles.section}>
        <Text style={settingStyles.sectionTitle}>📊 Data Management</Text>
        
        {/* <View style={settingStyles.settingCard}>
          <TouchableOpacity style={settingStyles.settingRow} onPress={handleExportData}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Export Data</Text>
              <Text style={settingStyles.settingDescription}>Backup your expenses</Text>
            </View>
            <Text style={settingStyles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={settingStyles.settingCard}>
          <TouchableOpacity style={settingStyles.settingRow} onPress={handleImportData}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Import Data</Text>
              <Text style={settingStyles.settingDescription}>Restore from backup</Text>
            </View>
            <Text style={settingStyles.arrow}>›</Text>
          </TouchableOpacity>
        </View> */}

        <View style={settingStyles.settingCard}>
          <TouchableOpacity 
            style={settingStyles.settingRow}
            onPress={() => {
              Alert.alert(
                'Clear All Expenses',
                'Are you sure you want to delete all expenses? This action cannot be undone.',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Clear All', style: 'destructive', onPress: () => setExpenses([]) }
                ]
              );
            }}
          >
            <View style={settingStyles.settingInfo}>
              <Text style={[settingStyles.settingLabel, settingStyles.dangerText]}>Clear All Expenses</Text>
              <Text style={settingStyles.settingDescription}>Delete all expense data</Text>
            </View>
            <Text style={[settingStyles.arrow, settingStyles.dangerText]}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* App Info */}
      <View style={settingStyles.section}>
        <Text style={settingStyles.sectionTitle}>ℹ️ App Info</Text>
        <View style={settingStyles.settingCard}>
          <View style={settingStyles.settingRow}>
            <View style={settingStyles.settingInfo}>
              <Text style={settingStyles.settingLabel}>Version</Text>
              <Text style={settingStyles.settingDescription}>Budget Planner v1.0.0</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
