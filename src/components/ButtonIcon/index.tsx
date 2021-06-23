import React from 'react';
import { Text, View, Image } from "react-native";

//efito que o buttom recebe no determidado tipo de aparelho
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; 

//imagens & estilos
import DiscordIcon from "../../assets/discord.png"
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string,
}

export function ButtonIcon({title, ...rest} : Props )  {
    return (
        <RectButton 
            style={styles.container}
            {...rest}   
        >
            <View style={styles.iconWrapper}>
                <Image 
                    source={DiscordIcon}
                    style={styles.icon}
                />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}