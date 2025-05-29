// screens/LoginScreen.tsx
import { loginApi } from '@/api/auth';
import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await loginApi(email, password);
      const token = result?.accessToken; // ← 응답 형식에 따라 조정
      if (token) {
        useAuthStore.getState().login(token);
        console.log('✅ 로그인 완료, 토큰 저장됨');
      }
    } catch (err: any) {
      console.log('❌ 로그인 실패 전체 응답:', err);
      console.log('❌ status:', err?.response?.status);
      console.log('❌ message:', err?.response?.data);
      Alert.alert('로그인 실패', err?.response?.data?.message || '오류 발생');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 로그인</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 30,
  },
  input: {
    width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 10,
    marginBottom: 15, borderRadius: 5,
  },
});
