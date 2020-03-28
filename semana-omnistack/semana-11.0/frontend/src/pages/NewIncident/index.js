import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import Constants from '../../utils/constants';

const NewIncident = () => {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1> Cadastrar novo caso </h1>
                    <p> {Constants.NEW_INCIDENT.DESCRIPTION} </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeftCircle size={16} color="#E02041" />
                    Voltar para home
                    </Link> 
                </section>

                <form>
                    <input type="text" placeholder="Incident title" />
                    <textarea placeholder="Description" />
                    <input type="text" placeholder="Amount: R$ 0,00" />

                    <button className="button" > Register </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;