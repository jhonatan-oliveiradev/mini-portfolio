import '../styles/components/main-content.sass';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

const MainContent = () => {
  return (
    <div id="main-content">
      <div className="menu-circle"></div>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </div>
  );
};

export default MainContent;
