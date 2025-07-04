import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { menuStyles } from '../style/menustyles';

const FooterMenu = ({ activeTab, onTabPress }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'add', label: 'Add', icon: '➕' },
    { id: 'expenses', label: 'Expenses', icon: '💰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  
  return (
    <View style={menuStyles.footer}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            menuStyles.menuItem,
            activeTab === item.id && menuStyles.activeMenuItem
          ]}
          onPress={() => onTabPress(item.id)}
        >
          <Text style={menuStyles.menuIcon}>{item.icon}</Text>
          <Text style={[
            menuStyles.menuLabel,
            activeTab === item.id && menuStyles.activeMenuLabel
          ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FooterMenu;
