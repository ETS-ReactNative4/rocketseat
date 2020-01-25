import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

import api from "../services/api";

const Main = ({ navigation }) => {
    const [currentRegion, setCurrentRegion] = useState(null);
    const [devs, setDevs] = useState([]);
    const [techs, setTechs] = useState('');

    const loadDevs = async () => {
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs
            }
        });

        setDevs(response.data.devs);
    }

    const handleRegionChanged = (region) => {
        setCurrentRegion(region);
    }
    useEffect(() => {
        const loadPosition = async () => {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.10,
                    longitudeDelta: 0.10
                }
                );
            }
        }
        loadPosition();
    }, [])

    if (!currentRegion) {
        return null;
    }
    return (
        <>
            <MapView
                onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentRegion}
                style={container.mapViewStyle}>
                {devs.map(dev => (
                    <Marker
                        key={dev._id}
                        coordinate={
                            {
                                latitude: dev.location.coordinates[1],
                                longitude: dev.location.coordinates[2]
                            }} >
                        <Image
                            style={container.userProfile}
                            source={{ uri: dev.avatar_url }} />
                        <Callout onPress={() => { navigation.navigate('Profile', { github_username: dev.github_username }) }}>
                            <View style={container.callout}>
                                <Text style={container.devName}>{dev.name}</Text>
                                <Text style={container.devBio}>{dev.bio}</Text>
                                <Text style={container.devTechs}>{dev.techs.join(', ')}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <KeyboardAvoidingView
                behavior="padding"
                style={container.searchForm}>
                <TextInput
                    style={container.serachInput}
                    placeholder="Search for technologies"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={text => setTechs(text)} />
                <TouchableOpacity onPress={loadDevs} style={container.searchButton}>
                    <MaterialIcons
                        name="my-location"
                        size={24}
                        color="#FFFF" />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    )
}

const container = StyleSheet.create({
    mapViewStyle: {
        flex: 1
    },
    userProfile: {
        width: 54,
        height: 54,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#FFFFFF'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },
    searchForm: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    serachInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 20,
    },
    searchButton: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#7D40E7',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 20,
    }

});
export default Main;