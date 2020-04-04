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
    headerText: {
        fontSize: 15,
        color: "#737380"
    },
    headerTextBold: {
        fontWeight: "bold"
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: "#13131A"
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    },
    incidentsList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginBottom: 16,
        shadowColor: "#000",
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 2, height: 1 },

    },
    incidentProperty: {
        fontSize: 14,
        color: "#41414D",
        fontWeight: "bold"
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
    },
    detailsButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    detailsButtonText: {
        color: "#E02041",
        fontSize: 15,
        fontWeight: "bold" 
    }
});

export default styles;