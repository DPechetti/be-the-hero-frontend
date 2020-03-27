import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whastapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whastapp,
      city,
      uf,
    };

    try{
      console.log(data);
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
    } catch(err){
      console.log(err);
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <input 
            placeholder="WhatsApp" 
            value={whastapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;