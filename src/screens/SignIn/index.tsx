import React from 'react';
import { View, Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//imagens
import IlustratctionImg from "../../assets/illustration.png"; 

//componentes
import { ButtonIcon } from '../../components/ButtonIcon';

//styles
import { styles } from './styles';

export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}> 
      
      <Image 
        source={IlustratctionImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={ styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas{'\n'}
        </Text>

        <Text style={ styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>
        
        <ButtonIcon 
          title="Entar com Discord"
          onPress={handleSignIn}
        />

      </View>

    </View>
  );
};
