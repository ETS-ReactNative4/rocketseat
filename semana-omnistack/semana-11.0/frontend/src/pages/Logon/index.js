import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import './styles.css'
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

const Logon = () => {
    const [id, setId] = useState('');
    const history = useHistory();

    const handleLogon = async (e) => {
        e.preventDefault()
        const logonData = { id };
        try {
            const response = await api.post('/session', logonData);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        } catch (err) {
            console.log(err);
            alert('Falha no login, tente novamente!');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt='Be The hero' />

                <form onSubmit={handleLogon}>
                    <h1> Faça seu Logon</h1>
                    <input type="text"
                        placeholder="Your Identity"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={200}>
                        <button className="button" type="submit"> Log In </button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                    </Link>
                    </ReactCSSTransitionGroup>
                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    )
}

export default Logon;