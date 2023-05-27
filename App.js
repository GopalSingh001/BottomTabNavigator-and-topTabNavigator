import { NavigationContainer } from '@react-navigation/native';
import MaterialBottomTabNavigator from './Screens/MaterialBottomTab/MaterialBottomTabNavigator';
// import 'react-native-gesture-handler';
import StackNavigator from './Screens/StackNavigator/StackNavigator';
export default function App() {
  return (
    <NavigationContainer>

     {/* <MaterialBottomTabNavigator/> */}
     <StackNavigator/>

    </NavigationContainer>
  );
}


