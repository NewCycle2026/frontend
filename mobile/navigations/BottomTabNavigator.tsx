// screens/navigations/BottomTabNavigator.tsx
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ESGScreen from '@/screens/ESGScreen';
import HomeScreen from '@/screens/HomeScreen';
import MypageScreen from '@/screens/MypageScreen';
import ScheduleScreen from '@/screens/ScheduleScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home',
            ESG: 'leaf',
            Schedule: 'calendar',
            Mypage: 'person',
          };

          const iconName = icons[route.name] || 'ellipse';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ESG" component={ESGScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Mypage" component={MypageScreen} />
    </Tab.Navigator>
  );
}
