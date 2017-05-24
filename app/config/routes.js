import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null, // ADD LATER
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      // ADD LATER
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
  },
);
