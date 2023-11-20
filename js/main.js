"use strict";
//funzioni
 function datiTeam (){
//ciclo
for (let i = 0; i < team.length; i++) {
    let utente = team[i];
    let utentecontainer = document.createElement("div");
    utentecontainer.classList.add("utente")
    //console.log(team[i]);
  
    //ciclo key
    for (let key in utente) {
  
      //creiamo un paragrafo
      let info = document.createElement("p");
      info.textContent = `${key}: ${utente[key]}`;
      utentecontainer.append(info);
      teamContainer.append(utentecontainer);
      console.log(`${key}: ${utente[key]}`);
    }
    console.log("**********************************");
  }
  
 }

//dichiarazione oggetti in un array
const team = [
  {
    "nome-cognome": "Wayne Barnett",
    professione: "Founder & CEO",
    fotoprofilo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    "nome-cognome": "Angela Caroll",
    professione: "Chief Editor",
    fotoprofilo: "angela-caroll-chief-editor.jpg",
  },
  {
    "nome-cognome": "Walter Gordon",
    professione: "Office Manager",
    fotoprofilo: "walter-gordon-office-manager.jpg",
  },
  {
    "nome-cognome": "Angela Lopez",
    professione: "Social Media Manager",
    fotoprofilo: "angela-lopez-social-media-manager.jpg",
  },
  {
    "nome-cognome": "Scott Estrada",
    professione: "Developer",
    fotoprofilo: "scott-estrada-developer.jpg",
  },
  {
    "nome-cognome": "Barbara Ramos",
    professione: "Graphic Designer",
    fotoprofilo: "barbara-ramos-graphic-designer.jpg",
  },
];

// dichiariamo il container per i dati
const teamContainer = document.querySelector(".container");

datiTeam();

