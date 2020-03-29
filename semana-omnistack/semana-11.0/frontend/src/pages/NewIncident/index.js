import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import Constants from '../../utils/constants';
import api from '../../services/api';

const NewIncident = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const handleNewIncident = async (e) => {
        e.preventDefault();

        const newIncidentData = {
            title,
            description,
            value: amount
        }

        try {
            await api.post('/incidents', newIncidentData, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar novo incidente, tente novamente!');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastrar novo caso </h1>
                    <p> {Constants.NEW_INCIDENT.DESCRIPTION} </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeftCircle size={16} color="#E02041" />
                    Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text"
                        placeholder="Incident title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea type="text"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Amount: R$ 0,00"
                        value={amount}
                        onChange={e => setAmount(e.target.value)} />
                    <button className="button" > Register </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;