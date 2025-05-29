// mobile/screens/WelcomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  const handleStart = () => {
    navigation.navigate('Login');
  };
/*
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
*/
  return (
    <View style={styles.container}>
      {/* 이미지 제거됨 */}
      <Text style={styles.title}>환영합니다, 웨이플!</Text>
      <Text style={styles.description}>
        지속 가능한 여행을 위한 동행, 지금 시작하세요.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2d6a4f',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
