import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const RecoveryPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleRecoverAccount = () => {
    // Add your account recovery logic here
    console.log('Recover Account:', { email });
    // For simplicity, just navigate to the Home page
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <Button title="Recover Account" onPress={handleRecoverAccount} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default RecoveryPage;
