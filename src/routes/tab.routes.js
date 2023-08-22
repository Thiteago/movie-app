import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Login"
        component={Login}
      />
    </Navigator>
  )
}