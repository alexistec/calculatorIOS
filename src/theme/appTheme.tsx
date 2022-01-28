import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottom:{
        flex:1,
        backgroundColor: '#000',
    },
    container:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'flex-end'
    },
    text:{
        color:'#fff',
        fontSize:20
    },
    result: {
        color:'#fff',
        fontSize:60,
        textAlign:'right',

    },
    smallText : {
        fontSize:30,
        textAlign:'right',
        color: 'rgba(255,255,255,0.5)'
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    botonText : {
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'#FFF',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    }
});