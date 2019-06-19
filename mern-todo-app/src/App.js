import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import createTodo from './components/CreateTodo';
import logo from './logo.png';
import './App.css';


class App extends React.Component {
  render(){ 
    return (
      <BrowserRouter>
       
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} alt=""/>
          </a>
          <Link to='/' className="navbar-brand">记事本</Link>
          <div className="collpase nav-collpase">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to='/' className="nav-link">首页</Link>
              </li>
              <li className="navbar-item">
                <Link to='/create' className="nav-link">创建新事项</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path='/' component={TodoList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={createTodo} />
      </BrowserRouter>
      
    );
  }
 
}

export default App;
