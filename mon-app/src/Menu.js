import './App.css';
import React from 'react';


const profils = [
  {
    nom: "LeBricoleur",
    prenom: "bob",
    date: "18/05/1965",
    phrase :"F5 F5 F5",
    compteur : 0
  },
  {
    prenom: "martine",
    nom: "martine",
    date: "30/05/1955",
    phrase :"Bonjour j'aime pas react",
    compteur : 0
  },
  {
    prenom: "camille",
    nom: "camomille",
    date: "31/02/1965",
    phrase :"Encore moins le Css",
    compteur : 0

  }
];
export default class Menu extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = { idProfil : "1" , thisPrenom : "bob", thisNom:"LeBricoleur", thisDate:"18/05/1965", thisPhrase:"F5 F5 F5", thiscounter :0};
    }
    handleClick(id )
    {
      this.setState(
        {
          idProfil : id,
          thisPrenom : profils[id].prenom,
          thisNom: profils[id].nom,
          thisDate : profils[id].date,
          thisPhrase : profils[id].phrase,
        });
    }

    render()
    {
        return(

          <div>

 
              <button onClick={() => { this.handleClick(0); } }>Jeanne</button>
              <button onClick={() => { this.handleClick(1); } }>Martine</button>
              <button onClick={() => { this.handleClick(2); } }>Claude</button>
              <div>prenom : {this.state.thisPrenom}</div>   
              <div>nom {this.state.thisNom}</div>   
              <div>date {this.state.thisDate}</div>   
              <div>phrase {this.state.thisPhrase}</div>   
              <button onClick={() => this.setState({counter:this.state.counter+1})}>Like</button>
              {this.state.thiscounter}
            
          </div>);
    }
}

