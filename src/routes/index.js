import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Views from '@views';
import {VIEW_HOME} from '@config';

const VIEW_NAVIGATION_OPTIONS = {
  tabBarVisible: false,
};

const STACK_OPTIONS = {
  mode: 'card',
  headerMode: 'none',
};

const NavigationStack = createStackNavigator(
  {
    VIEW_HOME: {
      screen: Views.Home,
      navigationOptions: {...VIEW_NAVIGATION_OPTIONS},
    },
    VIEW_OTHER: {
      screen: Views.Other,
      navigationOptions: {...VIEW_NAVIGATION_OPTIONS},
    },
  },
  {
    ...STACK_OPTIONS,
    initialRouteName: VIEW_HOME,
  },
);

const AppNavigatorView = createAppContainer(NavigationStack);
export default AppNavigatorView;
