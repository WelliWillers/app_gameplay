import React from 'react';
import { Image } from "react-native";

//estilos
import { styles } from './styles';

export function GuildIcon()  {
    const uri = 'http://placehold.it/500x500';
    return (
        <Image 
            source={{uri}} 
            style={styles.image} 
            resizeMode="cover" 
        />
    );
}