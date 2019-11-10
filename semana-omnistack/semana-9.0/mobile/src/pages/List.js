import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { SafeAreaView, ScrollView, StyleSheet, AsyncStorage, Alert, Image } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.31.130:3333', {
                query: { user_id }
            });

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'ACEITA' : 'REJEITADA   '}`);
            });
        });
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            if (storageTechs !== null) {
                const techsArray = storageTechs.split(',').map(techs => techs.trim());

                setTechs(techsArray);
            } else {
                techsArray = ['Not found items'];
                setTechs(techsArray);
            }
        })
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 42,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30,
    },
});