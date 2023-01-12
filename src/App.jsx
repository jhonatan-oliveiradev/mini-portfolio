import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import video from './img/video.mp4';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>Jhonatan Oliveira</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
