import React, { useState } from "react";
import { View, TextInput, TextInputProps} from "react-native";

//estilos
import { styles } from './styles';
import { theme } from "../../global/styles/theme";

export function SmallInput({...rest}: TextInputProps){

    const [category, setCategory] = useState('');

    return(
        <TextInput 
            style={styles.container}
            {...rest}
            keyboardType="numeric"
        />
    );
}