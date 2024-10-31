import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
// Create a stack navigator for handling screen transitions
const Stack = createNativeStackNavigator();

// Main app component
const App = () => {
  return (
    // Wrap everything in NavigationContainer so we can navigate between screens
    <NavigationContainer>
      {/* Setting stack navigator(Helps with screen management) */}
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Don't forget to export the App component so it can be used elsewhere!
export default App;
