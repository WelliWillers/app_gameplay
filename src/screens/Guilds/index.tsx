import React from 'react';
import { View, FlatList } from 'react-native';

//componentes
import {Guild, GuildProps} from '../../components/Guild';
import {ListDivider} from '../../components/ListDivider';

//styles
import { styles } from './styles';


type Props = {
  handleguidlSelect: (guild: GuildProps) => void;
}

export function Guilds({handleguidlSelect}: Props){

  const guilds = [
    {
      id: "1",
      name: "Guilds teste",
      icon: null,
      owner: true
    },
    {
      id: "2",
      name: "Guilds teste",
      icon: null,
      owner: true
    },
    {
      id: "3",
      name: "Guilds teste",
      icon: null,
      owner: true
    }
  ]

  return(
    <View style={styles.container}>
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
    </View>
  );
};
