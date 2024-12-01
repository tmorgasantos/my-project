import React, { useState } from 'react';
import { styleSheet, View} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontawesome';


export default function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    console.log("entrou")
    console.log(email)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text h1>Colégio Saber coelho neto</Text>
      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />
    <Input
      placeholder="Sua senha"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
    <Button
      icon={
        <Icon
          name="check"
          size={15}
          color="white"
        />
      }
      title="Entrar"
      onPress={() => entrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});