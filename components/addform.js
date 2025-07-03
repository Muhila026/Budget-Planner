import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addFormStyles } from '../style/addformstyle';

const AddForm = ({ 
  description, 
  setDescription, 
  amount, 
  setAmount, 
  addExpense,
  showFormSection,
  setShowFormSection
}) => {
  return (
    <View style={addFormStyles.formSection}>
      <TouchableOpacity 
        style={addFormStyles.sectionHeader}
        onPress={() => setShowFormSection(!showFormSection)}
      >
        <Text style={addFormStyles.sectionTitle}>Add New Expense</Text>
        <Text style={addFormStyles.toggleButton}>
          {showFormSection ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {showFormSection && (
        <View>
          <TextInput
            style={addFormStyles.input}
            placeholder="description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={addFormStyles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={addFormStyles.addButton} onPress={addExpense}>
            <Text style={addFormStyles.addButtonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddForm;
