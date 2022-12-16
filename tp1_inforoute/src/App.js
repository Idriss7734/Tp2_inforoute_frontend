// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import {Selection} from './components/Selection';
import { Text } from './components/Text';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreationCompte from './components/CreationCompte';
import AdminEdit from './components/AdminEdit';
import SettingsCompte from './components/SettingsCompte';
import {ViewResults} from './components/ViewResults';

class App extends Component{
  
  constructor(props){
    super();
    //for the text pages
    this.titres = require('./texte/Titres.json');
    this.titresTxt = [];
    
    //to take care of the admin status
    this.state = {isAdmin : false};

    //generate all the elements for the dropdown selector
    this.genLinks();
  }
  
  factor(t) {
    t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    while(t.includes(" ")){
        t = t.replace(" ", '');
    }
    return t;
  }

  genLinks(){
    this.titresTxt = [];
    this.titres.forEach(data =>{
      this.titresTxt.push(
        <Route exact path={"/" + this.factor(data.Titre)} element={<Text page={this.factor(data.Titre)} titre={data.Titre}/>} />
      )}
    );
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/Inscription" element={<CreationCompte/>}/>
            <Route exact path="/Selection" element={<Selection/>} />
            <Route exact path="/SettingsCompte" element={<SettingsCompte />} />
            <Route exact path="/AddText" element={<AdminEdit />} />
            <Route exact path="/Results" element={<ViewResults />} />
            {this.titresTxt}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;