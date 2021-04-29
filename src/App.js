import './App.css';
import ProjectContainer from './container/ProjectContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="main">
         <ProjectContainer />
      </div>
  

    </div>
  );

}

export default App;
