import React, { useState, useEffect  } from "react";
import { View, Text, ImageBackground, FlatList, Alert, Platform, Share } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import * as Linking from 'expo-linking';

//componentes
import { Header } from "../../components/Header";
import {Background} from '../../components/Background';
import {ListHeader} from '../../components/ListHeader';
import {ListDivider} from '../../components/ListDivider';
import { Member, MemberProps } from "../../components/Member";
import { AppointmentsProps } from "../../components/Appointment";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Load } from "../../components/Load";

//estilos
import { styles } from './styles';
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';

type Params = {
    guildSelected: AppointmentsProps;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails(){

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

    const route = useRoute();
    const {guildSelected} = route.params as Params;

    const [loading, setLoading] = useState(true);

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
            ? `Junte-se a ${guildSelected.guild.name}`
            : widget.instant_invite;
    
        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton onPress={handleShareInvitation}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>  
            {
                loading ? <Load/> :
                <>
                    <ListHeader 
                    title="Jogadores"
                    subtitle={`Total ${widget.members.length ? widget.members.length : 0}`}
                    />
                    {
                
                        <FlatList 
                        data={widget.members ? widget.members : []}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCenter/>}
                        style={styles.members}
                        ListEmptyComponent={() => (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>
                                    Não há ninguém online agora.
                                </Text>
                            </View>
                          )}
                        />
                    }
                </>
            }
                    
            {
                guildSelected.guild.owner &&

                <View style={styles.footer}>
                    <ButtonIcon
                        title="Entrar na partida"
                        onPress={handleOpenGuild}
                    />
                </View>
            }

        </Background>
    );
}