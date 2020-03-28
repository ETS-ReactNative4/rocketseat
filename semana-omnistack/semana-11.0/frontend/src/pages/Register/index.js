import React, { useState } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import Constants from '../../utils/constants';
import api from '../../services/api';

const Register = () => {
    const [ongName, setOngName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [ongCity, setOngCity] = useState('');
    const [ongUF, setOngUF] = useState('');

    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault();

        const ongData = {
            name: ongName,
            email,
            whatsApp,
            city: ongCity,
            uf: ongUF
        };
        try {
            const response = await api.post('/ongs', ongData);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente!');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastro </h1>
                    <p> {Constants.REGISTER.SING_IN_TEXT} </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeftCircle size={16} color="#E02041" />
                    Voltar à pagina incial
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input type="text"
                        placeholder="ONG name"
                        value={ongName}
                        onChange={e => setOngName(e.target.value)} />

                    <input type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="text"
                        placeholder="WhatsApp"
                        value={whatsApp}
                        onChange={e => setWhatsApp(e.target.value)} />

                    <div className="input-group" >
                        <input type="text"
                            placeholder="City"
                            value={ongCity}
                            onChange={e => setOngCity(e.target.value)} />
                        <input type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={ongUF}
                            onChange={e => setOngUF(e.target.value)} />
                    </div>

                    <button className="button"> Register </button>
                </form>
            </div>
        </div>
    )
}
export default Register;