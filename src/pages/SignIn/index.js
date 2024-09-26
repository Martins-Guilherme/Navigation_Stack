import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { styles } from './style';

export default function SignIn() {
 return (
  <View style={styles.container}>
    
    <Animatable.View style={styles.containerHeader}
    animation='fadeInLeft' delay={500}>
        <Text style={styles.message}>
          Bem-vindo(a)!
        </Text>
    </Animatable.View>

    <Animatable.View animation='fadeInUp' style={styles.containerForm}>
      <Text style={styles.title}>Email: </Text>
      <TextInput
        placeholder='Digite seu email...'
        style={styles.input}
      />
      
      <Text style={styles.title}>Senha: </Text>
      <TextInput
        placeholder='Sua senha'
        style={styles.input}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>

    </Animatable.View>

  </View>
  );
}
