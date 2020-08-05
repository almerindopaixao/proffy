import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de descrição."  
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Física', label: 'Física'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'História', label: 'História'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Química', label: 'Química'},
              { value: 'Português', label: 'Português'},
              { value: 'Filosofia', label: 'Filosofia'},
              { value: 'Sociologia', label: 'Sociologia'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Inglês', label: 'Inglês'},
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}