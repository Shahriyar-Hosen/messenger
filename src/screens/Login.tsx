import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IScreenNavigation} from '../types';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<IScreenNavigation>();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.subContainer}>
          <Text style={styles.sighIN}>Sign In</Text>
          <Text style={styles.yourAccount}>Sign In to your Account</Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter your Email"
              placeholderTextColor={'black'}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholderTextColor={'black'}
              placeholder="Enter your password"
            />
          </View>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.mt15}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.navigateText}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  subContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sighIN: {
    color: '#4A55A2',
    fontSize: 17,
    fontWeight: '600',
  },
  yourAccount: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 15,
    color: 'black',
  },
  formContainer: {
    marginTop: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    width: 300,
  },
  btn: {
    width: 200,
    backgroundColor: '#4A55A2',
    padding: 15,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigateText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
});
