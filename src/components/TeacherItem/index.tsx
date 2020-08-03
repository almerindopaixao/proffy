import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/58123442?s=460&u=9a2176a2f67ba7d79a3d5f59069c7d655b2f016b&v=4" alt="Almerindo Paixão"/>
      <div>
        <strong>Almerindo Paixão</strong>
        <span>Programação</span>
      </div>
    </header>

      <p>
        Programadaor  front end
        <br></br>
        React, html, css, node, javascript
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
  </article>
  );
} 