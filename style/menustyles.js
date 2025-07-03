import { StyleSheet } from 'react-native';

export const menuStyles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeMenuItem: {
    backgroundColor: '#e3f2fd',
  },
  menuIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  menuLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  activeMenuLabel: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
