import React, {useState} from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Container = styled.View({
  'background-color': '#fefefe',
  'justify-content': 'center',
  'align-items': 'center',
  flex: 1,
});

const StyledText = styled.Text`
  font-size: ${props => props.font};
  color: white;
  font-family: 'LexendDeca-Regular';
`;

const ButtonEffect = styled.TouchableOpacity`
  background-color: #243e1f;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledTextInicio = styled(StyledText)`
  color: ${props => props.color};
`;

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Image source={require('./assets/header_logo.png')} />
      <StyledTextInicio font="60px" color="#224957">
        Inicio de Sesion
      </StyledTextInicio>
      <ButtonEffect>
        <StyledText font="40px" onPress={() => console.log('react funca')}>
          Usuario
        </StyledText>
      </ButtonEffect>
      <ButtonEffect>
        <StyledText font="40px" onPress={() => console.log('react funca')}>
          Contraseña
        </StyledText>
      </ButtonEffect>
    </Container>
    // <View style={styles.container}>
    //   {/* <Image
    //     style={styles.image}
    //     source={require('./assets/header_logo.png')}
    //   /> */}

    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.TextInput}
    //       placeholder="Email."
    //       placeholderTextColor="#003f5c"
    //       onChangeText={email => setEmail(email)}
    //     />
    //   </View>

    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.TextInput}
    //       placeholder="Password."
    //       placeholderTextColor="#003f5c"
    //       secureTextEntry={true}
    //       onChangeText={password => setPassword(password)}
    //     />
    //   </View>

    //   <TouchableOpacity>
    //     <Text style={styles.forgot_button}>Forgot Password?</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.loginBtn}>
    //     <Text style={styles.loginText}>PAA</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   image: {
//     marginBottom: 40,
//   },

//   inputView: {
//     backgroundColor: '#FFC0CB',
//     borderRadius: 30,
//     width: '70%',
//     height: 45,
//     marginBottom: 20,

//     alignItems: 'center',
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },

//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },

//   loginBtn: {
//     width: '80%',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     backgroundColor: '#FF1493',
//   },
// });
