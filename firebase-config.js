/* Configurația Firebase — același proiect ca la Croșetat și Săptămâna mea.
   Aplicațiile sunt separate, dar împart contul și baza: fiecare scrie în locul ei,
   sub users/<uid>/apps/<aplicație>, iar regulile Firestore le acoperă pe toate.

   Valorile de aici NU sunt secrete — cheia `apiKey` e publică prin design la Firebase.
   Datele sunt protejate de regulile Firestore (fiecare cont vede doar ce e sub
   propriul uid) și de parola contului, care nu apare nicăieri în cod.
*/
window.ANTREN_FIREBASE = {
  apiKey: "AIzaSyAMkZhZ6vUr174RDprj-OsAjBfnpDqRlbs",
  authDomain: "crosetat-270da.firebaseapp.com",
  projectId: "crosetat-270da",
  storageBucket: "crosetat-270da.firebasestorage.app",
  messagingSenderId: "904077624976",
  appId: "1:904077624976:web:c75dd6bc27bf913033a15"
};
