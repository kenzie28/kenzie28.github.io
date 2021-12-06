import './App.css';
import Title from './components/Title.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {


  return (
    <div className="overlay" style={{ backgroundImage: "url(/background.jpeg)" }}>
      <Title title="Welcome to my Website!"/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
