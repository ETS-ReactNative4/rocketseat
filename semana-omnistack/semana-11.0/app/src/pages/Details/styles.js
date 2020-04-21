import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    incident: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 48,
        shadowColor: '#000000',
        shadowOpacity: 0.6,
        elevation: 20,
    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414D",
        fontWeight: "bold",
        marginTop: 24
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#737380"
    },
    contactBox: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.6,
        elevation: 20,
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#13131A",
        lineHeight: 30,
    },
    heroDescription: {
        fontSize: 15,
        color: "#737380",
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    action: {
        backgroundColor: "#E02041",
        borderRadius: 10,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },
    actionText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
    }

});

export default styles;