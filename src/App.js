//import './App.css';
import {Main} from './components/Main/index.js'
import {Search} from './components/Search/index.js'
import {NavBar} from './components/NavBar/index.js'
import {Contact} from './components/Contacts/index.js'

function App() {
  return (
    <div className="App">
      <Main>
        <NavBar>
          <Search/>
        </NavBar>
        <Contact/>
        <Contact/>
        <Contact/>
      </Main>
    </div>
  );
}

export default App;
