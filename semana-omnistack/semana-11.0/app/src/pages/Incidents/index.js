import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

const Incidents = () => {
    const [total, setTotal] = useEffect(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [incidents, setIncidents] = useState([]);
    
    const navigation = useNavigation();

    const navigateToDetail = (incident) => {
        navigation.navigate('Detail', { incident });
    }

    useEffect(() => {
        const loadIncidents = async () => {
            if (loading) {
                return;
            }
            if (total > 0 && incidents.length === total) {
                return;
            }

            setLoading(true);

            const response = await api.get('/incidents', { params: { page } });

            setIncidents([...incidents, ...response.data]);
            setTotal(response.header['x-total-count']);
            setPage(page + 1);
            setLoading(false);
        }
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            <FlatList
                keyExtractor={incident => String(incident.id)}
                style={styles.incidentsList}
                data={incidents}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.name} </Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentValue}>{incident.title} </Text>

                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )} />
        </View>

    )
}

export default Incidents