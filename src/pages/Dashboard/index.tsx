import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard:React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/28963634?s=460&u=ae2eb005bde6b39bf0147b86068e69f8d4c62d67&v=4"
            alt="Alex Gomes"
          />
          <div>
            <strong>alexgomesnet3/gonode</strong>
            <p>RocketSeat study project of the Adonis JS Framework</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )

}; 


export default Dashboard;