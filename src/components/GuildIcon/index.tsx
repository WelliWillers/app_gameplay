import React from 'react';
import { Image, View } from "react-native";

//estilos
import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';


type Props = {
    guildId: string;
    iconId: string | null;
}

const {CDN_IMAGE} = process.env;

export function GuildIcon({guildId, iconId}: Props)  {
    
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;


    return (
        <View style={styles.container}>
        {
            iconId ? 
            <Image 
                source={{uri}} 
                style={styles.image} 
                resizeMode="cover" 
            />
            :
            <DiscordSvg 
                width={40}
                height={40}
            />
 
        }
        </View>
    );
}