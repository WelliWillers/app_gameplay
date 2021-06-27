import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    image: {
        height: 66,
        width: 62,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.discord,
        overflow: 'hidden'
    },
    container: {
        height: 66,
        width: 62,
    }
});