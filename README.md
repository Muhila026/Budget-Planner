# Budget Planner App

A simple React Native budget planner app built with Expo.

## Features

- Add and track expenses
- View budget overview
- Calculate remaining budget
- Delete expenses
- Clean and modern UI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Navigate to the project directory:
   ```bash
   cd BudgetPlannerAppNew
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Scan the QR code with Expo Go app on your mobile device

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android device/emulator
- `npm run ios` - Start on iOS device/simulator (macOS only)
- `npm run web` - Start in web browser

## How to Use

1. **Set Budget**: The default budget is set to $1000. You can modify this in the code.
2. **Add Expenses**: Enter a description and amount, then tap "Add Expense"
3. **Track Spending**: View your total expenses and remaining budget
4. **Delete Expenses**: Tap the "Delete" button next to any expense to remove it

## Project Structure

```
BudgetPlannerAppNew/
├── App.js              # Main application component
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
├── assets/             # Images and icons
└── README.md           # This file
```

## Technologies Used

- React Native
- Expo
- React Hooks (useState)

## License

This project is open source and available under the MIT License. 