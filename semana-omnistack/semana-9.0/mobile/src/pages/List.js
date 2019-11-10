import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, AsyncStorage, Text, Image } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
    const [techs, setTechs] = useState([]);

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