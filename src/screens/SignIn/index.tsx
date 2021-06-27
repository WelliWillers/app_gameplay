import React from 'react';
import { View, Text,Image, Alert, ActivityIndicator } from 'react-native';

//context
import { useAuth } from '../../hooks/auth';

//imagens
import IlustratctionImg from "../../assets/illustration.png"; 

//componentes
import { ButtonIcon } from '../../components/ButtonIcon';
import {Background} from '../../components/Background';

//styles
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SignIn(){

  const {loading, signIn} = useAuth();

  async function handleSignIn(){
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return(
    <Background>
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
          
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title="Entrar com Discord"
              onPress={handleSignIn}
            />  
          }  

        </View>

      </View>
    </Background>
  );
};
