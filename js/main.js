"use strict";

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


for(let i=0; i<team.length; i++){
    const utente = team[i];
    //console.log(team[i]);
    for(let key in utente){
        console.log(`${key}: ${utente[key]}`);
    }
     console.log("**********************************")
}