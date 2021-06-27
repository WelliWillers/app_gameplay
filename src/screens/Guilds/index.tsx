import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

//componentes
import {Guild, GuildProps} from '../../components/Guild';
import {Load} from '../../components/Load';
import {ListDivider} from '../../components/ListDivider';

//styles
import { styles } from './styles';
import { api } from '../../services/api';


type Props = {
  handleguidlSelect: (guild: GuildProps) => void;
}

export function Guilds({handleguidlSelect}: Props){

  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds(){
    const response = await api.get('users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  },[]);
  return(
    <View style={styles.container}>
      {
        loading ? <Load /> :
        <FlatList
          data={guilds} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild
              data={item}
              onPress={() => handleguidlSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCenter/>}
          contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
          ListHeaderComponent={() => <ListDivider isCenter />}
          style={styles.guilds}
        />
      }
    </View>
  );
};
