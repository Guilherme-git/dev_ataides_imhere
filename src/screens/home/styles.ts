import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121016',
        padding: 24
    },
    containerEventName: {
        flexDirection:'row',
        marginTop: 48
    },
    handleNameEventBtn: {
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    handleNameEventText: {
        color:'#e23e44',
        fontWeight:'bold'
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight:10,
        flex:1
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16,
    },
    form: {
        flexDirection:'row',
        width: '100%',
        marginTop: 36,
        marginBottom:42
    },
    input: {
        flex:1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1f1e25',
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    btn: {
        width: 56,
        height:56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText: {
        fontSize: 24,
        color: '#fff'
    },
    listEmptyText: {
        color:'#fff',
        fontSize:14,
        textAlign:'center'
    }
});
