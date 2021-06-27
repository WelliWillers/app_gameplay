import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Modal } from "react-native";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";

//componentes
import { Header } from "../../components/Header";
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { SmallInput } from '../../components/SmallInput';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from "../../components/Guild";

//estilos
import { styles } from './styles';
import {Feather} from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";

export function AppointmentCreate(){

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds(){
        setOpenGuildsModal(true);
    }

    function handleCloseModal(){
        setOpenGuildsModal(false);
    }

    function handleguidlSelect(guildSelected: GuildProps){
        setGuild(guildSelected);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
         setCategory(categoryId);
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>

                    <Header 
                        title="Agendar Partida"
                    />

                    <Text style={[styles.label, {marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
                        Categoria
                    </Text>

                    <CategorySelect 
                        hasCheckBox
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}> 
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon /> : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>

                                </View>

                                <Feather 
                                    name="chevron-right"
                                    size={18}
                                    color={theme.colors.heading}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Hora e Minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caratersLimit}>
                                Max 100 caracteres
                            </Text>

                        </View>

                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button 
                                title="Agendar"
                            />
                        </View>
                    
                    </View>

                </ScrollView>
            </Background>
            <ModalView 
                visible={openGuildsModal}
                closeModal={handleCloseModal}
            >
                <Guilds handleguidlSelect={handleguidlSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    );
}