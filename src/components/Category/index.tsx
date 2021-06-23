import React from 'react';
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 
import { SvgProps } from 'react-native-svg';

import { LinearGradient } from "expo-linear-gradient";

//estilos
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: Boolean
}

export function Category({title, icon:Icon, checked = false, ...rest}: Props)  {

    const {secondary50, secondary70} = theme.colors;

    return (
        <RectButton {...rest}>
            
            <LinearGradient 
                style={styles.container}
                colors={[secondary50, secondary70]}
            >

                <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}> 
                    <View style={checked ? styles.checked : styles.check } />
                    
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Icon width={48} height={48} />
                </View>

            </LinearGradient>

        </RectButton>
    );
}