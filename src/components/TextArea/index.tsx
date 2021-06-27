import React, { useState } from "react";
import { View, TextInput, TextInputProps} from "react-native";

//estilos
import { styles } from './styles';

export function TextArea({...rest}: TextInputProps){

    const [category, setCategory] = useState('');

    return(
        <TextInput 
            style={styles.container}
            {...rest}
        />
    );
}