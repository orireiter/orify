import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    container: {
      width: 'auto',
      flex: 1,
      backgroundColor: '#340a79',
      alignItems: 'center',
      justifyContent: 'center',
    }
})
    
export const authStyle = StyleSheet.create({
    form: {
        flex: 3,
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 0,
        minWidth: '85%',
    },
    formHeader: {
        paddingTop: 90,
        flex: 3,
        color: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 40,
    },
    formInput: {
        minHeight: '10%',
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor: '#2A0861',
        color: '#fff',
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: '10%',
        
    },
    formHandler: {
        backgroundColor: '#0A2A7B',
        borderRadius: 15,
    },
    submit: {
        flex: 1,
        maxWidth: '60%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    submitText: {
        paddingTop: '10%',
        paddingBottom: '5%',
        fontSize: 18,
        color: '#fff'
    },
    submitLinkView: {
        borderRadius: 20,
    },
    submitLink: {
        fontSize: 20,
        color: '#fff',
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 0,
        minWidth: '40%',
        backgroundColor: '#340a79',
        textAlign: 'center',
        paddingBottom: '5%',
        paddingTop: '5%'
    }
});

export const landingStyle = StyleSheet.create({
    header: {
        paddingTop: 90,
        flex: 3,
        alignItems: 'center',
        alignSelf: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 40,
    },
    links: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    LinkView: {
        borderRadius: 20,
        backgroundColor: '#340a79',
        justifyContent: 'space-evenly',
    },
    link: {
        justifyContent: 'space-evenly',
        fontSize: 20,
        color: '#fff',
        borderRadius: 20,
        borderColor: '#2A0861',
        borderWidth: 2,
        minWidth: '40%',
        backgroundColor: '#340a79',
        textAlign: 'center',
        // paddingBottom: '5%',
        paddingVertical: '5%',
        marginHorizontal: '2%',
    }
})