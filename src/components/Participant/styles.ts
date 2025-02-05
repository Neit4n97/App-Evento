import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        color: 'white',
        flex: 1,
        fontSize: 16,
        marginLeft: 16

    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button2: {
        width: 56,
        height: 56,
        backgroundColor: 'red',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});