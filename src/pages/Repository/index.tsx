import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import logoImp from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImp} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/6085932?s=460&u=b3b8df2e1b6a64302badad72d1d8d59901e69607&v=4"
            alt="Gui"
          />
          <div>
            <strong>usuario/repositorio</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1832</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>63</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasd">
          <div>
            <strong>asdasdasdasd</strong>
            <p>dsvsfvsvsvssdsd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
