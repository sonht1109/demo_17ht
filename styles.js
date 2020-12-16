import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        backgroundColor: "white"
    },
    input: {
        borderColor: '#DFDFDF',
        borderWidth: 1,
        marginVertical: 6,
        paddingHorizontal: 10
    },
    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "100%",
        backgroundColor:"#d1d1d1",
        paddingVertical: 15,
        marginTop: 30
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 60
    }
})

export default globalStyles;