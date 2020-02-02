import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const Profile = ({ navigation }) => {
    const githubUsername = navigation.getParam('github_username');

    return <WebView
        style={container.webView}
        source={{ uri: `https://github.com/${githubUsername}` }} />
}

const container = StyleSheet.create({
    webView: {
        flex: 1,
    }
})

export default Profile;