import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

export default function TeacherForm() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''},
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ])
  }

  function handleCreateClass(e: FormEvent) {

    e.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      subject,
      bio,
      cost: Number(cost),
      schedule: scheduleItems
    })
      .then(() => {
        alert('Cadastrado realizado com sucesso');

        history.push('/');
      })
      .catch((erro) => alert(erro));

  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, indice) => {
      if(indice === index) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de descrição."  
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              label="Nome completo"
            />
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio} 
              onChange={(e) => setBio(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            
            <Input 
              name="cost" 
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo'},
                      { value: '1', label: 'Segunda-feira'},
                      { value: '2', label: 'Terça-feira'},
                      { value: '3', label: 'Quarta-feira'},
                      { value: '4', label: 'Quinta-feira'},
                      { value: '5', label: 'Sexta-feira'},
                      { value: '6', label: 'Sábado'},
                    ]}
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />

                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
              </div>
              );
            })}       
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}
