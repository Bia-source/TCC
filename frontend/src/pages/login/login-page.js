import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default function Login() {
  //const [user, setUser] = useState
  const [logerset] = useState(new Animated.ValueXY({x: 0, y: 100}));

  useEffect(() => {
    Animated.spring(logerset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30,
      useNativeDriver: true,
    }).start();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView style={styles.container}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateY: logerset.y}],
            },
          ]}>
          <Text style={styles.title}> Class Search</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu login"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={{fontSize: 16}}> Logar-se</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.textRegister}> Cadastrar-se</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  title: {
    color: '#836FFF',
    fontSize: 50,
    fontWeight: 'normal',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 30,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    width: WIDTH - 55,
    borderRadius: 45,
    fontSize: 16,
    padding: 25,
    color: '#222',
  },
  btnLogin: {
    backgroundColor: '#836FFF',
    width: WIDTH - 55,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    marginBottom: 20,
    marginTop: 20,
  },
  btnRegister: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    color: '#FFF',
  },
  align: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
