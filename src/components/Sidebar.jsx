import avatar from '../img/eu.png';

import '../styles/components/sidebar.sass';
import InfoContainer from './InfoContainer';
import SocialNetworkContainer from './SocialNetworkContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Jhonatan Oliveira" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InfoContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
