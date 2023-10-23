import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/infraestructure/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  );
}

