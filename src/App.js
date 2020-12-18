import React from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import StoryForm from './components/StoryForm';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Header />     
        <Switch>
          <Route path="/stories/:story">
            <StoryForm  />
          </Route>
          <Route exact path="/">
            <Filter />
            <Dashboard />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
