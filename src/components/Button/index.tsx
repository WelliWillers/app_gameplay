import React from 'react';
import { Text} from "react-native";

//efito que o buttom recebe no determidado tipo de aparelho
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 

//imagens & estilos
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string,
}

export function Button({title, ...rest} : Props )  {
    return (
        <RectButton 
            style={styles.container}
            {...rest}   
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}