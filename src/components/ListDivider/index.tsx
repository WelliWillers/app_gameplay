import React from 'react';
import { View } from "react-native";

//estilos
import { styles } from './styles';

type Props = {
    isCenter?: boolean;
}

export function ListDivider({isCenter}: Props)  {

    return (
        <View style={[
            styles.container,
            isCenter ? {
                marginVertical: 12 
            } : {
                marginTop: 2,
                marginBottom: 31
            }
        ]} />
    );
}