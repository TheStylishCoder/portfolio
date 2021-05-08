import './App.css';
import ProjectContainer from './container/ProjectContainer';
import Sidebar from './components/Sidebar';
import './static/css/Tablet.css';
import './static/css/Mobile.css';

function App() {


  return (
    <div className="App">
      <div className="main">
        <Sidebar />
         <ProjectContainer />
      </div>
  

    </div>
  );

}

export default App;
