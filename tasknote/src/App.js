import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListTaskNoteComponent from './components/ListTaskNoteComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTaskNoteComponent from './components/CreateTaskNoteComponent';
import UpdateTaskNoteComponent from './components/UpdateTaskNoteComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path='/' exact component={ListTaskNoteComponent}></Route>
            <Route path='/tasknotes' component={ListTaskNoteComponent}></Route>
            <Route path='/add-tasknote' component={CreateTaskNoteComponent}></Route>
            <Route path='/update-tasknote/:id' component={UpdateTaskNoteComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
