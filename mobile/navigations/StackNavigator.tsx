// mobile/navigations/StackNavigator.tsx
// mobile/navigations/StackNavigator.tsx

import LoginScreen from '@/screens/LoginScreen';
import WelcomeScreen from '@/screens/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome" // ✅ 여기!
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
