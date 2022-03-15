import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        backgroundColor: "#1971f9",
    },
    header: {
        width: "100%",
        justifyContent:"center",
        flexDirection: "row",
    },
    button: {
        width: "auto",
        height: "auto",
        padding: 10,
    },
    h1: {
        fontSize: 50,
        textAlign:'center'
    },
    card: {
        width: "47%",
        height: 175,
        margin: 5,
    },
    cardContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"center",
        marginTop: 20,
        flexWrap:'wrap',
    },
    textInput: {
        width: "87%",
        height: 40,
        textAlign: "center",
        fontSize: 19
    },
    imagesContainer: {
        width: "47%",
        height: 175,
        margin: 5,
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    yellowBackground: {
        backgroundColor: "#fdbf2e"
    },
    redBackground: {
        backgroundColor: "#dc3f51"
    },
    greenBackground: {
        backgroundColor: "#1e8454"
    },
    grayBackground: {
        backgroundColor: "#91989e"
    },
    lightBackground: {
        backgroundColor: "#f8f9fa"
    },
    lightColor: {
        color: "#f8f9fa"
    },
    rounded: {
        borderRadius: 10,
    },
    fullSize: {
        width: "100%",
        height: "100%"
    },
    rightTop: { position: "absolute",right:0,top:0,margin:5,flexDirection:'row' },
    rightBottom: { position: "absolute",right:0, bottom:0,margin:5,flexDirection:'row' },
    leftTop: { position: "absolute",left:0, top:0,margin:5,flexDirection:'row' },
    leftBottom: { position: "absolute",left:0, bottom:0,margin:5,flexDirection:'row' },
    modal: {
        padding:5,
        width: "90%",
        height:300,
    },
});

export default styles;