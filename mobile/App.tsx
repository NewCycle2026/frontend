// mobile/App.tsx
import AuthNavigator from '@/navigations/AuthNavigator';
import BottomTabNavigator from '@/navigations/BottomTabNavigator';
import { useAuthStore } from '@/stores/useAuthStore';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}