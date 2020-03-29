import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import './styles.css'
import api from "../../services/api";

const Profile = () => {
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const loadIncidents = async () => {
            const response = await api.get('/profile', {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(response.data)
        }
        loadIncidents();
    }, [ongId]);

    const handleDeleteIncident = async (id) => {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId
                },
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Be The Hero" />
                    <span>Bem vinda, {ongName}}</span>
                    <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                    <button
                        type="button"
                        onClick={handleLogout}>
                        <FiPower size={18} color="#E02041" />
                    </button>
                </header>

                <h1>Casos Cadastrados</h1>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÂO</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-br', { style: 'currency', curency: 'BRL' }).format(incident.value)}</p>
                            <button className="button"
                                type="button"
                                onClick={() => handleDeleteIncident(incident.value)}>
                                <FiTrash2 size={20} color="#FFF" />
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default Profile;