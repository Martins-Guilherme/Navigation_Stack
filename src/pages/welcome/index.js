import { 
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image,
 } from 'react-native';

 import { styles } from '../SignIn/style';

 import * as Animatable from 'react-native-animatable';

 import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  
  const navigation = useNavigation();

 return (
  <View style={styles.container}>
    
    <View style={styles.containerLogo}>
      <Animatable.Image
      animation='flipInY'
      source={require ('../../assets/logo.png')}
      style={{width: '100%'}}
      resizeMode='contain'
      />
    </View>

    <Animatable.View 
    animation='fadeInUp'
    delay={600}
    style={styles.containerForm}
    >
      <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar.</Text>
      <Text style={styles.text}>Faça o login para começar</Text>

      <TouchableOpacity 
      onPress={ () => {navigation.navigate('SignIn')}}
      style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

    </Animatable.View>
  </View>
  );
}
